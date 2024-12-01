//1створити фейкову кількісь контактів(у utils/createFakeontats)
//2додавати контакти до попереднього файла нові
//3. записати контакти у файл debugger.json
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  // const contact = createFakeContact();
  const contactList = await readContacts(); //зчитуємо контакти, що були,
  const newContact = Array(number).fill(0).map(createFakeContact); //створюємо пісні нові
  const newList = [...contactList, ...newContact]; //до попередніх контактів додаємо нові
  await writeContacts(newList); // старі контакти+нові передаємо в функцію writeContacts
};

generateContacts(5);
