import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {

 contacts: Contact[] = []; 
 contact!: Contact;
 first_name:string = '';
 last_name:string = '';
 phone: string = '';
 email: string = '';

  //initializes instance of ContactService to connect them
  constructor(private contactService: ContactService) { }

  addContact(){
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone,
      email: this.email
    }
    this.contactService.addContact(newContact).subscribe(contact => {
      this.contacts.push(contact as any); //the 'as any' might cause errors
      this.contactService.getContacts().subscribe(contacts => this.contacts = contacts as any); //this line might cause a few errors. This last line is just so that the page does not have to be reloaded for the contact to be seen. 
    });
  }

  deleteContact(id:any)
  {
    var contacts = this.contacts;
    this.contactService.deleteContact(id).subscribe(data => {
      if (data==1)
      {
        for (var i = 0; i < contacts.length; i++){
          if (contacts[i]._id==id){
            contacts.splice(i, 1);
          }
        }
      }
      this.contactService.getContacts().subscribe(contacts => this.contacts = contacts as any); //this line might cause a few errors. 
    })
  }

  //Everytime method is loaded, this method will be called
  ngOnInit(){
    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts as any); //this line might cause a few errors. 

  }
  

}
