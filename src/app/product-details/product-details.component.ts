import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../models/i-products';
import { ProductsService } from '../product-service/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productid?: number = 0;
  product?: IProducts;
  constructor(private activrout: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activrout.params.subscribe(pram => {
      this.productid = pram['id'];
      this.product = this.productsService.getProductById(this.productid);
    })
  }
}
