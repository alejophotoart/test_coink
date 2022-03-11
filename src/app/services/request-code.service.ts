import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = environment.apiUrl;
const key = environment.apikey;

@Injectable({
  providedIn: 'root'
})
export class RequestCodeService {

  constructor( private http: HttpClient ) { }

  getCode( payload ) {

      return this.http.post( `${ URL }/signup/sendSmsVerificationNumber?${ key }`, payload );

  }

}
