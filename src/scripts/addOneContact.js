import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
//додаємо нову пісню

export const addOneContact = async () => {
  const contactList = await readContacts(); //читаємо всі контакти
  const contact = createFakeContact(); // створюємо новий контакт
  await writeContacts([...contactList, contact]); // записуємо до попердніх контактів новий
};

addOneContact();
