import { Router } from "express";

import { SendForgotPasswordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();

passwordRoutes.post("/forgot", (req, res) =>
    sendForgotPasswordMailController.handle(req, res)
);

export { passwordRoutes };
