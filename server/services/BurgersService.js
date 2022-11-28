import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class BurgersService {
  async getAll() {
    const burgers = await dbContext.Burgers;
    return burgers;
  }
  async getOne(burgerId) {
    const burger = await dbContext.Burgers.find((b) => b.id == burgerId);
    if (!burger) throw new BadRequest("no burger named" + burgerId);
    return burger;
  }
}

export const burgersService = new BurgersService();
