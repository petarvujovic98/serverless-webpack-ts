import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

export const helloWorld: APIGatewayProxyHandler = async function ({ body }) {
  if (JSON.parse(body).source === "warmup") {
    console.log("WarmUP - Lambda is warm!");
    return { statusCode: 200, body: "Lambda is warm!" };
  }

  return { statusCode: 200, body: "Hello World!" };
};
