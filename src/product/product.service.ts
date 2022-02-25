import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

//import { Product} from "./interfaces/product.interface";
import { CreateProductDTO } from "./dto/product.dto";
import { Product,ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private ProductModel: Model<ProductDocument>){}
    async getProducts():Promise<Product[]>{
        return this.ProductModel.find().exec();
    }
    async getProduct(productID:string):Promise<Product>{
        return this.ProductModel.findById(productID).exec();
    }
    async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
        const createdProduct = new this.ProductModel(createProductDTO);
        return createdProduct.save();
    }
    async deleteProduct(productID:number):Promise<Product>{
        return this.ProductModel.findByIdAndDelete(productID)
    }
    async updateProduct(productID:number,createProductDTO:CreateProductDTO):Promise<Product>{
        return this.ProductModel.findByIdAndUpdate(productID,createProductDTO,{new:true});
    }
}
