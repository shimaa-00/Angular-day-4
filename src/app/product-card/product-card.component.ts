import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProducts } from '../models/i-products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() productData?:IProducts;
  @Output() productSelected:EventEmitter<IProducts> = new EventEmitter<IProducts>();
  constructor() { }

  ngOnInit(): void {
  }

  addFavorite(){
    this.productSelected?.emit(this.productData);
  }

}
