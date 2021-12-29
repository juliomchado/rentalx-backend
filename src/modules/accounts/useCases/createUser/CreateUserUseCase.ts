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
        // const { name, username, email, driver_license, password } = data;

        await this.usersRepository.create(data);
    }
}

export { CreateUserUseCase };
