import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Endpoints, host} from './config';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Cargo} from './interfaces';


@Injectable({
  providedIn: 'root'
})
export class BackService {


  constructor(private http: HttpClient) {
    // this.getUserInfo().subscribe(userInfo => {
    //   this.userInfo = userInfo;
    // });
  }
  getAllCargo(): Observable<Array<Cargo>> {
    return this.http.get<Array<Cargo>>(Endpoints.cargos);
  }

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
