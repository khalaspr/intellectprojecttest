import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class TodoListServiceService {

  constructor(private _http:Http) { }

 getUsers() {
    return this._http.get("http://jsonplaceholder.typicode.com/users")
    .map((res:Response) => res);
  }
}
