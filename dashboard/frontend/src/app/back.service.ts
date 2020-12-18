import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Endpoints, host} from './config';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Cargo} from './interfaces';

import * as interfaces from './interfaces';


@Injectable({
  providedIn: 'root'
})
export class BackService {


  constructor(private http: HttpClient) {
    this.getAllCargos().subscribe(resp => {
      console.log(resp);
    });
    this.getAllOrders().subscribe(resp => {
      console.log(resp);
    });
    this.getAllPayments().subscribe(resp => {
      console.log(resp);
    });
    this.getAllBranches().subscribe(resp => {
      console.log(resp);
    });
    this.getAllCarParks().subscribe(resp => {
      console.log(resp);
    });
    this.getAllTransports().subscribe(resp => {
      console.log(resp);
    });
    this.getAllDrivers().subscribe(resp => {
      console.log(resp);
    });
    this.getAllShippings().subscribe(resp => {
      console.log(resp);
    });
    this.getAllClients().subscribe(resp => {
      console.log(resp);
    });
  }

  getAllCargo(): Observable<Array<Cargo>> {
    return this.http.get<Array<Cargo>>(Endpoints.cargos);
  }

  getAllCargos(): Observable<Array<interfaces.Cargo>> {
    return this.http.get<Array<Cargo>>(Endpoints.cargos);
  }

  getAllOrders(): Observable<Array<interfaces.Order>> {
    return this.http.get<Array<interfaces.Order>>(Endpoints.orders);
  }

  getAllPayments(): Observable<Array<interfaces.Payment>> {
    return this.http.get<Array<interfaces.Payment>>(Endpoints.payments);
  }

  getAllBranches(): Observable<Array<interfaces.Branch>> {
    return this.http.get<Array<interfaces.Branch>>(Endpoints.branches);
  }

  getAllCarParks(): Observable<Array<interfaces.CarPark>> {
    return this.http.get<Array<interfaces.CarPark>>(Endpoints.car_parks);
  }

  getAllTransports(): Observable<Array<interfaces.Transport>> {
    return this.http.get<Array<interfaces.Transport>>(Endpoints.transports);
  }

  getAllDrivers(): Observable<Array<interfaces.Driver>> {
    return this.http.get<Array<interfaces.Driver>>(Endpoints.drivers);
  }

  getAllShippings(): Observable<Array<interfaces.Shipping>> {
    return this.http.get<Array<interfaces.Shipping>>(Endpoints.shippings);
  }

  getAllClients(): Observable<Array<interfaces.Client>> {
    return this.http.get<Array<interfaces.Client>>(Endpoints.clients);
  }

  addClient(client: interfaces.Client): Observable<Array<interfaces.Client>> {
    return this.http.post<Array<interfaces.Client>>(Endpoints.clients, client);
  }

  addDriver(driver: interfaces.Driver): Observable<Array<interfaces.Driver>> {
    return this.http.post<Array<interfaces.Driver>>(Endpoints.drivers, driver);
  }

  addTransport(transport: interfaces.Transport): Observable<Array<interfaces.Transport>> {
    return this.http.post<Array<interfaces.Transport>>(Endpoints.transports, transport);
  }

  addCarPark(carPark: interfaces.CarPark): Observable<Array<interfaces.CarPark>> {
    return this.http.post<Array<interfaces.CarPark>>(Endpoints.car_parks, carPark);
  }

  addBranch(branch: interfaces.Branch): Observable<Array<interfaces.Branch>> {
    return this.http.post<Array<interfaces.Branch>>(Endpoints.branches, branch);
  }

  addOrder(order: interfaces.Order): Observable<Array<interfaces.Order>> {
    return this.http.post<Array<interfaces.Order>>(Endpoints.orders, order);
  }

  addShipping(shipping: interfaces.Shipping): Observable<Array<interfaces.Shipping>> {
    return this.http.post<Array<interfaces.Shipping>>(Endpoints.shippings, shipping);
  }


  // getAll(name: string)Observable<Any> {
  //
  //   return
  // }


  // getAllBoards(): Observable<Array<Board>> {
  //   return this.http.get<Array<Board>>(Endpoints.boards, {headers: this.headers});
  // }
  //
  // getBoard(id: number): Observable<BoardResponse>{
  //   return this.http.get<BoardResponse>(`${Endpoints.board}${id}/`, {headers: this.headers});
  // }
  //
  // createColumn(request: ColumnsRequestBody): Observable<any> {
  //   const createColumnUrl = Endpoints.createColumn.replace('{idBoard}', String(request.idBoard));
  //   return this.http.post(createColumnUrl, request, {headers: this.headers});
  // }
  //
  // getColumn(id: number): Observable<Column> {
  //   const getColumnUrl = Endpoints.column.replace('{idColumn}', String(id));
  //   return this.http.get<Column>(getColumnUrl, {headers: this.headers});
  // }
  //
  // updateColumn(request: ColumnsRequestBody): Observable<any> {
  //   const updateColumnUrl = Endpoints.column.replace('{idColumn}', String(request.idColumn));
  //   return this.http.put(updateColumnUrl, request, {headers: this.headers});
  // }
  //
  // deleteColumn(id: number): Observable<Column> {
  //   const deleteColumnUrl = Endpoints.column.replace('{idColumn}', String(id));
  //   return this.http.delete<Column>(deleteColumnUrl, {headers: this.headers});
  // }
  //
  //
  // getTask(id: number): Observable<Task> {
  //   const taskUrl = Endpoints.task.replace('{idTask}', String(id));
  //   return this.http.get<Task>(taskUrl, {headers: this.headers});
  // }
  //
  // updateTask(task: TaskRequestBody): Observable<Task> {
  //   const taskUrl = Endpoints.task.replace('{idTask}', String(task.id));
  //   return this.http.patch<Task>(taskUrl, task, {headers: this.headers});
  // }
  //
  // creteTask(request: TaskRequestBody): Observable<Task> {
  //   return this.http.post<Task>(Endpoints.createTask, request, {headers: this.headers});
  // }
  //
  // getUserInfo(): Observable<UserInfo> {
  //   return this.http.get<UserInfo>(Endpoints.userInfo, {headers: this.headers});
  // }
  //
  // login(user: User): Observable<any> {
  //   return this.http.post(Endpoints.login, user)
  //     .pipe(tap(this.setToken));
  // }
  //
  // logout(): void {
  //   this.setToken(null);
  // }
  //
  //
  // get headers(): any {
  //   return {
  //     Authorization: 'Token ' + this.token,
  //   };
  // }
  //
  // get token(): string | null {
  //   return localStorage.getItem('auth_token');
  // }
  //
  // setToken(response: LoginResponse | null): void {
  //   if (response) {
  //     localStorage.setItem('auth_token', response.auth_token);
  //   } else {
  //     localStorage.clear();
  //   }
  // }
  // changeName() {
  //   const str = '{"pk":5,"username":"iazyulyaev","first_name":"не Витя","last_name":"Тестировщик","email":"ez@mail.ru","img":"/media/images/ICVwJLsksyw-1024x686_BsjCmkw.jpg"}'
  //   this.userInfo = JSON.parse(str);
  // }
}
