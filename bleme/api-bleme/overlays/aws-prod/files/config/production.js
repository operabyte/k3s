'use strict';

const domain = 'bleme.fr';

module.exports = {
  domain,
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
      host:     'postgres.bleme.svc.cluster.local',
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
        ttl: 1000 * 60 * 60 * 24 * 7 * 2,
        isSecure: true,
        isHttpOnly: true,
        encoding: 'iron'
      }
    },
    adherent: {
      name: 'adherent',
      cookie: {
        name: 'adherent',
        ttl: 1000 * 60 * 60 * 24 * 7 * 2,
        isSecure: true,
        isHttpOnly: true,
        encoding: 'iron'
      }
    }
  }
}