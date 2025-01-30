import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
    private readonly apiUrl = 'http://localhost:3000';
   

    constructor(private http: HttpClient) { }

    healthcheck(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/health-check`);
    }}