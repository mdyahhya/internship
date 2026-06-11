exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ password: '#FlutterJavascript' }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  };
};
