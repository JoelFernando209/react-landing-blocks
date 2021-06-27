class LandingBlocksError extends Error {
  name: string;
  message: string;

  constructor(message: string) {
    super(message);
    this.name = "LandingBlocksError";
    this.message = message;
  }
}

const throwNewError = (message: string) => {
  throw new LandingBlocksError(message);
};

export default throwNewError;
