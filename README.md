# 🧠 Finance Engine (Experimental TypeScript CLI)

> Proyecto experimental para aprender **TypeScript desde sus fundamentos**, aplicando buenas prácticas de arquitectura sin depender de frameworks.

---

## 🎯 Objetivo

Este proyecto NO busca ser una aplicación completa o lista para producción.

Su propósito es:

- Aprender TypeScript desde cero
- Entender cómo estructurar un proyecto sin frameworks
- Aplicar buenas prácticas (modularidad, validación, separación de responsabilidades)
- Construir un CLI (Command Line Interface) paso a paso

---

## 🧩 Filosofía del proyecto

- ❌ No usar frameworks (NestJS, Express, etc.)
- ✅ Entender cómo funcionan las cosas internamente
- ✅ Código simple pero bien estructurado
- ✅ Evolución incremental (feature por feature)

---

## 🛠️ Tecnologías

- TypeScript
- Node.js
- prompt-sync (entrada por consola)

---

## 📁 Estructura del proyecto

```bash
src/
├── constants/   # constantes del sistema
├── domain/      # modelos (Statement, Transaction, etc.)
├── services/    # lógica del negocio
├── utils/       # validaciones
├── ui/          # logging / salida en consola
├── i18n/        # mensajes (multi-idioma)
└── index.ts     # punto de entrada (CLI)
```

## 🧩 🚀 Cómo ejecutar el proyecto
1. Instalar dependencias
```bash
npm install
```
2. Compilar TypeScript
```bash
npx tsc
```
Esto genera el código JavaScript en la carpeta dist/.

---

3. Ejecutar la aplicación
```bash
- node dist/index.js
```

---

## ⚠️ Importante

Este proyecto NO usa herramientas automáticas como:

- nodemon
- ts-node
- frameworks CLI
   
👉 Esto es intencional para entender:

- cómo funciona la compilación
- cómo Node ejecuta JavaScript
- qué hace realmente TypeScript

---
  
## 🧪 Configuración (opcional)

Puedes usar variables de entorno creando un archivo .env:

```bash
  APP_LANG=es
  CLI_THEME=default
```

Opciones disponibles

<table width="100%">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Valores</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>APP_LANG</td>
      <td>es / en</td>
      <td>Idioma de la interfaz</td>
    </tr>
    <tr>
      <td>CLI_THEME</td>
      <td>plain / default / custom</td>
      <td>Estilo de salida en consola</td>
    </tr>
  </tbody>
</table>

---

## 📦 Datos
Los datos generados se guardan en:
- /data
  
---

## 👨‍👦 Para nuevos desarrolladores (Onboarding)
Si estás empezando (por ejemplo, aprendiendo HTML, CSS y JavaScript), sigue estos pasos:

🪜 Paso 1: Entiende qué es este proyecto
> Esto es un programa que corre en la terminal (no en el navegador).

---

🪜 Paso 2: Aprende lo básico de JavaScript
> Antes de modificar el proyecto, asegúrate de entender:
- variables (let, const)
- funciones
- objetos
- arrays

---

🪜 Paso 3: Observa el flujo principal

Archivo clave:
```bash
src/index.ts
```
Aquí comienza todo.

---

🪜 Paso 4: Haz cambios pequeños 

Ejemplos:

- cambiar textos en i18n/messages.ts
- modificar mensajes de consola
- agregar nuevas opciones al menú

---

🪜 Paso 5: Compila y prueba 

Cada cambio requiere:
```bash
npx tsc
node dist/index.js
```

---

## 🧠 Conceptos que se practican
- Tipos en TypeScript
- Separación de responsabilidades
- Validación de datos
- Manejo de archivos (JSON)
- CLI interactivo
- Configuración por entorno

---

## 📌 Notas
- Este proyecto es educativo
- Puede contener decisiones simples a propósito
- Se prioriza claridad sobre complejidad

---

## 🚧 Roadmap
- Crear estados de cuenta
- Agregar y validar transacciones
- Reportes básicos
- Mejoras en CLI

---

## 🤝 Contribución

Este proyecto está abierto a aprendizaje.

Si eres nuevo:

- Haz cambios pequeños
- Experimenta
- Rompe cosas y vuelve a intentar

---

## 🧘 Filosofía final

“Aprender cómo funciona antes de usar herramientas que lo abstraen.”
