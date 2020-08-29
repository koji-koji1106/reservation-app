import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';



const routes: Routes = [
    {
        path: 'products', component: ProductComponent,
        children: [
            {path: '', component: ProductListComponent},
            {path: ':productId', component: ProductDetailsComponent}
        ]
    }

];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
