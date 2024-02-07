import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {
  private url = "http://localhost:8080/api/"
  constructor(private http: HttpClient) { }

  getAllMembers(): Observable<any> {
    const apiUrl = this.url+"members/all"
    return this.http.get(apiUrl);
  }
}
