import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeLastContact = async () => {
  const contacts = await readContacts();
  contacts.pop(); //pop -метод масиву,що вирізає і повертає останній елемент масиву, так як в змінну не зберігаємо - то просто вирізає тут
  await writeContacts(contacts); //перезаписуємо
};

removeLastContact();
