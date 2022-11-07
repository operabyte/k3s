'use strict';

const DOMAIN = 'bleme.fr';

module.exports = {
  server: {
    host: '0.0.0.0',
    port: 80
  },
  payment: {
    host:     'http://api-payment.bleme.svc.cluster.local',
    port: 80
  },
  database: {
    client: 'pg',
    version: '15',
    connection: {
      host:     'postgres.bleme.svc.cluster.local', // postgres = 10.43.200.200
      database: 'postgres',
      user:     'postgres',
      password: 'postgres',
      port:     5432
    }
  },
  strategies: {
    account: {
      name: 'account',
      cookie: {
        name: 'auth',
        domain: DOMAIN,
        password: 'password-should-be-32-characters',
        isSecure: false
      }
    },
    adherent: {
      name: 'adherent',
      cookie: {
        name: 'adherent',
        domain: DOMAIN,
        password: 'password-should-be-32-characters',
        isSecure: false
      }
      
    }
  }
}