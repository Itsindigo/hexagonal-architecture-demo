import redis_repository from "../../repositories/redis";

export function cache_service() {
  function find_user(key) {
    return redis_repository.get(`user:${key}`);
  }

  return {
    find_user: find_user,
  };
}
