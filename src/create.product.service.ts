import { Injectable } from "@nestjs/common";

interface Product {
    name: string,
    model: string,
    dateManufacture: string,
    year: string,
    brand: string,
    email: string,
    cpf: string
}

interface CreateProductServiceRequest{
    name: string,
      model: string,
      dateManufacture: string,
      year: number,
      brand: string,
      email: string,
      cpf: string
}

type CreateProductServiceResponse = {
    product: CreateProductService;
    
}

@Injectable()
export class CreateProductService {
    constructor (){}

        async execute({
            brand,
            name,
            cpf,
            email,
            dateManufacture,
            model,
            year



        }:CreateProductServiceRequest):Promise<CreateProductServiceResponse>{
            return new Promise(()=> {});
        

    }
}