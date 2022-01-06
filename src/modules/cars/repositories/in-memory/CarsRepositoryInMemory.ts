import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
    cars: Car[] = [];

    async create(data: ICreateCarDTO): Promise<Car> {
        const car = new Car();

        Object.assign(car, data);
        this.cars.push(car);

        return car;
    }

    async findByLicensePlate(license_plate: string): Promise<Car> {
        const car = this.cars.find(
            (car) => car.license_plate === license_plate
        );

        return car;
    }

    async findAllAvailable(
        brand?: string,
        name?: string,
        category_id?: string
    ): Promise<Car[]> {
        const availableCars = this.cars.filter(({ available }) => available);
        const queryCars = availableCars.filter(
            (car) =>
                (name && car.name === name) ||
                (brand && car.brand === brand) ||
                (category_id && car.category_id === category_id)
        );
        return queryCars.length ? queryCars : availableCars;
    }
}

export { CarsRepositoryInMemory };
