# Buy-Momma
A curated baby registry for expecting families.

## Run Locally

Install the required packages using `npm`
```bash
npm i
```
Start the application
```bash
npm run dev
```
View the running application in the browser: http://localhost:3000

## Environment Variables

Load the following environment variables for `Buy-Momma` into a `.env.local` file <br />
Path: `.env.local`

| Environment Variable  | Description  | Example |
|---|---|---|
| DATABASE_URL  | [Prisma](https://www.prisma.io/docs/concepts/database-connectors/mongodb#connection-url) Database Connection String  | mongodb://root:local@localhost:27017/db?authSource=admin |
| USE_FAKE_PORTS | To conserve API calls - set to true to be provided demo information | TRUE

## Tech Stack
- React
- Next.js
- TailwindCSS
