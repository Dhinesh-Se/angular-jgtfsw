import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProductCountComponent } from './product-count.component';

const routes:Routes=[{
  path:'',
  component:DashboardComponent,
  children:[{path:'dashboard',component:DashboardComponent},
  {path:'dashboard/count',component:ProductCountComponent}
],
  
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashBoardRouting {}
