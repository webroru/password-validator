import Validation from '../../../src/password/validation/Validation';
import YamlRulesReader from '../../../src/password/validation/YamlRulesReader';

describe('Validation', () => {
  const yamlRulesReader = new YamlRulesReader();
  const validation = new Validation(
    yamlRulesReader,
    `${process.env.NODE_PATH}/tests/password/validation/rules.test.yml`,
    // `${__dirname}/../../../../tests/password/validation/rules.test.yml`,
  );

  test('validate() returns empty array when called with valid string', () => {
    expect(validation.validate('12345')).toHaveLength(0);
  });

  test('validate() returns array or errors when called with invalid string', () => {
    expect(validation.validate('123')).toStrictEqual([
      'Length is minimum five characters',
    ]);
  });
});
