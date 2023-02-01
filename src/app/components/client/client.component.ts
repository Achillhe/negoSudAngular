import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClientService, Customer } from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  customers: Customer[];

  constructor(service: ClientService) {
    this.customers = service.getCustomers();
  }
}


