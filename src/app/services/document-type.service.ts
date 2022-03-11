import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const apiKey = environment.apikey;
const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  constructor( private http: HttpClient ) { }

  getDocumentType() {

    return this.http.get(`${apiUrl}/signup/documentTypes?${ apiKey }`)
    
  }
}
