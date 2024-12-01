import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'node:fs/promises';
export const readContacts = async () => {
  const data = await readFile(PATH_DB, 'utf-8'); // читаємо файл db з допомогою пакету fs:
  return JSON.parse(data); //зі строки робимо масив
};
