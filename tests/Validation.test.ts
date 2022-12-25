import Validation from '../src/validation/Validation';
import YamlRulesReader from '../src/validation/YamlRulesReader';

describe('Validation', () => {
  const yamlRulesReader = new YamlRulesReader();
  const validation = new Validation(yamlRulesReader, `${__dirname}/rules.test.yml`);

  test('validate() returns empty array when called with valid string', () => {
    expect(validation.validate('12345')).toHaveLength(0);
  });

  test('validate() returns array or errors when called with invalid string', () => {
    expect(validation.validate('123')).toStrictEqual(['Length is minimum five characters']);
  });
});
