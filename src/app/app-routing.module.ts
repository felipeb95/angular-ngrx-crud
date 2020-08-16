import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { CustomersModule } from './customers/customers.module';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customers',  loadChildren: () => CustomersModule}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
