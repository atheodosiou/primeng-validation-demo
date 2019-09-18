import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MockServerService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('/assets/response.json');
  }
}
