exports.handler = async function(event, context) {
    // Check if user is authenticated
    const { identity, user } = context.clientContext;
    if (!user || !user.sub) {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: "Unauthorized" })
        };
    }
    
    try {
        // Parse the incoming data
        const data = JSON.parse(event.body);
        const { gameMode, progress } = data;
        
        // Here, you would typically save to a database
        // For example, using Fauna DB, MongoDB, etc.
        // This is just a placeholder response
        
        return {
            statusCode: 200,
            body: JSON.stringify({ 
                message: "Progress saved successfully",
                userId: user.sub,
                gameMode,
                progress
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error saving progress", error: error.message })
        };
    }
}; 