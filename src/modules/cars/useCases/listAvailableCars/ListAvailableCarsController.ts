import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

interface IRequest {
    category_id?: string;
    brand?: string;
    name?: string;
}

class ListAvailableCarsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { brand, name, category_id } = req.query;

        const listAvailableCarsUseCase = container.resolve(
            ListAvailableCarsUseCase
        );

        const cars = await listAvailableCarsUseCase.execute({
            brand,
            category_id,
            name
        } as IRequest);

        return res.json(cars);
    }
}

export { ListAvailableCarsController };
