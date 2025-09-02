export const environment = {
    production: false,
    apiUrl: process.env['API_URL'],
    signInRedirectUrl: process.env['VERCEL_URL'],
    clientID: process.env['ASGARDEO_CLIENT_ID'],
    baseUrl: process.env['ASGARDEO_BASE_URL'],
    scope: ['openid', 'profile']
};
