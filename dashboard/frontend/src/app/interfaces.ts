export interface Cargo{
  id?: number;
  name: string;
  weight: number;
  type: string;
  order?: number | Order;
}

export interface Order{
  order_cargos: Array<Cargo>;
  departure_address: string;
  destination_address: string;
}

export interface Payment {
  id?: number;
  amount: number;
  type: string;
  status: string;
  order: number | Order;
}

export interface Branch {
  id?: number;
  address: string;
}

export interface CarPark {
  id?: number;
  address: string;
  branch: number | Branch;
}

export interface Transport {
  id?: number;
  type: string;
  number: string;
  car_park: number | CarPark;
}

export interface Driver {
  id?: number;
  name: string;
  phone_number: string;
  branch: number | Branch;
}


export interface Shipping {
  id?: number;
  status?: string;
  start_time: Date;
  stop_time: Date;
  departure_address: string;
  destination_address: string;
  transport: number | Transport;
  driver: number | Driver;
  orders: Array<number> | Array<Driver>;
}

export interface Client {
  id?: number;
  name: string;
  phone_number: string;
}
