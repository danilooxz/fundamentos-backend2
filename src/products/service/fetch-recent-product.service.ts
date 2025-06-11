import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { string } from 'zod';
import { ProductsRepository } from '../repository/products_repository';

export interface Product {
    id: String;
    name: string;   
    description?: string;
    price: number;        
    inStock: number;                 
    isAvailable: boolean;  
    category: Category;     
    createdAt: string | Date | undefined;
    updatedAt: string | Date | undefined | null;
}

type CreateProductServiceResponse = {
    products: Product[];
}

@Injectable()
export class FetchRecentsProductsService {
  constructor(private productRepository: ProductsRepository) {}

  async execute(): Promise<CreateProductServiceResponse> {
    const products = await this.productRepository.findManyRecent();

    const newProducts: Product[] = [];

    if (products) {
      for (const product of products) {
        newProducts.push({
          id: product.id?.toString() || "",
          name: product.name,
          description: product.description ?? undefined,
          price: product.price,                      
          inStock: product.inStock,
          isAvailable: product.isAvailable ?? false,
          category: product.category,
          createdAt: product.createdAt,
          updatedAt: product.updatedAt ?? undefined,
        });
      }
    }

    return { products: newProducts };
  }
}

 