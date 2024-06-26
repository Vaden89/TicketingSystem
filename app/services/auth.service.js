import { accountClient, generateID } from "./api";

export class AuthService {
  static async createUser(email, password, userName) {
    const response = await accountClient.create(
      generateID,
      email,
      password,
      userName
    );
    return response;
  }

  static async login(email, password) {
    const response = await accountClient.createEmailSession(email, password);
    return response;
  }

  static async logout() {
    const response = await accountClient.deleteSession("current");
    return response;
  }

  static async getLoggedInUser() {
    const response = await accountClient.get();
    return response;
  }
}
