import PasswordValidationError from "../exceptions/PasswordValidationError";
import RuleInterface from "./RuleInterface";
import YamlRulesReader from "./YamlRulesReader";

class PasswordValidation {
  private rules: RuleInterface[];

  constructor(configPath: string) {
    const yamlRulesReader = new YamlRulesReader();
    this.rules = yamlRulesReader.read(configPath)
  }

  public validate(password: string): string[] {
    const errors: string[] = [];
    this.rules.forEach((rule: RuleInterface) => {
      try {
        rule.check(password);
      } catch (e) {
        if (e instanceof PasswordValidationError) {
          errors.push(e.message);
        }
      }
    });

    return errors;
  }
}

export default PasswordValidation;
