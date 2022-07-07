import Redis from "redis";

export function redis_repository() {
  function get(key) {
    const redis = new Redis();

    const record = redis.get(key);

    return transformRedisRecordToData(record);
  }

  return {
    get: get,
  };
}
