import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
    async handle(req: Request, res: Response): Promise<Response> {
        const updateUserAvatarUseCase = container.resolve(
            UpdateUserAvatarUseCase
        );

        const avatarFile = req.file.filename;

        const { id } = req.user;

        await updateUserAvatarUseCase.execute({ userId: id, avatarFile });

        return res.status(204).send();
    }
}

export { UpdateUserAvatarController };
