import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Story } from '../models/story.model';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StoryService {

  private storiesUrl = 'api/stories';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.storiesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }
  // createPlay(play: Play): Observable<any> {
  //   // returns the observable of http post request
  //   return this.http.post(`${this.playUrl}`, play);
  // }
  // getPlays(): Observable<Play[]>{
  //   return this.http.get(this.playUrl)
  //     .pipe(map(res  => {
  //       // Maps the response object sent from the server
  //
  //       return res['data'].docs as Play[];
  //     }));
  // }
  //
  // editPlay(play:Play){
  //   let editUrl = `${this.playUrl}`; // Can be const
  //   // returns the observable of http put request
  //   return this.http.put(editUrl, play);
  // }
  //
  // deletePlay(id:string):any{
  //   // Delete the object by the id
  //   let deleteUrl = `${this.playUrl}/${id}`; // Can be const
  //   return this.http.delete(deleteUrl)
  //     .pipe(map(res  => {
  //       return res;
  //     }));
  // }

  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error);
  //   // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
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
    this.messageService.add(`StoryService: ${message}`);
  }
}
