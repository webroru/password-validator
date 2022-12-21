class InternalError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, InternalError.prototype);
  }
}

export default InternalError;
