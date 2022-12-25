import ValidationError from '../src/validation/exceptions/ValidationError';
import Rule from '../src/validation/Rule/Rule';

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
    }).toThrow(ValidationError);
  });
});
