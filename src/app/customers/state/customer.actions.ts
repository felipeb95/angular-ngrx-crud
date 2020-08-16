import { Customer } from '../customer.model';
import { Action } from '@ngrx/store';

export enum CustomerActionTypes {
  LOAD_CUSTOMERS = '[Customer] Load Costumers',
  LOAD_CUSTOMERS_SUCCESS = '[Customer] Load Costumers Success',
  LOAD_CUSTOMERS_FAIL = '[Customer] Load Costumers Fail',
}

export class LoadCustomers implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS;
}

export class LoadCustomersSuccess implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS;

  constructor(public payload: Customer[]) {}
}

export class LoadCustomersFail implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS_FAIL;

  constructor(public payload: string) {}
}

export type CustomerAction = LoadCustomers | LoadCustomersSuccess | LoadCustomersFail;
