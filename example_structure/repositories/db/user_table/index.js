import MyORM from "my-database-orm";

export function my_orm_user_repository() {
  function find_user(email) {
    const user = MyORM.find({
      table: "user",
      where: {
        email: email,
      },
    });

    /* Before returning the data, transform into a structure agnostic of the framework  */
    return transformUserToJSON(user);
  }

  return {
    find_user: find_user,
  };
}
