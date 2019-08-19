import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {}

  public getTarifas(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/api/tarifa');
  }

  public getPlanos(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/api/plano');
  }

}
