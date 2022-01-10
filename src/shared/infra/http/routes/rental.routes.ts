import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { DevolutionRentalController } from "@modules/rentals/useCases/devolutionRental/DevolutionRentalController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const revolutionRentalController = new DevolutionRentalController();

rentalRoutes.post("/", ensureAuthenticated, (req, res) =>
    createRentalController.handle(req, res)
);

rentalRoutes.post("/devolution/:id", ensureAuthenticated, (req, res) =>
    revolutionRentalController.handle(req, res)
);

export { rentalRoutes };
