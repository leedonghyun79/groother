import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

// Zod에 OpenAPI 확장 기능 추가
extendZodWithOpenApi(z);

// 이제 다른 스키마 파일에서 z를 그대로 import 해서 사용 가능
export { z };
