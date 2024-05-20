import { Client, Account, ID } from "appwrite";

const client = new Client();

const baseURL = "https://cloud.appwrite.io/v1";
const projectID = process.env.NEXT_PUBLIC_PROJECTID;

client.setEndpoint(baseURL).setProject(projectID);

export const accountClient = new Account(client);
export const generateID = ID.unique();
