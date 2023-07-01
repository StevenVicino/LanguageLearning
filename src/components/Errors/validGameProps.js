function validGameProps(newGame) {
  const errors = [];

  for (const key in newGame) {
    const prop = newGame[key];
    if (!prop || prop.includes("Please select")) {
      errors.push(new Error(`A ${prop} property is required.`));
    }
  }
  return errors;
}

export default validGameProps;
