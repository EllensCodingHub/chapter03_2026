import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()

export class ProductViewService {

  constructor(private productService: ProductsService) { }

  getProduct(id: number): Observable<Product | undefined> {
    const products = this.productService.getProducts();
    return products.pipe(
      map(products => products.find(product => product.id === id))
    );
  }
}
