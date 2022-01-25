import { container } from "tsyringe";

import { IMailProvider } from "./IMailProvider";
import { EtherealMailprovider } from "./implementations/EtherealMailProvider";
import { SesMailProvider } from "./implementations/SesMailProvider";

const mailProvider = {
    ethereal: container.resolve(EtherealMailprovider),
    ses: container.resolve(SesMailProvider)
};

container.registerInstance<IMailProvider>(
    "MailProvider",
    mailProvider[process.env.MAIL_PROVIDER]
);
