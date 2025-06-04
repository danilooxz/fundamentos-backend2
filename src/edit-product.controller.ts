import { Controller, Patch, Param, Body } from '@nestjs/common';
import { EditProductService } from './edit-product.service';

@Controller('/products')
export class EditProductController {
  constructor(private editProductService: EditProductService) {}

  @Patch('/:id')
  async handle(@Param('id') id: string, @Body() body: any) {
    const product = await this.editProductService.execute(id, body);
    return { product };
  }
}
