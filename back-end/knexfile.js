module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db/todos.sqlite3"
    },
    useNullAsDefault: true,
    migrations: { directory: "./db/migrations" }
  }
};
