import { Component } from '@angular/core';
import { KeyvalueService } from './keyvalue.service';

export class Post {
  titolo: string;
  testo: string;
  check: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'POST-IT';
  title2: string = 'I tuoi post it';
  title3: string = 'Scrivi nuovo post-it';
  chiave: any = '';
  ArrayPost: Array<Post> = [];
  //variabile per definire la visualizzazione degli importanti
  visImp: boolean = false;
  //variabile per definire cosa visualizzare 
  vis: Boolean = false;
  //creazione di un nuovo oggetto associato alla classe Post
  selezione: Post = new Post();
  constructor(private kv: KeyvalueService) {}

  logout() {
    window.location.reload();
  } 

  Mostra(id) {
    this.selezione.titolo = this.ArrayPost[id].titolo;
    this.selezione.testo = this.ArrayPost[id].testo;
  }

  //funzione per eliminare post, elimina un oggetto dall'array ArrayPost
  Elimina(id: number) {
    this.ArrayPost.splice(id, 1);
    let msg: string = JSON.stringify(this.ArrayPost);
    this.kv.postData(msg)
       .then(response => response.json(), error => alert(error))
        .then(data => {
          console.log(data);
        });
  }

 //funzione per gestire la visualizzazione dei postit importanti o di tutti i postit
  important() {
    if (!this.visImp) {
      document.getElementById('pulsanteImp').innerHTML = 'Tutti i messaggi';
      this.visImp = true;
    } else {
      document.getElementById('pulsanteImp').innerHTML =
        'Mostra importanti';
      this.visImp = false;
    }
  }

  //funzione per aggiungere post, che aggiunge un oggetto all'array ArrayPost
  Aggiungi(newPost: Post) {
    this.kv.apiKey = this.chiave;
    this.ArrayPost.push(newPost);
    let msg: string = JSON.stringify(this.ArrayPost);
    this.kv
      .postData(msg)
      .then(response => response.json(), error => alert(error))
      .then(data => {
        console.log(data);
      });
  }


  //funzione per far vedere tutti i post associati ad una chiave. Vengono visualizzati i post-it associati alla chiave inserita in input. 
  getKey(k: string) {
    this.kv.apiKey = k;
    this.kv
      .getData()
      .then(response => response.json(), error => alert(error))
      .then(data => {
        console.log(data);
        var oggetto = JSON.parse(data);
        for (let i in oggetto) {
          this.ArrayPost.push(oggetto[i]);
        }
        this.vis = true;
        this.chiave = k;
      });
  }

  //funzione per ottenere una nuova chiave 
  newKey() {
    this.kv.Key().then(key => {
      fetch(this.kv.apiURL + '/post?key=' + key + '&msg=' + {}, {
        method: 'POST'
      })
        .then(response => response.json(), error => alert(error))
        .then(data => {
          console.log(data);
        });
      this.chiave = key;
    });
    this.vis = true;
  }
}
