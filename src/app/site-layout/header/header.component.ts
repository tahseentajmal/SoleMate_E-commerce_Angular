import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchTerm:any

  constructor(private ps:ProductService){}
  
  ngOnInit(): void {
    
  }
  
  // For use of (keyup) $event
  search(event:any){

    this.searchTerm=event.target.value

    // send stream data to behavior subject object

    this.ps.search.next(this.searchTerm)

  }
}
