import { Component, Input } from '@angular/core';
import { Post } from '../app.component'

@Component({
  selector: 'app-visualizza',
  templateUrl: './visualizza.component.html',
  styleUrls: ['./visualizza.component.css']
})

export class VisualizzaComponent  {
  //dichiarazione di un oggetto di classe Post 
  @Input() selezioneA: Post;
  clean() {
    this.selezioneA.testo = undefined;
  }
}