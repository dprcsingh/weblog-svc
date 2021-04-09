// Resolvers define the technique for fetching the types defined in the
import { UserInputError } from "apollo-server";
import userData from "./mockData";

const resolvers = {
  Query: {
    getData: (parent, args, ctx) => {
      return userData;
    },
    getDataById: (parent, args, ctx) => {
      const data = userData.find((item) => item.id === args.id);
      if (!data) {
        throw new UserInputError("Invalid id is provided");
      }
      return data;
    },
  },
};

export default resolvers;
