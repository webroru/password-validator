import RuleInterface from './RuleInterface';
import ValidationError from "../exceptions/ValidationError";

export default class Rule implements RuleInterface {
  constructor(
    private regexp: RegExp,
    private message: string,
    private isNegative: boolean,
  ) {}

  check(password: string): void {
    const test = this.regexp.test(password);
    if (this.isNegative && test || !this.isNegative && !test) {
      throw new ValidationError(this.message);
    }
  }
}
