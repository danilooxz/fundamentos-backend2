import { CreateModelController } from "src/models/controller/create-model.controller";
import { CreateProductController } from "./controller/create-product.controller";
import { ProductsRepository } from "./repository/products_repository";
import { CreateProductService } from "./service/create.product.service";
import { PrismaService } from "src/prisma.service";
import { CreateModelService } from "./service/create.model.service";
import { ModelsRepository } from "src/models/repository/models_repository";
import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [CreateProductController, CreateModelController],
  providers: [PrismaService, CreateProductService, ProductsRepository, CreateModelService, ModelsRepository],
})
export class ProductModule {}
