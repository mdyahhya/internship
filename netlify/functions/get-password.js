exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ password: 'kotlin' }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  };
};
