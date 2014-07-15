'use strict';

module.exports = {
    db: 'mongodb://localhost/mean-test',
    port: 3001,
    app: {
        name: 'MEAN - A Modern Stack - Test'
    },
    facebook: {
        clientID: '1452371921688100',
        clientSecret: '4fe108e43136768857c03aafcae1b433',
        callbackURL: 'http://localhost:3001/auth/facebook/callback'
    },
    twitter: {
        clientID: 'CONSUMER_KEY',
        clientSecret: 'CONSUMER_SECRET',
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    },
    github: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
        clientID: '938514532632-5gjceoo8is66j67rd8kb01im3v7rcnia.apps.googleusercontent.com',
        clientSecret: '8ZfDd8Yba-EITasxsEXSjwpZ',
        callbackURL: 'http://localhost:3001/auth/google/callback'
    },
    linkedin: {
        clientID: 'API_KEY',
        clientSecret: '8ZfDd8Yba-EITasxsEXSjwpZ',
        callbackURL: 'http://localhost:3000/auth/linkedin/callback'
    },
    emailFrom : 'SENDER EMAIL ADDRESS', // sender address like ABC <abc@example.com>
    mailer: {
        service: 'SERVICE_PROVIDER',
        auth: {
            user: 'EMAIL_ID',
            pass: 'PASSWORD'
        }
    }
};
