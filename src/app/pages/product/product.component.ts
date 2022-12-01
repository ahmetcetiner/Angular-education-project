import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AlertifyService } from 'src/app/services/alertifyService/alertify.service'
import { ProductService } from 'src/app/services/productService/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  constructor(private alertify: AlertifyService, private product: ProductService, private activatedRoute: ActivatedRoute) { }

  filterText = "";

  products!: Product[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parm => {
      console.log(parm['categoryID'])
      if (parm['categoryID'] > 0 && parm['categoryID'] < 6) {
        this.getProductByCategory(parm['categoryID']);
      } else {
        this.getProduct();
      }
    })

  }

  getProduct() {
    this.product.getProducts().subscribe(data => {
      this.products = data;
    })
  }
  getProductByCategory(categoryId: number) {
    this.product.getProductByCategory(categoryId).subscribe(data => {
      this.products = data;
    })
  }

  addToCard(product: Product) {
    this.alertify.success(product.productName + " add to card.")
  }
}
