const parseArgs = () => {
    let args = '';
    process.argv.slice(2).forEach((arg, index) => {
          args += (!(index % 2)) ? arg.replace('--', '') : ` is ${arg}, `;
        });
        if (args.length) {
          console.log(args.slice(0, -2));
        } else {
          console.log('No args used');
        }
};

parseArgs();