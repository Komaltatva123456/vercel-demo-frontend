import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
    private readonly apiUrl = 'https://vercel-demo-six-pied.vercel.app';
   

    constructor(private http: HttpClient) { }

    healthcheck(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/health-check`);
    }}
