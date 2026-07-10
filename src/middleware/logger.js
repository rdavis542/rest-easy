const REDACTED_HEADERS = ['authorization', 'cookie', 'x-api-key'];

const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const { ip, protocol, path, query } = req;
  const host = req.get('host');

  const headers = Object.fromEntries(
    Object.entries(req.headers).map(([k, v]) =>
      REDACTED_HEADERS.includes(k.toLowerCase()) ? [k, '[REDACTED]'] : [k, v]
    )
  );

  console.log(`${timestamp}  ${ip} ${protocol}://${host}${req.originalUrl}`);
  console.log('Headers:', headers);
  console.log('Query:', query);
  console.log('Path:', path);

  next();
};

module.exports = logger;
