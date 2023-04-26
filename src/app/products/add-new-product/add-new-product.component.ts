import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})

export class AddNewProductComponent implements OnInit {

  // Model Form Reactive form
  addProductForm = this.fb.group({
    "id": [""],
    "productName": [""],
    "categoryId": [""],
    "categoryName": [""],
    "gender": [""],
    "description": [""],
    "price": [""],
    "isAvailable": [""],
    "productImage": [""],
    "rating": [""],
    "review": [""],
    "vendorName": [""],
    "warranty": [""]
  })
  constructor(private fb: FormBuilder,private ps:ProductService,private rt:Router) { }

  ngOnInit(): void {

  }

  addProduct() {
    let pdata = {
      "id": this.addProductForm.value.id,
      "productName": this.addProductForm.value.productName,
      "categoryId": this.addProductForm.value.categoryId,
      "categoryName": this.addProductForm.value.categoryName,
      "gender": this.addProductForm.value.gender,
      "description": this.addProductForm.value.description,
      "price": this.addProductForm.value.price,
      "isAvailable": this.addProductForm.value.isAvailable,
      "productImage": this.addProductForm.value.productImage,
      "rating": this.addProductForm.value.rating,
      "review": this.addProductForm.value.review,
      "vendorName": this.addProductForm.value.vendorName,
      "warranty": this.addProductForm.value.warranty
    }

    this.ps.addNewProduct(pdata).subscribe((data:any)=>{
      alert("New Product Added succesfully")
      this.rt.navigateByUrl("products")
    })
  }






}
