'use strict';

module.exports = {
    db: 'mongodb://naveen:naveen@kahana.mongohq.com:10077/testmeanapp',
    app: {
        name: 'Naveen Gogineni'+'+ 's Modern Stack Website'
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
    emailFrom : 'navinhai83@gmail.com', // sender address like ABC <abc@example.com>
    mailer: {
        service: 'https://mail.google.com',
        auth: {
            user: 'navinhai83@gmail.com',
            pass: 'nav!n123'
        }
    }
};

