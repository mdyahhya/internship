exports.handler = async (event, context) => {
    // Enable CORS
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
    };

    if (event.httpMethod === "OPTIONS") {
        return { statusCode: 200, headers, body: "" };
    }

    if (event.httpMethod !== "POST") {
        return { statusCode: 405, headers, body: "Method Not Allowed" };
    }

    try {
        const { password } = JSON.parse(event.body);
        const correctPassword = process.env.PASS_MODULES;

        if (!correctPassword) {
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ error: "Server password configuration missing." })
            };
        }

        if (password === correctPassword) {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ success: true })
            };
        } else {
            return {
                statusCode: 401,
                headers,
                body: JSON.stringify({ success: false, error: "Incorrect password." })
            };
        }
    } catch (err) {
        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: "Invalid request body." })
        };
    }
};
