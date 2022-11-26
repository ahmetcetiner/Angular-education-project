import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  categories ?: Category[]=[
    {id:1,name:"Laptop"},
    {id:2,name:"Mouse"},
    {id:3,name:"Keyboad"},
    {id:4,name:"Headset"},
    {id:5,name:"Gamepad"},
  ]

  ngOnInit(): void {
  }

}
