export const userLoginResolvers = {
  Query: {
    async login({ email }, context) {
      try {
        const user = context.services.user_service.find_user(email);
        return {
          data: user,
          error: null,
        };
      } catch (error) {
        if (error.name === "UserNotFoundError") {
          return {
            data: null,
            error: new GraphQLError(error.message),
          };
        }
        return {
          data: null,
          error: new GraphQLError("Unexpected Error"),
        };
      }
    },
  },
};
