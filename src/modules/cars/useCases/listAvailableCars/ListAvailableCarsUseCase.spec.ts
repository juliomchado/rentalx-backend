import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe("List cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(
            carsRepositoryInMemory
        );
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

        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car, car2]);
    });

    it("should be able to list all available cars by name", async () => {
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

        const cars = await listAvailableCarsUseCase.execute({
            name: "CAR2_test"
        });

        expect(cars).toEqual([car2]);
    });

    it("should be able to list all available cars by brand", async () => {
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

        const cars = await listAvailableCarsUseCase.execute({
            brand: "Car_Brand_2"
        });

        expect(cars).toEqual([car2]);
    });
    it("should be able to list all available cars by category_id", async () => {
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
            category_id: "321321321"
        });

        const cars = await listAvailableCarsUseCase.execute({
            category_id: "321321321"
        });

        expect(cars).toEqual([car2]);
    });
});
