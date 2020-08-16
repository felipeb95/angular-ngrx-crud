import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as customerActions from '../state/customer.actions';
import * as fromCustomer from '../state/customer.reducer';
import { Observable } from 'rxjs';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers$: Observable<Customer[]>;

  constructor(private store: Store<fromCustomer.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new customerActions.LoadCustomers());
    this.customers$ = this.store.pipe(select(fromCustomer.getCustomers));
  }

}
