
/**
 * A -
 * Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e 
 * una lista di cognomi, Gatsby vuole generare una falsa lista di 8 invitati.
 *
 * B - Stampiamo la lista in modo ordinato in html come elementi <li> figli di un unico <ul>.
 */

//CARICHIAMO LE DUE LISTE
listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carly", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];
 
//PREDISPONIAMO UNA LISTA VUOTA
listaInvitati = [];

//RISCRIVIAMO TUTTI I NOMI AL FEMMINILE
let contatoreA = 0

//FINCHé DURERà LA LISTA DEI NOMI
while (contatoreA < listaNomi.length) {
    //SE DI UN ELEMENTO "CONTATO" DENTRO listaNomi LA LETTERA FINALE SARà UGUALE AD 'a'   
    if (listaNomi[contatoreA].charAt(listaNomi[contatoreA].length - 1) == 'a' ||
    // OPPURE 'e'
        listaNomi[contatoreA].charAt(listaNomi[contatoreA].length - 1) == 'e' || 
    // OPPURE 'i'
        listaNomi[contatoreA].charAt(listaNomi[contatoreA].length - 1) == 'i' ||
    // OPPURE 'o'
        listaNomi[contatoreA].charAt(listaNomi[contatoreA].length - 1) == 'o' ||
    // OPPURE 'u'
        listaNomi[contatoreA].charAt(listaNomi[contatoreA].length - 1) == 'u' ||
    // OPPURE 'y'
        listaNomi[contatoreA].charAt(listaNomi[contatoreA].length - 1) == 'y' ||) {
    // LA LETTERA FINALE DELL'ELEMENTO "CONTATO" DENTRO listaNomi VERRà TAGLIATA E SOSTITUITA CON "ina"
        listaNomi[contatoreA] = listaNomi[contatoreA].slice(0,-1) + 'ina'; 
        } /*ALTRIMENTI*/ else {
    // L'ELEMENTO "CONTATO" DI listaNomi SARà IL RISULTATO DI Sè STESSO + 'ina'
        listaNomi[contatoreA] += 'ina'
    }
contatoreA++;
}
// ADESSO CARICHIAMO LA LISTA CASUALE
// FACCIAMO PARTIRE UN CONTATORE PER 8 CICLI

for (let contatoreB = 0; contatoreB < 8; contatoreB++) {

    let indiceNomeRandomico = Math.floor(Math.random()*listaNomi.length); // arrotondiamo al numero intero più piccolo con Math.floor
                                                                          // e calcoliamo con Math.random() * numeroMassimo un numero randomico
                                                                          // compreso tra zero e numeroMassimo (escluso)
    let indiceCognomeRandomico = Math.floor(Math.random()*listaCognomi.length); //FACCIAMO LO STESSO ANCHE PER IL COGNOME

    //UNIAMOLI IN UNA SOLA VARIABILE CON UNO SPAZIO IN MEZZO
    let nomeInteroRandomico = listaNomi[indiceNomeRandomico] + '' + listaCognomi;

    //SCRIVIAMOLO SUL NOSTRO HTML
    document.getElementById('lista-invitati').innerHTML += '<li>' + nomeInteroRandomico + '</li>';

}

//SCRIVIAMO NEL NOSTRO HTML PURE LA LISTA DEI NOMI CARICATA IN PRECEDENZA
document.getElementById("lista-nomi").innerHTML = listaNomi.toString();

//E I COGNOMI
document.getElementById("lista-cognomi").innerHTML = listaCognomi.toString();
    





