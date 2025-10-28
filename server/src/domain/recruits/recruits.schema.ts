import { z } from "../../common/zodOpenApi.js";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";

export const registry = new OpenAPIRegistry();

export const RecruitsSchema = z
  .object({
    id: z.number().int().openapi({ description: "게시글 ID", example: 1 }),
    title: z.string().min(1).max(100).openapi({
      description: "스터디 모집글 제목",
      example: "Next.js 스터디 모집",
    }),
  })
  .openapi("Recruits");

// Recruits생성용 스키마 (id 제외)
export const CreateRecruitsSchema = RecruitsSchema.omit({ id: true }).openapi(
  "CreateRecruits"
);

/* API Document */

registry.registerPath({
  tags: ["Recruits : 모집글 API"],
  method: "get",
  path: "/api/recruits",
  summary: "모든 모집글 조회",
  responses: {
    200: {
      description: "조회 성공",
      content: {
        "application/json": {
          schema: RecruitsSchema,
        },
      },
    },
  },
});

registry.registerPath({
  tags: ["Recruits : 모집글 API"],
  method: "post",
  path: "/api/recruits",
  summary: "모집글 생성",
  request: {
    params: CreateRecruitsSchema,
  },
  responses: {
    201: {
      description: "생성 성공",
      content: {
        "application/json": {
          schema: RecruitsSchema,
        },
      },
    },
  },
});
