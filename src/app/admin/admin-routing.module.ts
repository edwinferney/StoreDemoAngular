import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { AdminComponent } from './admin.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'product-edit/:id', component: ProductEditComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
