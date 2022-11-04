# Examenopdracht Front-end Web Development

- Student: ANDREEAS FIROIU
- Studentennummer: 077350AF
- E-mailadres: andreeas.firoiu@student.hogent.be

## Vereisten

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
- ...

> Vul eventueel aan

## Opstarten

Applicatie start via yarn start. 
Het vereist als env variable de url van de backend via REACT_APP_BACKEND_BASE_URL.
Indien deze niet bestaat, zal hij als default 9000 nemen.

## Testen

Yarn cypress is voldoende om de Cypress UI te starten.
Voor convenience is er een all.cy.ts bestand die alle testen simultaan laat draaien.
Mijn testen mocken 100% van de output van de backend waardoor deze kunnen draaien zonder een actieve backend. Hij mocked ook negatieve reacties, dus alle scenarios zijn afgetoetst.
