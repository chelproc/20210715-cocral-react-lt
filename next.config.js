module.exports = {
  reactStrictMode: true,
  basePath: process.env.REMOTE_URL
    ? `${new URL(process.env.REMOTE_URL).pathname}samples`
    : "",
};
