import { Component } from '@angular/core';
import { FormControl, FormRecord } from '@angular/forms';

export enum StatusLookup {
  active = 'Active',
  paused = 'Paused'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  statusFilter = new FormRecord<FormControl<boolean | null>>({});

  constructor() {
    Object.values(StatusLookup).forEach(state => this.statusFilter.addControl(state, new FormControl(false)));
  }

}
