import { Router } from "express";

import { ResetPasswordUserController } from "@modules/accounts/useCases/resetPasswordUser/ResetPasswordUserController";
import { SendForgotPasswordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();
const resetPasswordUserController = new ResetPasswordUserController();

passwordRoutes.post("/forgot", (req, res) =>
    sendForgotPasswordMailController.handle(req, res)
);

passwordRoutes.post("/reset", (req, res) =>
    resetPasswordUserController.handle(req, res)
);

export { passwordRoutes };
