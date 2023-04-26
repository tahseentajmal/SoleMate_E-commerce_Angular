import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-single-product',
  templateUrl: './view-single-product.component.html',
  styleUrls: ['./view-single-product.component.css']
})
export class ViewSingleProductComponent implements OnInit {

productId:any
productData:any

  constructor(private ps:ProductService,private ar:ActivatedRoute){}

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.productId=data["id"]
      console.log(this.productId);

      this.ps.viewProduct(this.productId).subscribe((data:any)=>{
        this.productData=data
        
      })
      
    })
  }

}
