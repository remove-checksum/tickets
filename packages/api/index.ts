import fastify from "fastify";

const server = fastify();

server.get("/cock", () => "SUS");

server.listen({ port: 6969 }, () => console.log("listening to cock"));
