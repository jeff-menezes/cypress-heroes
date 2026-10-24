# My Cypress Automation

This project utilizes Cypress to automate the End-to-End (E2E) testing of a login feature and a hero management system (create and delete actions) for the Cypress Heroes application. 

Cypress is a JavaScript/TypeScript-based E2E testing framework that allows developers and QA engineers to write tests and execute them efficiently in real browsers.

## 🚀 Installation

Make sure you have [Node.js](https://nodejs.org) installed before proceeding.

```bash
npm install
```

> **NOTE:** It is necessary to have node installed.

## 🛠️ Running Tests

### Open the Cypress UI (Interactive Mode)
```bash
npx cypress open
```

### Run all tests via Command Line (Headless Mode)
```bash
npx cypress run
```

### Run specific specs in sequence
```bash
# Run login tests only
npx cypress run --spec "cypress/e2e/login.cy.ts"

# Run hero management tests only
npx cypress run --spec "cypress/e2e/manageHero.cy.ts"
```

## 📂 Project Structure

This project strictly follows the **Page Objects Pattern (POM)** to decouple test scenarios from technical HTML selectors, making maintenance simple and efficient.

```text
cypress/
├── e2e/                             📂 Test Scenarios (Specs)
│   ├── login.cy.ts                  📄 Login specs (success, failure, and list verification)
│   └── manageHero.cy.ts             📄 Hero specs (creation and deletion flows)
│
├── pages/                           📂 Page Objects (Elements & Actions)
│   ├── loginPage.js                 📄 Login form interactions and error handling
│   ├── listHeroesPage.js            📄 Hero dashboard and list data confirmation
│   └── heroCreatePage.js            📄 Creation form and deletion modal workflows
│
├── fixtures/                        📂 Test Data Mass
│   └── userData.json                📄 Admin, standard, and failing credentials
│
└── cypress.config.ts                ⚙️ Global Cypress configuration (BaseURL: localhost:3000)
```

## 📋 Automated Features

1. **Authentication Flow (`login.cy.ts`)**
   * Success Login.
   * Unsuccess Login (validating error banners for invalid credentials).
   * Success Login with full dashboard heroes list verification (ordered check).

2. **Hero Management Flow (`manageHero.cy.ts`)**
   * Creating a new hero with dynamic field inputs, dropdown selection, and image avatar upload.
   * Deleting an existing hero via scoped box actions and accepting confirmation modals.
