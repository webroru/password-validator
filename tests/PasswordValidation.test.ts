import PasswordValidation from '../src/rules/PasswordValidation';

describe('PasswordValidation', () => {
  const passwordValidation = new PasswordValidation(`${__dirname}/rules.test.yml`);

  test('validate() returns empty array when called with valid password', () => {
    expect(passwordValidation.validate('12345')).toHaveLength(0);
  });

  test('validate() returns array or errors when called with invalid password', () => {
    expect(passwordValidation.validate('123')).toStrictEqual(['Length is minimum five characters']);
  });
});
