const parseArgs = () => {
  const args = process.argv
    .slice(2)
    .reduce(
      (acc, item, index) => !(index % 2) ?
        `${acc}${item.replace(/^-{1,2}/, '')} is ` :
        `${acc}${item}, `, ''
    );

  process.stdout.write(args);
  process.stdout.write('\n');
};

parseArgs();