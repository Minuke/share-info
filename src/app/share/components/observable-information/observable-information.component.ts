import { Component, inject } from '@angular/core';
import { ObservableSharingService } from '../../services/observable-sharing.service';
import { Observable } from 'rxjs';
import { Person } from '../../interfaces/person.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-observable-information',
  imports: [AsyncPipe],
  templateUrl: './observable-information.component.html',
  styleUrl: './observable-information.component.scss'
})
export class ObservableInformationComponent {

  private sharingService = inject(ObservableSharingService);

  public data$: Observable<Person> =  this.sharingService.getSharingObservable;

}
