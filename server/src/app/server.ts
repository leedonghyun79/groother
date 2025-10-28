import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "../common/swagger.js";
import { recruitsRouter } from "../domain/recruits/recruits.route.js";

class Server {
  private app: Application;
  private port: string | number;

  constructor(port: number | string) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeSwagger();
  }

  // static 파일 제공 설정
  // private initializeStaticFiles() {
  //   this.app.use('/uploads', express.static('uploads'));
  // }

  // 미들웨어 설정
  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
  }

  // 라우트 설정
  private initializeRoutes() {
    this.app.get("/", (req, res) => {
      res.redirect("/api");
    });

    this.app.get("/api", (req, res) => {
      res.send("웹서버 연결");
    });

    this.app.get("/api/recruits", recruitsRouter);
  }

  // swagger 설정(api 문서화)
  private initializeSwagger() {
    // Swagger UI 연결
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server running on http://localhost:${this.port}`);
      console.log(`📘 Swagger Docs: http://localhost:${this.port}/api-docs`);
    });
  }
}

export default Server;
