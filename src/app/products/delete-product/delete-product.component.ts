import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent implements OnInit {
  prodId: any;
  prodName: any;
  constructor(
    private ar: ActivatedRoute,
    private ps: ProductService,
    private rt: Router
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.prodId = data['id'];
    });

    this.ps.deleteProduct(this.prodId).subscribe((item: any) => {
      alert(`Product no: ${this.prodId} :- deleted successfully`);
      this.rt.navigateByUrl('products');
    });
  }
}
