import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {}

  public getTarifas(): Observable<any> {
    return this.httpClient.get(environment.apiTarifa);
  }

  public getPlanos(): Observable<any> {
    return this.httpClient.get(environment.apiPlanos);
  }

}
