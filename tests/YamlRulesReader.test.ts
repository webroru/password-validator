import Rule from '../src/rules/Rule';
import YamlRulesReader from '../src/rules/YamlRulesReader';

describe('YamlRulesReader', () => {
  const yamlRulesReader = new YamlRulesReader();

  test('parse() returns valid yaml structure when called', () => {
    const content = `
      rules:
        -
          regexp: .*
          negative: false
          message: Length is minimum five characters
    `;
    expect(yamlRulesReader.parse(content)).toMatchObject({ rules: [{ regexp: '.*', negative: false, message: 'Length is minimum five characters' }] });
  });

  test('createRule() creates Rule object', () => {
    const yamlRule = { regexp: '.*', negative: false, message: 'test' };
    expect(yamlRulesReader.createRule(yamlRule)).toBeInstanceOf(Rule);
  });
});
