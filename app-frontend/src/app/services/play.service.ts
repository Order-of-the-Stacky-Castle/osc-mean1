import Template from '../models/template.model';
import Words from '../models/words.model';
import {Observable, of} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {TemplateService} from './template.service';
import { MessageService } from './message.service';

@Injectable()
export class PlayService {

  api_url = 'http://localhost:3000';
  templateUrl = `${this.api_url}/api/templates`;

  constructor(
    private http: HttpClient,
    private ts: TemplateService,
    private messageService: MessageService) { }

  getTemplates(): Observable<any> {
    return this.http.get(this.templateUrl)
      .pipe(
        map(res => res),
        catchError(this.handleError('getTemplates', []))
      );
  }

  playTemplate(template_id: string, words: [string]): Observable<Template> {
    return this.ts.getTemplate(template_id);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`WordService: ${message}`);
  }
}
