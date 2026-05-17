# Finance Engine

Proyecto CLI en TypeScript enfocado en aprender fundamentos de TypeScript, modelado de dominio, validación en runtime y arquitectura de proyectos sin depender de frameworks.

[English](./README.md)

---

## Objetivo

Este proyecto evita intencionalmente el uso de frameworks para entender cómo funcionan las cosas internamente.

Los objetivos incluyen:

- Aprender fundamentos de TypeScript
- Estructurar un proyecto sin frameworks
- Aplicar separación de responsabilidades y arquitectura modular
- Construir un CLI incrementalmente
- Mejorar validación runtime y type safety

---

## Filosofía del Proyecto

- No usar frameworks (NestJS, Express, etc.)
- Entender cómo funcionan las herramientas internamente
- Mantener el código simple y mantenible
- Construir funcionalidades de forma incremental
- Priorizar claridad sobre abstracción

---

## Stack Tecnológico

- TypeScript
- Node.js
- Inquirer
- Zod

---

## Estructura del Proyecto

```bash
src/
├── constants/   # constantes del sistema
├── domain/      # modelos de dominio
├── schemas/     # esquemas de validación con Zod
├── services/    # lógica de negocio
├── utils/       # utilidades compartidas
├── ui/          # salida en consola
├── i18n/        # mensajes de localización
└── index.ts     # punto de entrada del CLI
```

---

## Ejecutar el Proyecto

### Instalar dependencias

```bash
npm install
```

### Compilar TypeScript

```bash
npm run build
```

### Ejecutar el CLI

```bash
npm start
```

---

## Configuración de Entorno

Crea un archivo `.env`:

```env
APP_LANG=es
CLI_THEME=default
```

### Opciones Disponibles

| Variable  | Valores                  | Descripción                 |
| --------- | ------------------------ | --------------------------- |
| APP_LANG  | es / en                  | Idioma del CLI              |
| CLI_THEME | plain / default / custom | Estilo de salida en consola |

---

## Almacenamiento de Datos

Los datos generados se guardan en:

```bash
/data
```

---

## Conceptos que se Practican

- Tipado en TypeScript
- Modelado de dominio
- Validación runtime
- Separación de responsabilidades
- Persistencia con JSON
- Diseño de CLI interactivo
- Configuración basada en entorno

---

## Roadmap

- Creación de estados de cuenta
- Gestión de transacciones
- Validación de transacciones
- Generación de reportes
- Mejoras del CLI

---

## Notas

- Este proyecto tiene un enfoque educativo
- Algunas decisiones de implementación son intencionalmente simples
- El objetivo es entender arquitectura y fundamentos de TypeScript antes de introducir abstracciones

---

## Contribuciones

Las contribuciones enfocadas en aprendizaje, experimentación y mejoras incrementales son bienvenidas.

---

## Filosofía

> Aprende cómo funcionan las cosas antes de depender de abstracciones.
