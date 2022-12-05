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
  },
  payment: {
    stripe: {
      publicKey: "pk_test_51M8PBwAawPHCrdJRe2wBTwacicYLurQawtSBrCOrxeV1gZAYKRJfaFm8Sg9AM6biGGqBTQexydBZAeMBoP5LypiD00ZYUMOhMu",
      secretKey: "sk_test_51M8PBwAawPHCrdJRplwU4ECUMfMtXGRPGPkdqbO3rdKxrfAZMX3HU6ODFh50wnR39LPwiK7aB1NqvxeULV7CE1kO00dp4Ik5hH",
      apiVersion: "2022-11-15"
    }
  }
}