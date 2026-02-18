import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http:HttpClient)
  {

  }
  search(searchText:any)
{
    return this.http.get(`https://jsonplaceholder.typicode.com/todos?title_like=${searchText}`).
   pipe(
    map((res:any) => res.map((todo:any) => todo.title)))
}
  
}
