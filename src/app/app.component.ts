import { Component } from '@angular/core';
import { ClinicOutcomesComponent } from './components/clinic-outcomes/clinic-outcomes.component';
@Component({
  selector: 'app-root',
  imports: [ClinicOutcomesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clinic-outcomes';
}
