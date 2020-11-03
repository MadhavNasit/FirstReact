import { database } from './database';

const users = database.collections.get('users');

export const observeUsers = () => users.query().observe();

export const editUser = async (id) => await users.find(id);

export const editUserInfo = async (editKey, { name, age, email }) => {
  const user = await users.find(editKey)
  await database.action(async () => {
    await user.update((entry) => {
      entry.name = name;
      entry.age = Number(age);
      entry.email = email;
    });
  });
};

export const addUser = async ({ name, age, email }) => {
  await database.action(async () => {
    await users.create((entry) => {
      entry.name = name;
      entry.age = Number(age);
      entry.email = email;
    });
  });
};

export const deleteUser = async (id) => {
  const user = await users.find(id)
  await database.action(async () => {
    await user.destroyPermanently()
  });
};