'use strict';

module.exports = {
  bind: {
    host: '0.0.0.0',
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
  }
}