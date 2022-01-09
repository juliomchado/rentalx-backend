import {
    Connection,
    createConnection as typeormCreateConnection,
    getConnectionOptions
} from "typeorm";

export async function createConnection(host = "database"): Promise<Connection> {
    const defaultOptions = await getConnectionOptions();

    return typeormCreateConnection(
        Object.assign(defaultOptions, {
            host: process.env.NODE_ENV === "test" ? "localhost" : host,
            database:
                process.env.NODE_ENV === "test"
                    ? "rentx_test"
                    : defaultOptions.database
        })
    );
}
