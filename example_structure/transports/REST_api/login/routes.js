const app = MyHttpServer();

app.get("/user/:email", (request, response, context) => {
  try {
    const user = context.services.user_service.find_user(request.query.email);
    return response.status(200).send({ user: user });
  } catch (error) {
    if (error.name === "UserNotFoundError") {
      return response
        .status(404)
        .send({ message: "Could not find user", email: email });
    }

    return response.status(500).send({ message: "Unexpected Error" });
  }
});
