import { dbContext } from "../db/DbContext.js";

class BurgersService {
  async getAll() {
    const burgers = await dbContext.Burgers;
    return burgers;
  }
}

export const burgersService = new BurgersService();
