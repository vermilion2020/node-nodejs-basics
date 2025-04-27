const parseEnv = () => {
  const rss = Object.entries(process.env)
    .filter(([key]) => /^RSS_*/.test(key))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  process.stdout.write(rss);
  process.stdout.write('\n');
};

parseEnv();