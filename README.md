# Northstar Login and Registration

A responsive React app with sign-in and account-creation screens. The two forms
share a page and can be switched using the tabs or the link below the form.

## Requirements

- Node.js and npm

## Run locally

From the project directory, install dependencies and start the development
server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
.
├── index.html
├── package.json
└── src/
    ├── App.jsx       # Login and registration UI and interactions
    ├── main.jsx      # React application entry point
    └── styles.css    # Layout, styling, and responsive breakpoints
```

## Current behavior

- Switch between sign-in and registration forms.
- Validate required fields, email format, password length, and registration
  terms using browser form validation.
- Toggle password visibility.
- Show demo feedback on submission.

## Next steps for the team

Authentication is not connected to a backend yet. To make this production-ready:

1. Connect the form submissions to your authentication API or provider.
2. Add loading and server-error states and handle successful sign-in/registration.
3. Implement password reset and decide how to persist a signed-in session.
4. Replace the demo submission and password-reset messages in `src/App.jsx`.
5. Review the terms and privacy links and connect them to the appropriate pages.

## Notes

The app is built with React and Vite. Google Fonts are currently loaded from
Google Fonts in `src/styles.css`; replace or self-host them if your deployment
needs to avoid external font requests.
