import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2)); // writeFile перезаписує файл з нуля, видаляє все що було і записує нове
};
