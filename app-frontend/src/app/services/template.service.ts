import Template from '../models/template.model';
import {Observable} from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';


@Injectable()
export class TemplateService {
  api_url = 'http://localhost:3000';
  templateUrl = `${this.api_url}/api/templates`;
  // Constructor
  constructor( private http: HttpClient ) {}

  createTemplate(template: Template) {
    return this.http.post(`${this.templateUrl}`, template);
  }

  getTemplates(): Observable<Template[]> {
    return this.http.get(this.templateUrl)
      .pipe(map(res => {
        return res['data'].docs as Template[];
      }));
  }

  editTemplate(template: Template) {
    // let editUrl = `${this.templateUrl}`;
    return this.http.put(this.templateUrl, template);
  }

  deleteTemplate(id: string): any {
    // let deleteUrl = `${this.templateUrl}/${id}`;
    return this.http.delete(`${this.templateUrl}/${id}`)
      .pipe(map(res => {
        return res;
      }));
  }
}
