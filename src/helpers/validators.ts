import throwNewError from "./error";

export const checkIfFalsy = (arrValues: [any, string][]) => {
  arrValues.forEach(([value, name]: [any, string]) => {
    if (!value) {
      throwNewError(`The ${name} is required.`);
    }
  });
};
