import { response } from "express";
import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super("api/burgers").get("", this.getAll);
  }
  async getAll(req, res, next) {
    try {
      const burgers = await burgersService.getAll();
      return response.send(burgers);
    } catch (error) {
      next(error);
    }
  }
}
