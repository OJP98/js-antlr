/* eslint-disable max-classes-per-file */
export default class Error {
  constructor(name, details, line = null, column = null) {
    this.name = name;
    this.details = details;
    this.line = line;
    this.column = column;
  }

  get ErrorLog() {
    return this.line ? `${this.details}  At line ${this.line}` : this.details;
  }
}

export class MainNotDefinedError extends Error {
  constructor() {
    super('MainMethodNotDefined', 'Main method has not been defined.');
  }
}

export class MainHasArgsError extends Error {
  constructor() {
    super('MainMethodArgs', 'Main method contains one or more args.');
  }
}

export class ArrayLengthError extends Error {
  constructor(id, line) {
    super('ArrayLength', `Array "${id}" length can't be zero or lower.`, line);
  }
}

export class ArrayLengthNotIntError extends Error {
  constructor(id, line, column) {
    super('ArrayLengthNotInt', `Array length ${id} is not an integer value.`, line, column);
  }
}

export class MethodReturnTypeError extends Error {
  constructor(line, column) {
    super('MethodReturnType', 'Void method returns a data type.', line, column);
  }
}

export class IdAlreadyDeclaredError extends Error {
  constructor(id, line, column) {
    super('Id Already Declared', `"${id}" has been already declared in the current scope.`, line, column);
  }
}

export class UndeclaredIdError extends Error {
  constructor(id, line) {
    super('UndeclaredIdError', `"${id}" doesn't exist in the current scope.`, line);
  }
}

export class InvalidConversion extends Error {
  constructor(type1, type2) {
    super('Invalid Conversion', `Invalid conversion from ${type1} to ${type2}`);
  }
}

export class InvalidPropertyError extends Error {
  constructor(struct, property, line) {
    super('Invalid Property', `"${property}" is not a property of "${struct}"`, line);
  }
}

export class UndeclaredStructError extends Error {
  constructor(structId, line) {
    super('Undeclared Struct', `Struct "${structId}" doesn't exist in the current scope.`, line);
  }
}

// location = expression don't have the same types
export class InvalidAssignmentError extends Error {
  constructor(id, symbolType, assignmentType, line) {
    super(
      'Invalid Assignment',
      `Invalid assignment of type "${assignmentType}" to ${symbolType} "${id}".`, line,
    );
  }
}

// operand types are not int.
export class InvalidOperationType extends Error {
  constructor(line) {
    super(
      'Invalid Operation Type',
      'Invalid data type for operation.', line,
    );
  }
}
