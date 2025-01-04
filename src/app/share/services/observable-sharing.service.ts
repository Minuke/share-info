import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})
export class ObservableSharingService {

  private sharingObservable: BehaviorSubject<Person> = new BehaviorSubject<Person>({ name: 'Initial Name' });

  get getSharingObservable() {
    return this.sharingObservable.asObservable();
  }

  set setSharingObservable(person: Person) {
    this.sharingObservable.next(person);
  }

}
