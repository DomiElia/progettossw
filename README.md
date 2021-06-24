# progettossw

L'app gestisce una collezione di post-it, ciascuno presenta un titolo, un testo e un check (casella per designera il messaggio come importante o meno). Prima di tutto, per accedere, bisogna inserire in input una chiave identificativa. Se non si possiede tale chiave, bisogna richiederla. Una volta effettuato l'accesso, l'utente può o visualizzare i propri post, o scriverne di nuovi. 

L'applicazione è formato da un components-parent 'app'. 
Tre component-child: 'accedi', 'nuovopost', 'visualizza'. 
Un servizio 'keyvalue.service'. 

Il component-parent 'app' comprende: 
- definizione della classe Post, che è composta da un titolo, un testo e un check (booleano). I post-it vengono raggruppati all'interno dell'array 'ArrayPost'.
- funzione 'logout', per permettere all'utente di effettuare il logout cliccando sul pulsance 'Esci'.
- funzione 'Mostra' per la visualizzazione dei post. 
- funzione 'Elimina' per permettere all'utente di eliminare un post. Qui viene utilizzato il metodo splice() che rimuove gli elementi dall'array. Poi viene chiamata 'postData', presente nel servizio, che carica l'array aggiornato.
- funzione 'important', basata su visImp, booleano impostato su false. Quando visImp è false, vengono visualizzati tutti i post-it, quando si clicca sul pulsante 'Mostra Importanti', visImp diventa true e vengono visualizzati solo i post-it importanti e il pulsante si trasforma in 'Tutti i messaggi'. 
- funzione 'Aggiungi', per aggiungere un nuovo post-it, infatti viene effettuata una push per riempire l'array del nuovo oggetto, e viene chiamata 'postData' per caricare l'array aggiornato. 
- funzione 'getKey' per visualizzare i post-it associati ad una chiave, la chiave deve essere inserita in input. Tale funzione chiama 'getData', presente nel servizio, per associare i dati associati a tale chiave. 
- funzione 'newKey' permette di ottenere una nuova chiave. Essa chiama la funzione 'Key' che si trova nel servizio. 

Il component-child 'accedi' presenta un input dove inserire la chiave, e un pulsante 'Accedi'. Al click del pulsante 'Accedi' viene chiamata la funzione 'getKey' che visualizza i dati associati a tale chiave. Il pulsante 'Richiedi chiave' invece chiama la funzione 'newKey' che genera una nuova chiave.

Il component-child 'nuovopost', nel template, sono presenti i vari input dove inserire il titolo e il testo del messaggio, una casella da spuntare se si vuole indicare il messaggio come importante, ed un pulsante. Il pulsante 'Salva' invoca la funzione 'nuovopost'. Tale funziona utilizza il metodo emit che trasporta al component-parent 'app' il valore della funzione, che in questo caso è l'oggetto creato dai dati messi in input. Nel tamplate del parent abbiamo appunto la funzione che prende in parametro questo evento, e si occupa poi di andare ad aggiungere il postit appena creato alla lista di postit. 

Il component-child 'visualizza'. Nel component-parent è stata inizializzata la variabile 'selezione' che è di classe 'Post'. 
Quando vengono visualizzati tutti i post-it creati da un utente, viene visualizzato solo il titolo. Per poter visualizzare il testo bisogna cliccare sul titolo. A questo punto 'selezione' viene riempito, vengono riempite le sue proprietà titolo e testo. Questo tramite la variaibile 'selezioneC' che è sempre di classe 'Post'. Nel component-parent viene chiamata app-visualizza, e vengono eguagliate 'selezione' e 'selezioneC'. Quindi quest'ultima ci consente di mostrare il messaggio singolo in corrispondenza del titolo cliccato.

Il servizio keyvalue è composta da: 
- funzione postData: per postare i dati associati ad una chiave.
- funzione getData: per ottenere i dati associati ad una chiave.
- funzione Key: per ottenere una nuova chiave.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/progettossw)