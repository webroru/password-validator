import RuleInterface from './RuleInterface';
import PasswordValidationError from "./PasswordValidationError";

class Rule implements RuleInterface {
  constructor(
    private regexp: RegExp,
    private message: string,
    private isNegative: boolean,
  ) {}

  check(password: string): void {
    const test = this.regexp.test(password);
    if (this.isNegative && test || !this.isNegative && !test) {
      throw new PasswordValidationError(this.message);
    }
  }
}

export default Rule;
