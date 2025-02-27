import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomersListComponent } from './pages/customers-list/customers-list.component';
import { CustomersDetailsComponent } from './pages/customers-details/customers-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomerFormCreateComponent } from './components/customer-form-create/customer-form-create.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomersListComponent,
    CustomersDetailsComponent,
    NavbarComponent,
    CustomerFormCreateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
