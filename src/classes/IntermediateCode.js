export default class IntermediateCode {
  static set CodeLines(codeLines) {
    this.codeLines = codeLines;
  }

  static pushCodeLine(codeLine) {
    this.codeLines.push(codeLine);
    console.log(codeLine);
  }

  static Initialize() {
    this.tabs = 0;
    this.CodeLines = [];
  }
}