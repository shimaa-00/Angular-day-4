import { Component, OnInit } from '@angular/core';
import { IProducts } from '../models/i-products';
import { ProductsService } from '../product-service/products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allProducts?:IProducts[];
  selectedProduct?:IProducts;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.allProducts=this.productsService.getAllProducts();
  }

  printProduct(e:any){
    this.selectedProduct=e;
  }
  addProduct(e:any){
    this.allProducts?.push(e);
  }

}
