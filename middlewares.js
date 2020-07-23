import routes from './routes.js';

export const localsMiddleware = (req, res, next) => (
    res.locals.siteName = "WooTube",
    res.locals.routes = routes,
    next()
)