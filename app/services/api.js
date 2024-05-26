import { Client, Account, ID, Databases } from "appwrite";

const client = new Client();

const baseURL = "https://cloud.appwrite.io/v1";
const projectID = process.env.NEXT_PUBLIC_PROJECTID;
export const databaseID = process.env.NEXT_PUBLIC_DATABASEID;
export const vehiclesCollection = process.env.NEXT_PUBLIC_VEHICLECOLLECTION;

client.setEndpoint(baseURL).setProject(projectID);

export const accountClient = new Account(client);
export const databasesClient = new Databases(client);
export const generateID = ID.unique();
