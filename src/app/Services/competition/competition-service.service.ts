import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompetitionDTO } from '../../Models/Competition';

@Injectable({
  providedIn: 'root'
})
export class CompetitionServiceService {

  private url = "http://localhost:8080/api/"

  constructor(private http:HttpClient) { }

  getAllCompetitions(): Observable<CompetitionDTO[]>{
    const apiUrl = this.url+'competitions/all';
    return this.http.get<any>(apiUrl);
  }
}
