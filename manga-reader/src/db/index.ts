import Database from '@tauri-apps/plugin-sql'

let db: Awaited<ReturnType<typeof Database.load>> | null = null

export async function getDb() {
  if (!db) {
    db = await Database.load('sqlite:manga.db')
  }
  return db
}