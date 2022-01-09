import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "@modules/cars/useCases/listSpecifications/ListSpecificationsController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationController();

specificationRoutes.post("/", ensureAuthenticated, ensureAdmin, (req, res) => {
    createSpecificationController.handle(req, res);
});

specificationRoutes.get("/", ensureAuthenticated, (req, res) => {
    listSpecificationsController.handle(req, res);
});

export { specificationRoutes };
