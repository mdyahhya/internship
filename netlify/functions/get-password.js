exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ password: process.env.PASS_MODULES || 'PASS_MODULES' }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  };
};
