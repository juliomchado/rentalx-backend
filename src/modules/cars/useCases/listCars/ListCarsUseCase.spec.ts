import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./ListCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listCarsUseCase: ListCarsUseCase;

describe("List cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
    });

    it("should be able to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "CAR 1",
            description: "Car description",
            daily_rate: 110,
            license_plate: "XXX-XXX0",
            fine_amount: 40,
            brand: "Car Brand",
            category_id: "category_id"
        });

        const car2 = await carsRepositoryInMemory.create({
            name: "CAR 2",
            description: "Car description",
            daily_rate: 110,
            license_plate: "XXX-XXX1",
            fine_amount: 40,
            brand: "Car Brand",
            category_id: "category_id"
        });

        const cars = await listCarsUseCase.execute({});

        expect(cars).toEqual([car, car2]);
    });

    it("should be able to list all available cars by name, brand or category_id", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "CAR 1",
            description: "Car description",
            daily_rate: 110,
            license_plate: "XXX-XXX0",
            fine_amount: 40,
            brand: "Car Brand",
            category_id: "category_id"
        });

        const car2 = await carsRepositoryInMemory.create({
            name: "CAR2_test",
            description: "Car description",
            daily_rate: 110,
            license_plate: "XXX-XXX1",
            fine_amount: 40,
            brand: "Car_Brand_2",
            category_id: "category_id"
        });

        const cars = await listCarsUseCase.execute({
            name: "CAR2_test"
        });

        expect(cars).toEqual([car2]);
    });
});
