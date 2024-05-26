import {
  databasesClient,
  databaseID,
  vehiclesCollection,
  generateID,
} from "./api";

export class vehicleService {
  static async registerVehicle(formData) {
    const response = await databasesClient.createDocument(
      databaseID,
      vehiclesCollection,
      generateID,
      formData
    );
    return response;
  }

  static async getRegisteredVehicles() {
    const response = await databasesClient.listDocuments(
      databaseID,
      vehiclesCollection
    );
    return response;
  }
}
