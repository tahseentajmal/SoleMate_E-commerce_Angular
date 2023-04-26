import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

pid:any
pdata:any

  constructor(private ar:ActivatedRoute,private ps:ProductService){

  }

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.pid=data["id"]
    })

  this.ps.viewProduct(this.pid).subscribe((data:any)=>{
    this.pdata=data
    // console.log(this.pdata);
    
  })

  }

  // method to update product from ngForm (updateProductForm)
  updateProduct(form:any){
   
    console.log(this.pdata);

    // Api call for updation
    this.ps.updateProduct(this.pid,this.pdata).subscribe((data:any)=>{
      alert(`Product: ${data.productName} updated`)
    })
    
  }
}
