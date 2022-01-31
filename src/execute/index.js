import fetch from 'node-fetch';

// Define constants and constants defaults
import { getEnvValue } from './../constants/index.js';

const constants = {
  ENV_HASURA_GRAPHQL_API_ENDPOINT: {
    name: 'HASURA_GRAPHQL_API_ENDPOINT',
    default: '__INSERT_YOUR_HASURA_GRAPHQL_API_ENDPOINT_URL__',
    description: 'Microservice needs this info, in order to have access back to the Hasura GraphQL API.',
  },
  ENV_HASURA_GRAPHQL_ADMIN_SECRET: {
    name: 'HASURA_GRAPHQL_ADMIN_SECRET',
    default: '__INSERT_YOUR_HASURA_SECRET__',
    description: 'Microservice needs this info, in order to have access back to the Hasura GraphQL API.',
  },
};

// This is the function that will be used to interact with the Hasura
const executeWithAdminRights = async (operationsDoc, operationName, variables) => {
  // Get URL and ADMIN secret!
  const HASURA_GRAPHQL_API_ENDPOINT = getEnvValue(constants.ENV_HASURA_GRAPHQL_API_ENDPOINT);
  const HASURA_GRAPHQL_ADMIN_SECRET = getEnvValue(constants.ENV_HASURA_GRAPHQL_ADMIN_SECRET);

  // Make a request
  const result = await fetch(
    `${HASURA_GRAPHQL_API_ENDPOINT}`,
    {
      method: 'POST',
      body: JSON.stringify({
        query: operationsDoc,
        variables,
        operationName,
      }),
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': HASURA_GRAPHQL_ADMIN_SECRET,
      },
    },
  );

  const jsonResult = await result.json()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return undefined;
    });

  // Return JSON
  return jsonResult;
};

export default executeWithAdminRights;
