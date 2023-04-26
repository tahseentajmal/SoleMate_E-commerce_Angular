import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import behaivor subject (Async)
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Async object creation for bs
  search = new BehaviorSubject("")


  constructor(private http: HttpClient) { }

  // Api Call generation

  // to view All Products

  viewAllProduct() {
    return this.http.get("http://localhost:3000/products")
  }

  // to view single product

  viewProduct(productId :any){
    return this.http.get("http://localhost:3000/products/"+productId)
  }

  // to delete selected product

  deleteProduct(productId :any){
    return this.http.delete("http://localhost:3000/products/"+productId)
  }

  // to add new product

  addNewProduct(productData:any){
    return this.http.post("http://localhost:3000/products/",productData)
  }

  // to update existing products*

  updateProduct(productId:any,productData:any){
    return this.http.put("http://localhost:3000/products/"+productId,productData)
  }

}



