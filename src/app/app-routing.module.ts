import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormRouting } from './products/product-form/product-form.routing';
import { ProductListRouting } from './products/product-list/product-list.routing';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        loadChildren: () => ProductListRouting
      },
      {
        path: 'new',
        loadChildren: () => ProductFormRouting
      },
      {
        path: ':id',
        loadChildren: () => ProductFormRouting
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
