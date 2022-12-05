const parseEnv = () => {
    let vars = [];
    Object.keys(process.env).forEach(key => {
        if(key.includes('RSS_')) {
            vars.push(`${key}=${process.env[key]}`);
        }
    });
    if (vars.length) {
        console.log(vars.reverse().join(';'));
    } else {
        console.log('No RSS_ vars found');
    }
};

parseEnv();