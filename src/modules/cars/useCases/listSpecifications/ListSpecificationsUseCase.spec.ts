import { SpecificationsRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory";

import { CreateSpecificationUseCase } from "../createSpecification/CreateSpecificationUseCase";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;
let specificationsUseCase: ListSpecificationsUseCase;

describe("List Specifications", () => {
    beforeEach(() => {
        specificationsRepositoryInMemory =
            new SpecificationsRepositoryInMemory();

        specificationsUseCase = new ListSpecificationsUseCase(
            specificationsRepositoryInMemory
        );
    });

    it("should be list all specifications", async () => {
        await specificationsRepositoryInMemory.create({
            name: "Category test name",
            description: "Category test description"
        });

        const response = await specificationsUseCase.execute();

        expect(response[0]).toHaveProperty("id");
        expect(response.length).toEqual(1);
        expect(response[0].name).toEqual("Category test name");
    });
});
