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
        const { userId, gameVersion, progress } = data;
        
        // Validate that the requesting user matches the user ID in the data
        if (user.sub !== userId) {
            return {
                statusCode: 403,
                body: JSON.stringify({ message: "Forbidden: User ID mismatch" })
            };
        }
        
        // Here, you would save to a database
        // For example, using FaunaDB, Firebase, or another database service
        
        // For now, just return success
        return {
            statusCode: 200,
            body: JSON.stringify({ 
                message: "Progress saved successfully",
                userId,
                gameVersion,
                timestamp: new Date().toISOString()
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                message: "Error saving progress", 
                error: error.message 
            })
        };
    }
}; 