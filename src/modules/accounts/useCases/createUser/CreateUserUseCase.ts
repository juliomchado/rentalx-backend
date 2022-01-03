import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute(data: ICreateUserDTO): Promise<void> {
        const { name, email, driver_license, password } = data;

        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("User already exists");
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
