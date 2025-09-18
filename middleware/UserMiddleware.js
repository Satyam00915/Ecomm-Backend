import jwt from 'jsonwebtoken';
export const AuthUserMiddleware = (req, res, next) => {
    const USER_API_KEY = process.env.USER_API_KEY;
    if (!USER_API_KEY) {
        return res.status(500).json({
            error: 'Server Error',
            message: 'User API key is not configured'
        });
    }
    const apiKey = req.headers.authorization?.replace('Bearer ', '') || 
                 req.headers['apikey'] || 
                 req.query.api_key;

    if (!apiKey || apiKey !== USER_API_KEY) {
    return res.status(401).json({ 
      error: 'Unauthorized', 
      message: 'Invalid or missing API key' 
    });
    }

  next();

}


export const UserMiddleware = (req, res, next) => {

  const USER_API_KEY = process.env.USER_API_KEY;
  if (!USER_API_KEY) {
      return res.status(500).json({
          error: 'Server Error',
          message: 'User API key is not configured'
      });
  }
  const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET; // Use environment variable in production
  
  // Extract API Key
  const apiKey = req.headers.authorization?.replace('Bearer ', '') || 
                 req.headers['apikey'] || 
                 req.query.api_key;

  // Extract JWT Token
  const token = req.headers['token'] || 
                req.headers['authorization']?.replace('Bearer ', '') ||
                req.query.token;

  // Check if both API key and token are provided
  if (!apiKey) {
    return res.status(401).json({ 
      error: 'Unauthorized', 
      message: 'API key is required' 
    });
  }

  if (!token) {
    return res.status(401).json({ 
      error: 'Unauthorized', 
      message: 'Auth token is required' 
    });
  }

  // Validate API Key
  if (apiKey !== USER_API_KEY) {
    return res.status(403).json({ 
      error: 'Forbidden', 
      message: 'Invalid API key' 
    });
  }

  // Validate JWT Token
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
  } catch (error) {
    return res.status(403).json({ 
      error: 'Forbidden', 
      message: 'Invalid or expired token' 
    });
  }

  // Both validations passed
  req.apiKey = apiKey;
  next();
}

