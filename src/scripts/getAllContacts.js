import { readContacts } from '../utils/readContacts.js';

//скрипт повертає всі контакти, ігноруємо await, бо функція і так повертає проміс і при виклику ми пишемо await і так
export const getAllContacts = () => {
  const allContacts = readContacts();
  return allContacts;
};

console.log(await getAllContacts());
