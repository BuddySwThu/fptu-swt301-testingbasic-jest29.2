import { add, isNull, checkValue, createUser, fetchUser } from './functions';

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');
const nameCheck = () => console.log('Checking Name....');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});

// toBe
it('Adds 2 + 2 to equal 4', () => {
  expect(add(2, 2)).toBe(4);
});

// not
it('Adds 2 + 2 to NOT equal 5', () => {
  expect(add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
it('Should be null', () => {
  expect(isNull()).toBeNull();
});

// toBeFalsy
it('Should be falsy', () => {
  expect(checkValue(undefined)).toBeFalsy();
});

// toEqual
test('User should be Brad Traversy object', () => {
  expect(createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy'
  });
});

// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays
//test('Admin should be in usernames', () => {
//  usernames = ['john', 'karen', 'admin'];
//  expect(usernames).toContain('admin');
//});

// Working with async data

// Promise
// test('User fetched name should be Leanne Graham', () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual('Leanne Graham');
//   });
// });

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});