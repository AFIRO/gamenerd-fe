# Examenopdracht Front-end Web Development

- Student: ANDREEAS FIROIU
- Studentennummer: 077350AF
- E-mailadres: andreeas.firoiu@student.hogent.be

## Vereisten

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)


## Opstarten

Applicatie start via yarn start. 
Het vereist dat u een .env met als variable de url van de backend instelt via REACT_APP_BACKEND_BASE_URL.
Deze werd bij deploy overschreven door de pipeline als variable.

Indien deze niet bestaat, zal hij als default localhost:9000/api nemen zoals in de config.json staat om local development en testing te vergemakkelijken.

Indien u test op de web versie, gelieve na de eerste login poging even 10-15 seconden te wachten. Deze zal, logischerwijs, falen gezien de Heroku Eco Dynamo zichzelf moet opspinnen. Ik heb dit zo ingesteld om nodeloze kosten te mijden. Zodra de backend draait, kunt u inloggen en de frontend gebruiken. Dit toont, by design, geen foutmelding omdat een echte publieke website nooit zal draaien op een eco modus en een interne tool zijn instantie zou opspinnen voor de werkdag begint met een timer. Daar ik echter niet kan weten wanneer u van plan bent om te testen is dit helaas een noodzakelijk kwaad.

## Testen

Yarn cypress is voldoende om de Cypress UI te starten.
Voor convenience is er een all.cy.ts bestand die alle testen simultaan laat draaien.
Mijn testen mocken 100% van de output van de backend waardoor deze kunnen draaien zonder een actieve backend. Hij mocked ook negatieve reacties, dus alle scenarios zijn afgetoetst.
