import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products_repository";
import { error } from "console";
import { Category } from "@prisma/client";
import { ModelsRepository } from "./models_repository";

export interface Model {
    id: String;
    createdAt: string | Date | undefined;
    updatedAt: string | Date | undefined | null;
    name: string;   
}

interface CreateModelServiceRequest{          
    name: string;   
}

type CreateModelServiceResponse = {
    model: Model; 
}

@Injectable()
export class CreateModelService {
    constructor (private modelRepository: ModelsRepository) {} 

        async execute({        
            name,      

    }:CreateModelServiceRequest):Promise<CreateModelServiceResponse> {
        const modelWithSameName = await this.modelRepository.findByName(name);

        if (modelWithSameName) {
            throw new error("Model already exists");
        }
        
        const model = {
            name,        
        };

        const newModel = await this.modelRepository.create(model);

        return {
            model: {
                id: newModel.id?.toString() || "",
                name,
                createdAt: newModel.createdAt,
                updatedAt: newModel.updatedAt
            }
        };
    }
}