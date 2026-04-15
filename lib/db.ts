import Database from 'better-sqlite3';
import path from 'path';

// Connect to SQLite database
const dbPath = path.join(process.cwd(), 'leads.db');
const db = new Database(dbPath);

// Initialize leads table
db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    projectScope TEXT,
    propertyType TEXT,
    ownProperty TEXT,
    bathroomsCount TEXT,
    budget TEXT,
    timeline TEXT,
    zipCode TEXT,
    city TEXT,
    state TEXT,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    phone TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;
