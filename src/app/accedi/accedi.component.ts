import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-accedi',
  templateUrl: './accedi.component.html',
  styleUrls: ['./accedi.component.css']
})
export class AccediComponent {
  @Output() nuovoKeyEvent = new EventEmitter<string>();
  @Output() nuovoKEvent = new EventEmitter();
  getKey(chiave: string) {
    this.nuovoKeyEvent.emit(chiave);
  }
  newKey() {
    this.nuovoKEvent.emit();
  }
}
