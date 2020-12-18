-- В PostgreSQL работает, в остальных не знаем.

CREATE TABLE branch (
  id INT NOT NULL PRIMARY KEY,
  address text NOT NULL
);

CREATE TABLE car_park (
  id INT NOT NULL PRIMARY KEY,
  address text NOT NULL,
  branch_id INT NOT NULL REFERENCES branch (id) 
);

CREATE TABLE client (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL
);

CREATE TABLE driver (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  branch_id INT NOT NULL REFERENCES branch (id)
);

CREATE TABLE order (
  id INT NOT NULL PRIMARY KEY,
  status VARCHAR(255) NOT NULL,
  departure_address text NOT NULL,
  destination_address text NOT NULL,
  client_id INT NOT NULL REFERENCES client (id) 
);

CREATE TABLE transport (
  id INT NOT NULL PRIMARY KEY,
  type VARCHAR(255) NOT NULL,
  number VARCHAR(255) NOT NULL,
  car_park_id INT NOT NULL REFERENCES car_park (id) 
);

CREATE TABLE shipping (
  id INT NOT NULL PRIMARY KEY,
  start_time timestamp NOT NULL,
  stop_time timestamp NULL,
  departure_address text NOT NULL,
  destination_address text NOT NULL,
  status VARCHAR(255) NOT NULL,
  driver_id INT NOT NULL REFERENCES driver (id) ,
  transport_id INT NOT NULL REFERENCES transport (id) 
);

CREATE TABLE shipping_orders (
  shipping_id INT NOT NULL REFERENCES shipping (id) ,
  order_id INT NOT NULL REFERENCES "order" (id) ,
  PRIMARY KEY (shipping_id, order_id)
);

CREATE TABLE payment (
  id INT NOT NULL PRIMARY KEY,
  amount FLOAT NOT NULL,
  type VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL,
  order_id INT NOT NULL UNIQUE REFERENCES "order" (id) 
);

CREATE TABLE cargo (
  id INT NOT NULL PRIMARY KEY,
  weight FLOAT NOT NULL,
  type VARCHAR(255) NOT NULL,
  order_id INT NOT NULL REFERENCES "order" (id) 
);

