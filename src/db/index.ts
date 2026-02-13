import { DataSource } from "typeorm";

export const entities = {
};

export const AppDataSource = new DataSource({
	type: "postgres",
	url: process.env.DB_URL,
	synchronize: true,
	entities,
});

export const repositories = {
} as const;

export default AppDataSource;
