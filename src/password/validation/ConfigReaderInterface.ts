import RuleInterface from './Rule/RuleInterface';

export default interface ConfigReaderInterface {
  read(path: string): RuleInterface[];
}
