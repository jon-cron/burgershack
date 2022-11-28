import mongoose from "mongoose";
import { AccountSchema } from "../models/Account";
import { ValueSchema } from "../models/Value";

class DbContext {
  // Values = mongoose.model('Value', ValueSchema);
  // Account = mongoose.model('Account', AccountSchema);

  Burgers = [
    {
      id: 1,
      name: "regular",
      description: "it is a burger",
      price: 13,
    },
    {
      id: 2,
      name: "cheeseburger",
      description: "it is a cheeseburger",
      price: 120,
    },
    {
      id: 3,
      name: "bacon cheeseburger",
      description: "it is a bacon cheeseburger",
      price: 5,
    },
  ];
}

export const dbContext = new DbContext();
