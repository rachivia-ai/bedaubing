# Bada Bing Taxi

Productieklare Next.js-website voor Bada Bing Taxi in Roermond. De website gebruikt TypeScript, de App Router, Tailwind CSS en Zod-validatie.

## Lokaal starten

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open daarna `http://localhost:3000`.

## Bedrijfsgegevens aanpassen

Alle openbare bedrijfsgegevens staan centraal in `lib/business-config.ts` en worden via `.env.local` ingevuld. Gebruik `.env.example` als overzicht. Laat onbevestigde waarden leeg; de site verbergt ze dan of toont een eerlijke beheerstatus.

Werkgebieden en diensten staan ook in `lib/business-config.ts`. Zet `enabled` alleen op `true` wanneer de dienst echt wordt aangeboden. Tarieven, betaalmethoden, capaciteit, Google-profiel en contactgegevens worden via omgevingsvariabelen beheerd.

## Formulieren koppelen

Zonder `RESERVATION_WEBHOOK_URL` en `CONTACT_WEBHOOK_URL` werken de formulieren veilig in demomodus: invoer wordt gevalideerd, maar niet opgeslagen of verzonden en de bezoeker krijgt geen vals succesbericht.

Configureer HTTPS-webhooks die JSON accepteren om inzendingen te verwerken. De server valideert met Zod, gebruikt een honeypot en beperkt aanvragen per IP in het actieve proces. Voor grootschalige productie is gedeelde rate limiting (bijvoorbeeld via een edge store) aanbevolen.

Gegevensstroom: browser → beveiligde Next.js API-route → gevalideerde HTTPS-webhook. De website logt geen volledige reserveringsgegevens en gebruikt standaard geen trackingcookies.

## Controle en build

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm start
```

## Voor publicatie

- Vul telefoon, WhatsApp, e-mail, adres, KVK en btw in.
- Bevestig tarieven, betaalmethoden, openingstijden en voertuigcapaciteit.
- Plaats echte bedrijfsfotografie in de hero en verwijder de fotoinstructie.
- Koppel beide webhooks en test de ontvangst.
- Laat privacytekst en algemene voorwaarden juridisch controleren.
- Stel `NEXT_PUBLIC_SITE_URL` in op het definitieve HTTPS-domein.
