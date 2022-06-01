import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPhotosComponent } from './all-photos/all-photos.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'allproducts',component:ProductListComponent},
  {path:'productdetails/:id',component:ProductDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'allphotos',component:AllPhotosComponent},
  {path:'',redirectTo: "allproducts", pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
