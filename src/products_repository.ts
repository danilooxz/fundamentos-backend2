import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Prisma, Product } from "@prisma/client";
import { promises } from "dns";


@Injectable()
export class ProductsRepository {
    constructor(private prisma: PrismaService) {}

    async findById(id: string): Promise<Prisma.ProductUncheckedCreateInput | null> {
        const product = this.prisma.product.findUnique({
            where: {
                id,
            }
        });

        return product;
    }

    async findByName(name: string): Promise<Prisma.ProductUncheckedCreateInput | null> {
        const product = await this.prisma.product.findUnique({
            where: {
                name,
            }
        });

        return product;
    }

    async create(product: Prisma.ProductUncheckedCreateInput): Promise<Prisma.ProductUncheckedCreateInput>{
         return await this.prisma.product.create({
            data: product,
        });
    }

     async findManyRecent(): Promise<Prisma.ProductUncheckedCreateInput[]> {
        return await this.prisma.product.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    
}


