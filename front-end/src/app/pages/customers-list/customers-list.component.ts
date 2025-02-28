import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CustomerService } from '../../services/customer.service';
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss',
})
export class CustomersListComponent implements OnInit {
  customers: any[] = [];
  filteredCustomers: any[] = [];
  isModalOpen = false;
  customer = { name: '', email: '' };
  faSearch = faSearch;
  searchQuery: string = '';

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
      this.filteredCustomers = data;
    });
  }

  filterCustomers() {
    this.filteredCustomers = this.customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        customer.email.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.customers = this.customers.filter((customer) => customer.id !== id);
      this.filterCustomers();
    });
  }
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.customer = { name: '', email: '' };
  }

  onSubmit() {
    this.customerService.addCustomer(this.customer).subscribe(() => {
      this.fetchCustomers();
      this.closeModal();
    });
  }
}
