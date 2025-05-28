import { Module } from '@nestjs/common';

import { CreateProductController } from './create-product.controller';
import { PrismaService } from './prisma.service';
import { CreateProductService } from './create.product.service';
import { ProductsRepository } from './products_repository';
import { CreateModelController } from './create-model.controller';
import { CreateModelService } from './create.model.service';
import { ModelsRepository } from './models_repository';


@Module({
  imports: [],
  controllers: [CreateProductController, CreateModelController],
  providers: [PrismaService, CreateProductService, ProductsRepository, CreateModelService, ModelsRepository],
})
export class AppModule {}
