import { Component, inject, WritableSignal } from '@angular/core';
import { SignalSharingService } from '../../services/signal-sharing.service';
import { Person } from '../../interfaces/person.interface';

@Component({
  selector: 'app-signal-information',
  imports: [],
  templateUrl: './signal-information.component.html',
  styleUrl: './signal-information.component.scss'
})
export class SignalInformationComponent {

  private sharingService = inject(SignalSharingService); 

  public data: WritableSignal<Person> = this.sharingService.getSharingSignal; 
  
}

