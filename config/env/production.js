'use strict';

module.exports = {
    db: 'mongodb://naveen:naveen@kahana.mongohq.com:10077/testmeanapp',
    app: {
        name: 'MEAN - A Modern Stack - Production'
    },
    facebook: {
        clientID: '1452371921688100',
        clientSecret: '4fe108e43136768857c03aafcae1b433',
        callbackURL: 'http://navinmeanapp.herokuapp.com/auth/facebook/callback'
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
        callbackURL: 'http://navinmeanapp.herokuapp.com/auth/google/callback'
    },
    linkedin: {
        clientID: 'API_KEY',
        clientSecret: 'SECRET_KEY',
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

