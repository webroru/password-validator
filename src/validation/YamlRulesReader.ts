import fs from 'fs';
import YAML from 'yaml';
import ConfigurationError from './exceptions/ConfigurationError';
import ConfigReaderInterface from "./ConfigReaderInterface";
import Rule from './Rule/Rule';
import RuleInterface from './Rule/RuleInterface';

export default class YamlRulesReader implements ConfigReaderInterface {
  read(path: string): RuleInterface[] {
    if (!fs.existsSync(path)) {
      throw new ConfigurationError(`File ${path} not found`);
    }
    const file = fs.readFileSync(path, 'utf8');
    const yaml = this.parse(file);

    return yaml.rules.map(this.createRule);
  }

  private parse(data: string): { rules: { regexp: string, negative: boolean, message: string }[] } {
    return YAML.parse(data);
  }

  private createRule(yamlRule: { regexp: string, negative: boolean, message: string }): RuleInterface {
    try {
      const regExp = new RegExp(yamlRule.regexp);
      return new Rule(regExp, yamlRule.message, yamlRule.negative);
    } catch {
      throw new ConfigurationError(`${yamlRule.regexp} — is not a valid pattern`);
    }
  }
}
