import { Model } from '@nozbe/watermelondb';
import { field, readonly, date } from '@nozbe/watermelondb/decorators';

export default class Users extends Model {
  static table = 'users';

  @field('name') name;
  @field('age') age;
  @field('email') email;
}