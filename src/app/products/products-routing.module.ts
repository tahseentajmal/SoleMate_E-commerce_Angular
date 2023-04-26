import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewSingleProductComponent } from './view-single-product/view-single-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductsComponent },
  { path: 'AddProduct', component: AddNewProductComponent },
  { path: 'EditProduct/:id', component: EditProductComponent },
  { path: 'DeleteProduct/:id', component: DeleteProductComponent },
  { path: 'ViewProduct/:id', component: ViewSingleProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
