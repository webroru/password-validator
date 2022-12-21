class PasswordValidationError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, PasswordValidationError.prototype);
  }
}

export default PasswordValidationError;
