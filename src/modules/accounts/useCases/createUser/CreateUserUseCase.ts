import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(data: ICreateUserDTO): Promise<void> {
        const { name, email, driver_license, password } = data;

        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError("User already exists");
        }

        const hashPassword = await hash(password, 8);

        await this.usersRepository.create({
            name,
            email,
            password: hashPassword,
            driver_license
        });
    }
}

export { CreateUserUseCase };
