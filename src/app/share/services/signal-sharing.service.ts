import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { Person } from '../interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})
export class SignalSharingService {

  private sharingSignal: WritableSignal<Person> = signal({ name: 'Initial Name' }); 
  
  get getSharingSignal() {
    return this.sharingSignal; 
  } 
  
  set setSharingSignal(person: Person) { 
    this.sharingSignal.set(person); 
  }

}
