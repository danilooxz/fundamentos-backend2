import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { z } from 'zod';
import { ZodValidationPipe } from '../../pipes/zod-validation-pipe';

import { Category } from "@prisma/client";
import { CreateProductService } from "../service/create.product.service";

const createProductBodySchema = z.object({
  name: z.string().min(3).max(30),
  description: z.string().min(3).max(60),
  price: z.number(),
  inStock: z.number(),
  isAvailable: z.boolean(),
  category: z.enum([Category.ELETRONIC, Category.FOOD, Category.FRAGILE, Category.HOME, Category.OTHER]),
  tags: z.array(z.string()),
});

  const bodyValidationPipe = new ZodValidationPipe(createProductBodySchema);
  type createProductBodySchema = z.infer<typeof createProductBodySchema>;

  @Controller('/products')
  export class CreateProductController {
    constructor(private createProduct: CreateProductService) {}

    @Post()
    @HttpCode(201)
    async handle(@Body(bodyValidationPipe) body: createProductBodySchema) {
      const {
        name,      
        description, 
        price,        
        inStock,                 
        isAvailable,  
        category,     
        tags,
    } = body;

    const product = await this.createProduct.execute({
      name,      
      description, 
      price,        
      inStock,                 
      isAvailable,  
      category,     
      tags,
    });

    return {product};
  }
}   