import {
  OpenApiGeneratorV3,
  OpenAPIRegistry,
} from "@asteasolutions/zod-to-openapi";
import { registry } from "../domain/recruits/recruits.schema.js";

const generator = new OpenApiGeneratorV3(registry.definitions);
console.log("registry.definitions:", registry.definitions); // 문서 정의한 객체들이 담김
const components = generator.generateComponents();

export const swaggerDocument = generator.generateDocument({
  openapi: "3.0.0",
  servers: [{ url: "/api/", description: "" }],
  info: {
    title: "Groother API",
    description: "Groother API 입니다.",
    version: "1.0.0",
  },
});
