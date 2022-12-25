import ConfigReaderInterface from './ConfigReaderInterface';
import ValidationError from './exceptions/ValidationError';
import RuleInterface from './Rule/RuleInterface';

export default class Validation {
  private rules: RuleInterface[];

  constructor(yamlRulesReader: ConfigReaderInterface, configPath: string) {
    this.rules = yamlRulesReader.read(configPath)
  }

  public validate(password: string): string[] {
    const errors: string[] = [];
    this.rules.forEach((rule: RuleInterface) => {
      try {
        rule.check(password);
      } catch (e) {
        if (e instanceof ValidationError) {
          errors.push(e.message);
        } else {
          throw e;
        }
      }
    });

    return errors;
  }
}
