import user_repository from "../../repositories/db/user_table";

export function user_service() {
  function find_user(email) {
    const user = user_repository.find_user(email);

    if (!user) {
      throw new UserNotFoundError(email);
    }

    return user;
  }

  return {
    find_user: find_user,
  };
}
