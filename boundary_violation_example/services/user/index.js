import HttpErrors from "http-errors";
import MyORM from "my-database-orm";

import user_repository from "../../repositories/db/user_table";
import cache_service from "./services/cache";

export function user_service() {
  function find_user(email) {
    const cached_user = cache_service.find_user(email);

    if (cached_user) {
      return cached_user;
    }

    const user = user_repository.find_user(email);

    if (!user) {
      throw new HttpErrors(404);
    }

    MyORM.save({
      table: "analytics",
      data: {
        action: "user_login",
        email: email,
      },
    });

    return user;
  }

  return {
    find_user: find_user,
  };
}
