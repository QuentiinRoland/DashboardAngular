import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomersDetailsComponent } from './pages/customers-details/customers-details.component';
import { CustomersListComponent } from './pages/customers-list/customers-list.component';
export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'customers', component: CustomersListComponent },
  { path: 'customers/:id', component: CustomersDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
