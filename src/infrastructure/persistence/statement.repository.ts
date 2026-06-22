import fs from "fs";
import path from "path";

import { DATA_DIR } from "../../constants/storage";
import { Statement } from "../../domain/statement";
import { statementSchema } from "../../schemas/statement.schema";

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
  }
}

function buildStatementPath(id: string): string {
  return path.join(DATA_DIR, `${id}.json`);
}

function readStatement(fileName: string): Statement | null {
  try {
    const filePath = path.join(DATA_DIR, fileName);

    const content = fs.readFileSync(filePath, "utf-8");

    return statementSchema.parse(JSON.parse(content));
  } catch {
    console.error(`Invalid statement file: ${fileName}`);

    return null;
  }
}

export function saveStatement(statement: Statement): void {
  ensureDataDir();

  const filePath = buildStatementPath(statement.id);

  fs.writeFileSync(filePath, JSON.stringify(statement, null, 2));
}

export function findAllStatements(): Statement[] {
  ensureDataDir();

  return fs
    .readdirSync(DATA_DIR)
    .filter((file) => file.endsWith(".json"))
    .map(readStatement)
    .filter((statement): statement is Statement => statement !== null);
}

export function findStatementById(id: string): Statement | null {
  try {
    const filePath = buildStatementPath(id);

    const content = fs.readFileSync(filePath, "utf-8");

    return statementSchema.parse(JSON.parse(content));
  } catch {
    return null;
  }
}
