import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { DevolutionRentalController } from "@modules/rentals/useCases/devolutionRental/DevolutionRentalController";
import { ListRentalsByUserController } from "@modules/rentals/useCases/listRentalsByUser/ListRentalsByUserController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const revolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

rentalRoutes.post("/", ensureAuthenticated, (req, res) =>
    createRentalController.handle(req, res)
);

rentalRoutes.post("/devolution/:id", ensureAuthenticated, (req, res) =>
    revolutionRentalController.handle(req, res)
);

rentalRoutes.get("/users", ensureAuthenticated, (req, res) =>
    listRentalsByUserController.handle(req, res)
);

export { rentalRoutes };
