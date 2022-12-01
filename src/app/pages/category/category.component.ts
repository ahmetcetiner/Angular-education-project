import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private category: CategoryService, private product:ProductService) { }
  categories !: Category[]

  ngOnInit(): void {
    this.category.getCategories().subscribe(data=>{
      this.categories=data;
      this.categories.forEach(element => {
        this.getProductCount(element.id);
      });
    })
  }

  getProductCount(categoryID:number){
    this.product.getProductByCategory(categoryID).subscribe(data=>{
      this.categories[categoryID-1].productCount=data.length;
    })
  }

  categoryClick(category:Category){
    console.log(category.id)
  }

}
