declare module "hot-formula-parser" {
  export default class FormulaParser {
    constructor();
    on(eventName: string, callback: Function): void;
    parse(formula: string): { error: string | null; result: any };
  }
}
