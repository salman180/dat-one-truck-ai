# DAT One Truck AI

This starter app is designed to look and feel like a trucking SaaS dashboard inspired by truk.ai.

## Features
- Freight lane dashboard
- DAT One API-ready integration layer
- Pricing / subscription page
- Monetization-focused SaaS layout
- Mock fallback when DAT One credentials are not configured

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## DAT One integration

Create a local `.env.local` file using `.env.example` and add your DAT One credentials.

```bash
cp .env.example .env.local
```

Set:
- `DAT_ONE_API_KEY`
- `DAT_ONE_API_URL`

The app will use live data when credentials exist; otherwise it will display mock logistics data for development.

## Monetization model

This template supports:
- Free / Starter plan
- Pro subscription at $49/mo
- Scale plan at $149/mo
- Premium lane intelligence and market data access

## Production notes

 For a real production SaaS, connect:
- PostgreSQL
- Stripe billing
- authentication
- admin dashboards
- rate comparison and lead tracking
