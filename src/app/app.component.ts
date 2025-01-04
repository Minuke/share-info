import { Component, signal } from '@angular/core';
import { ObservableInformationComponent } from './share/components/observable-information/observable-information.component';
import { SignalInformationComponent } from './share/components/signal-information/signal-information.component';

@Component({
  selector: 'app-root',
  imports: [ObservableInformationComponent, SignalInformationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'share-info';
}
