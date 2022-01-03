import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [bearer, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "388a56dbb62a010dc26a378981346247"
        ) as IPayload;

        const usersRepository = new UsersRepository();

        const user = usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("Users does not exists!", 401);
        }

        next();
    } catch (err) {
        throw new AppError("Invalid token!", 401);
    }
}
