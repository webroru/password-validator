import fs from 'fs';
import YAML from 'yaml';
import InternalError from '../exceptions/InternalError';
import ConfigReaderInterface from "./ConfigReaderInterface";
import Rule from './Rule';
import RuleInterface from './RuleInterface';

class YamlRulesReader implements ConfigReaderInterface {
  read(path: string): RuleInterface[] {
    if (!fs.existsSync(path)) {
      throw new InternalError(`File ${path} not found`);
    }
    const file = fs.readFileSync(path, 'utf8');
    const yaml = this.parse(file);

    return yaml.rules.map(this.createRule);
  }

  parse(data: string): { rules: { regexp: string, negative: boolean, message: string }[] } {
    return YAML.parse(data);
  }

  createRule(yamlRule: { regexp: string, negative: boolean, message: string }): RuleInterface {
    return new Rule(new RegExp(yamlRule.regexp), yamlRule.message, yamlRule.negative);
  }
}

export default YamlRulesReader;