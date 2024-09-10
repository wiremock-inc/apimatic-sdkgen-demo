/**
 * Train Travel APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Client, Configuration, Environment } from '../src';

export const testClient = new Client(createConfigurationFromEnvironment());

function createConfigurationFromEnvironment(): Partial<Configuration> {
  const config: Partial<Configuration> = {};

  const environment = process.env.TRAIN_TRAVEL_API_LIB_ENVIRONMENT;
  const timeout = process.env.TRAIN_TRAVEL_API_LIB_TIMEOUT;
  const oAuthClientId = process.env.TRAIN_TRAVEL_API_LIB_O_AUTH_CLIENT_ID;
  const oAuthClientSecret = process.env.TRAIN_TRAVEL_API_LIB_O_AUTH_CLIENT_SECRET;
  const oAuthRedirectUri = process.env.TRAIN_TRAVEL_API_LIB_O_AUTH_REDIRECT_URI;

  if (environment !== undefined) {
    config.environment = environment as Environment;
  }

  if (timeout !== undefined && timeout !== '') {
    config.timeout = parseInt(timeout);
  }

  if (
    oAuthClientId !== undefined
    && oAuthClientSecret !== undefined
    && oAuthRedirectUri !== undefined
  ) {
    config.authorizationCodeAuthCredentials = {
      oAuthClientId: oAuthClientId,
      oAuthClientSecret: oAuthClientSecret,
      oAuthRedirectUri: oAuthRedirectUri,
    };
  }

  return config;
}
