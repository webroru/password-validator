import InternalError from '../../../src/password/validation/exceptions/ConfigurationError';
import Rule from '../../../src/password/validation/Rule/Rule';
import YamlRulesReader from '../../../src/password/validation/YamlRulesReader';

describe('YamlRulesReader', () => {
  const yamlRulesReader = new YamlRulesReader();

  test('defines parse()', () => {
    expect(typeof yamlRulesReader['parse']).toBe('function');
  });

  test('defines createRule()', () => {
    expect(typeof yamlRulesReader['createRule']).toBe('function');
  });

  test('parse() returns valid yaml structure when called', () => {
    const content = `
      rules:
        -
          regexp: .*
          negative: false
          message: Length is minimum five characters
    `;
    expect(yamlRulesReader['parse'](content)).toMatchObject({
      rules: [
        {
          regexp: '.*',
          negative: false,
          message: 'Length is minimum five characters',
        },
      ],
    });
  });

  test('createRule() creates Rule object', () => {
    const yamlRule = { regexp: '.*', negative: false, message: 'test' };
    expect(yamlRulesReader['createRule'](yamlRule)).toBeInstanceOf(Rule);
  });

  test('createRule() throws InternalError when invalid regExp', () => {
    const yamlRule = { regexp: '?', negative: false, message: 'test' };
    expect(() => {
      yamlRulesReader['createRule'](yamlRule);
    }).toThrow(InternalError);
  });
});
