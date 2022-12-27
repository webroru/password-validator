import { Injectable } from '@nestjs/common';
import Validation from './validation/Validation';
import YamlRulesReader from './validation/YamlRulesReader';

@Injectable()
export class PasswordService {
  private readonly CONFIG_PATH = `${process.env.NODE_PATH}/rules.yml`;
  private readonly validation: Validation;

  public constructor() {
    const yamlRulesReader = new YamlRulesReader();
    this.validation = new Validation(yamlRulesReader, this.CONFIG_PATH);
  }

  public passwordValidation(password: string): string[] {
    return this.validation.validate(password);
  }
}
