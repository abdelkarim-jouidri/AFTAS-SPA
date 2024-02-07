import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultServiceService {

  constructor(private http: HttpClient) { }
  private url = "http://localhost:8080/api/rankings/"

  getAllResults(competitionCode: string): Observable<any>{
    const apiUrl = this.url+"${resultId}/results"
    return this.http.get(this.url)
  }
}
