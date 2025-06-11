import { Controller, Patch, Param, Body, HttpCode } from '@nestjs/common';
import { EditProductService } from '../service/edit-product.service';


@Controller('/products')
export class EditProductController {
  constructor(private editProductService: EditProductService) {}

  @Patch('/:id')
  @HttpCode(204)
  async handle(@Param('id') id: string, @Body() body: any) {
    const product = await this.editProductService.execute(id, body);
    return { product };
  }
}
