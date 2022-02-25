import { Controller,Get,Post,Put,Delete,Res,HttpStatus,Body } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateProductDTO } from "./dto/product.dto";
import { ProductService } from "./product.service";
import { Product } from "./interfaces/product.interface";
@Controller('product')
export class ProductController {
    constructor(private productService:ProductService){}
    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO:CreateProductDTO){
        
        const pruduct = await this.productService.createProduct(createProductDTO);
        
        return res.status(HttpStatus.OK).json({
            message:'Producto Successfully Create',
            product:pruduct
        });
    }

    @Get('/')
    async getProducts(@Res() res){
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
                products: products
        })
    }

}
