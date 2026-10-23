import aj from '../config/arcjet.js';

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req);
   if (decision.isDenied()) {
    if(decision.reason.isRateLimit())  res.status(429).send('Too Many Requests'); 
    if(decision.reason.isBot())  res.status(403).send('Forbidden: Bot detected');

    return res.status(403).json({error: 'Request denied by Arcjet', reason: decision.reason.toString()});
  }
  next();
}
    catch (error) {
      console.error('Error evaluating request with Arcjet:', error);
      next(error);
    }
}

export default arcjetMiddleware;