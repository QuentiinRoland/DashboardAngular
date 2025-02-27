import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
@Component({
  selector: 'app-customer-form-create',
  templateUrl: './customer-form-create.component.html',
  styleUrl: './customer-form-create.component.scss',
})
export class CustomerFormCreateComponent {
  customer = { name: '', email: '' };

  constructor(private customerServices: CustomerService) {}

  onSubmit() {
    this.customerServices.addCustomer(this.customer).subscribe(() => {
      alert('Client ajouté avec succès !');
      this.customer = { name: '', email: '' };
    });
  }
}
