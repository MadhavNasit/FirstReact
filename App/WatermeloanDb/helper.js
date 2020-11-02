import { database } from './database';

const users = database.collections.get('users');

export const observeUsers = () => users.query().observe();

export const addUser = async ({ name, age, email }) => {
  await database.action(async () => {
    await users.create((entry) => {
      entry.name = name;
      entry.age = Number(age);
      entry.email = email;
    });
  });
};