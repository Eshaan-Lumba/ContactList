import { Injectable } from '@angular/core';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Contact} from './contact';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  //retrieving ContactService
  getContacts()
  {
    return this.http.get('http://localhost:3000/api/contacts').pipe(map(res => res));
  }

  //add contact method
  addContact(newContact: any)
  {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact, {headers:headers}).pipe(map(res => res));
  }

  //delete method
  deleteContact(id: any)
  {
    return this.http.delete('http://localhost:3000/api/contact/'+id).pipe(map(res => res));
  }


}
