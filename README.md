# Task Project

Il sistema permette di creare **dipendenti**, **task** e gestire l'assegnazione dei task ai dipendenti.

Ogni **dipendente** è descritto dalla seguente anagrafica:

- matricola a 5 cifre,
- nome,
- cognome,
- email,
- ruolo,
- data di assunzione,
- data di licenziamento.

I **task** sono invece descritti da:

- id,
- titolo,
- descrizione,
- stato di avanzamento (new, in progress, done),
- data di creazione,
- data di modifica,
- data di eliminazione,
- possono essere associati a un dipendente (o a nessuno).

Il sistema permette le operazioni di CRUD su dipendenti e task.\
Sia i dipendenti che i task possono essere rimossi solo in **soft delete**.\
**N.B.** **Non è prevista alcuna interfaccia grafica**: il server viene interrogato tramite chiamate HTTP.

## PreRequisiti

- NodeJS >= 14
- database MySQL

# Getting started

- Estrai il contenuto del file .zip sul tuo pc
- Esegui il comando `npm ci` per installare le dipendenze di progetto
- Crea un database MySQL
- Aggiungi un file `.env` usando come base `.env.example` e modifica opportunamente le variabili
- Esegui le migration tramite il comando `sequelize-cli db:migrate`
- Avvia il progetto tramite `npm run watch`

# Evolutive

- Creare un'API che restituisca tutti gli utenti e i loro task
- Proteggere le api tramite autenticazione
- Aggiungere la paginazione ai servizi:
    - employees
    - tasks
    - /employees/{{ employee_id }}/tasks
- Aggiungere i seguenti permessi:
    - admin: può creare e assegnare task
    - editor: può solo editare lo status dei task
    - viewer: può vedere solo i propri task

Per qualsiasi dettaglio mancante si richiede al candidato di eseguire delle assunzioni, debitamente commentate.

# Come sottomettere la tua soluzione
Aggiungi nel README.md del tuo progetto le istruzioni per farlo partire, possibilmente tramite Dockerfile / Docker Compose.
Carica il codice di questo progetto sul tuo account GitHub e incolla il link al repository qui sotto.
