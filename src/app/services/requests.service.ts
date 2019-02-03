import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  /**
   * @name loadJSONData
   * @description loads a JSON file
   * @param file file to load
   * @returns an observable object that contains an array of objects
   */
  loadJSONData(file: string): Observable<Array<any>> {

    return this.http.get<Array<any>>(file, {
      responseType: 'json'
    });

  }

}
