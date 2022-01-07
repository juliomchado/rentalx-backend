import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationControler } from "@modules/cars/useCases/CreateCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationControler = new CreateCarSpecificationControler();

carsRoutes.post("/", ensureAuthenticated, ensureAdmin, (req, res) =>
    createCarController.handle(req, res)
);

carsRoutes.get("/available", (req, res) =>
    listAvailableCarsController.handle(req, res)
);

carsRoutes.post(
    "/specifications/:id",
    ensureAuthenticated,
    ensureAdmin,
    (req, res) => createCarSpecificationControler.handle(req, res)
);

export { carsRoutes };
