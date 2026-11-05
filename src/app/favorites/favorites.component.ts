
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
  providers: [
    { provide: ProductsService, useClass: FavoritesService }
  ]
})
export class FavoritesComponent implements OnInit {
  products: Product[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  private getProducts() {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
