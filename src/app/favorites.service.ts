
// import { Injectable } from '@angular/core';
// import { Product } from './product';
// import { ProductsService } from './products.service';
// import { Observable, of } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class FavoritesService extends ProductsService {

//   constructor() {
//     super();
//    }

//    override getProducts(): Observable<Product[]> {
//      // return super.getProducts().slice(1, 3);
//      return super.getProducts();
//    }

// }

import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';
import { Observable, map } from 'rxjs';


@Injectable()
export class FavoritesService extends ProductsService {
  override getProducts(): Observable<Product[]> {
    return super.getProducts().pipe(
      map(products => products.slice(1, 3))
    );
  }
}
