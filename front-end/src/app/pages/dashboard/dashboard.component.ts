import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  customersCount = 0;

  customersByCategory = [
    { name: 'E-commerce', value: 50 },
    { name: 'Finance', value: 40 },
    { name: 'Éducation', value: 30 },
    { name: 'Santé', value: 20 },
    { name: 'Autres', value: 10 },
  ];

  newCustomers = [
    { name: 'Jan', value: 10 },
    { name: 'Fév', value: 15 },
    { name: 'Mar', value: 20 },
    { name: 'Avr', value: 30 },
    { name: 'Mai', value: 25 },
    { name: 'Juin', value: 35 },
    { name: 'Juil', value: 40 },
    { name: 'Août', value: 50 },
    { name: 'Sep', value: 45 },
    { name: 'Oct', value: 55 },
    { name: 'Nov', value: 60 },
    { name: 'Déc', value: 70 },
  ];

  totalCustomers = [{ name: 'Total', value: this.customersCount }];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.fetchCustomersCount();
  }

  fetchCustomersCount() {
    this.customerService.getCustomers().subscribe((data) => {
      this.customersCount = data.length;
      this.totalCustomers = [{ name: 'Total', value: this.customersCount }];
    });
  }
}
