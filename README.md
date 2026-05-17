# Finance Engine

TypeScript CLI project focused on learning TypeScript fundamentals, domain modeling, runtime validation, and project architecture without relying on frameworks.

[Español](./README.es.md)

---

## Purpose

This project is intentionally framework-free and focused on understanding how things work internally.

Goals include:

- Learning TypeScript fundamentals
- Structuring a project without frameworks
- Applying separation of concerns and modular architecture
- Building a CLI incrementally
- Improving runtime validation and type safety

---

## Project Philosophy

- No frameworks (NestJS, Express, etc.)
- Understand the underlying mechanics
- Keep the codebase simple and maintainable
- Build features incrementally
- Prioritize clarity over abstraction

---

## Tech Stack

- TypeScript
- Node.js
- Inquirer
- Zod

---

## Project Structure

```bash
src/
├── constants/   # system constants
├── domain/      # domain models
├── schemas/     # Zod validation schemas
├── services/    # business logic
├── utils/       # shared utilities
├── ui/          # console output
├── i18n/        # localization messages
└── index.ts     # CLI entry point
```

---

## Running the Project

### Install dependencies

```bash
npm install
```

### Compile TypeScript

```bash
npm run build
```

### Start the CLI

```bash
npm start
```

---

## Environment Configuration

Create a `.env` file:

```env
APP_LANG=es
CLI_THEME=default
```

### Available Options

| Variable  | Values                   | Description          |
| --------- | ------------------------ | -------------------- |
| APP_LANG  | es / en                  | CLI language         |
| CLI_THEME | plain / default / custom | Console output style |

---

## Data Storage

Generated data is stored in:

```bash
/data
```

---

## Concepts Practiced

- TypeScript typing
- Domain modeling
- Runtime validation
- Separation of concerns
- JSON persistence
- Interactive CLI design
- Environment-based configuration

---

## Roadmap

- Statement creation
- Transaction management
- Transaction validation
- Reporting features
- CLI improvements

---

## Notes

- This project is educational by design
- Some implementation decisions are intentionally simple
- The focus is understanding architecture and TypeScript fundamentals before introducing abstractions

---

## Contributing

Contributions focused on learning, experimentation, and incremental improvements are welcome.

---

## Philosophy

> Learn how things work before relying on abstractions.
