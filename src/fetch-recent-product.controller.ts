import { Controller, Get } from '@nestjs/common';
import { FetchRecentsProductsService } from './fetch-recent-product.service';

@Controller('/products')
export class FetchRecentsProductsController {
  constructor(private fetchRecents: FetchRecentsProductsService) {}

  @Get('/recents')
  async handle() {
    const products = await this.fetchRecents.execute();
    return { products };
  }
}