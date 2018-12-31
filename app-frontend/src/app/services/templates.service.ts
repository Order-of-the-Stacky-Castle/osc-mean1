import Template from '../models/templates.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class TemplateService {
  api_url = 'http://localhost:3000';
  templateUrl = `${this.api_url}/api/templates`;

  constructor(private http: HttpClient) {}

  //Create template, takes a Template Object
  createTemplate(template: Template): Observable<any> {
    //returns the observable of http post request
    return this.http.post(`${this.templateUrl}`, template);
  }

  //Read templates, takes no arguments
  getTemplates(): Observable<Template[]> {
    console.log(this.templateUrl);
    return this.http.get(this.templateUrl).pipe(
      map(res => {
        //Maps the response object sent from the server
        return res['data'].docs as Template[];
      })
    );
  }

  /*
  //Update todo, takes a ToDo Object as parameter
  editTodo(todo: ToDo) {
    let editUrl = `${this.todoUrl}`;
    //returns the observable of http put request
    return this.http.put(editUrl, todo);
  }

  deleteTodo(id: string): any {
    //Delete the object by the id
    let deleteUrl = `${this.todoUrl}/${id}`;
    return this.http.delete(deleteUrl).pipe(
      map(res => {
        return res;
      })
    );
  }
*/
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
