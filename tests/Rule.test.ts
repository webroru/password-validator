import PasswordValidationError from '../src/exceptions/PasswordValidationError';
import Rule from '../src/rules/Rule';

describe('Rule', () => {
  const rule = new Rule(/[0-9]+/, 'This is not a number', false);

  test('defines check()', () => {
    expect(typeof rule.check).toBe('function');
  });

  test("check() returns undefined when called", () => {
    expect(rule.check('123')).toBeUndefined();
  });

  test("check() thows PasswordValidationError", () => {
    expect(() => {
      rule.check('abc');
    }).toThrow(PasswordValidationError);
  });
});
