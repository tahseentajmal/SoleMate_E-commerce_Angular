import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {


  productList:any
  filterProducts:any
  searchKey:any=""    // to access as stream


  constructor(private ps:ProductService) { }

  ngOnInit(): void {

    // To Subscribe to data from db.json used on html using string interpolation
    this.ps.viewAllProduct().subscribe((data:any)=>{
      // console.log(data)
      this.productList=data
    })

    // To Subscribe to data from behavior subject object
    this.ps.search.subscribe((value:any)=>{
      this.searchKey=value
    })



  }

  //Method to filter products based on categoryId
  filter(category:any){
    this.filterProducts=this.productList.filter((item:any)=>
      item.categoryId==category || category=="")

  }
}
