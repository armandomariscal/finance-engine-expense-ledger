import fs from "fs";
import path from "path";
import { Statement } from "../domain/statement";
import { statementSchema } from "../schemas/statement.schema";

const DATA_DIR = path.join(process.cwd(), "data");

export function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
  }
}

export function getStatementPath(id: string): string {
  return path.join(DATA_DIR, `${id}.json`);
}

export function statementExists(id: string): boolean {
  const filePath = getStatementPath(id);
  return fs.existsSync(filePath);
}

export function saveStatement(statement: Statement) {
  ensureDataDir();

  const filePath = getStatementPath(statement.id);

  fs.writeFileSync(filePath, JSON.stringify(statement, null, 2));
}

export function listStatements(): Statement[] {
  ensureDataDir();

  return fs
    .readdirSync(DATA_DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      try {
        const filePath = path.join(DATA_DIR, file);
        const content = fs.readFileSync(filePath, "utf-8");

        const parsed = JSON.parse(content);

        return statementSchema.parse(parsed);
      } catch (error) {
        console.error(`Invalid statement file: ${file}`);
        return null;
      }
    })
    .filter(Boolean) as Statement[];
}