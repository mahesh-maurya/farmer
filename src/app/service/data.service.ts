import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private headers: HttpHeaders;
  private httpOptions: Object;
  constructor(private http: HttpClient) { 
    this.httpOptions = { headers: this.headers };
  }
}
