import { Controller, Get } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(
    private readonly seedService: SeedService,
    private readonly productService: ProductsService,
  ) {}

  @Get()
  executeSeed() {
    return this.seedService.runSeed();
  }

  private async insertNewProducts() {
    this.productService.deleteAllProducts;
  }
}
