// eslint-disable-next-line import/no-cycle
import Data from './Data';
import {
  MethodReturnTypeError,
  MainHasArgsError,
} from './Error';
import { DATA_TYPE } from '../enums/dataTypes';

export default class Method extends Data {
  constructor(type, name, line) {
    super(type, name, line);
    this.args = [];
    this.returnType = null;
    this.width = 0;
  }

  set ReturnType(returnType) {
    this.returnType = returnType === DATA_TYPE.NONE ? DATA_TYPE.VOID : returnType;
    const error = this.checkForErrors();
    // TODO: This was "this.Error", but needed to change it because of error repetition;
    if (error)
      this.error = error;
  }

  checkForErrors() {
    if (this.error)
      return this.error;

    if (this.returnType && this.type !== this.returnType)
      return new MethodReturnTypeError(this.name, this.type, this.returnType, this.line);

    if (this.name === 'main' && this.args.length)
      return new MainHasArgsError();

    return null;
  }
}
