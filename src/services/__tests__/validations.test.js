// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
  test('should return false if gamertag length is less than 8 characters', () => {
    const result = isValid('abc'); // un gamertag avec moins de 8 caractères
    expect(result).toBe(false);
  });

  test('should return false if gamertag does not contain at least one special character', () => {
    const result = isValid('gamertagWithoutSpecialCharacter');
    expect(result).toBe(false);
  });

  test('should return false if gamertag does not contain at least one digit', () => {
    const result = isValid('gamertagWithoutDigit');
    expect(result).toBe(false);
  });
});
