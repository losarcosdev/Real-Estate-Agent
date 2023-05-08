const optionsGenerator = (number: number) => {
  const options = [];

  for (let index = 0; index <= number; index++) {
    options.push(
      <option value={index} key={index}>
        {index}
      </option>
    );
  }

  return options;
};

export default optionsGenerator;
