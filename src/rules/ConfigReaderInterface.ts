import RuleInterface from "./RuleInterface";

interface ConfigReaderInterface {
  read(path: string): RuleInterface[];
}

export default ConfigReaderInterface;
