// export { default as constants } from './constants.js';
export { default as getEnvValue } from './getEnvValue.js';
export { default as isEnvTrue } from './isEnvTrue.js';

export const constantsObjectEnahancer = (
  CONSTANTS_IN,
  MICROSERVICE_NAME,
  overrideByReference = true,
  implementToStringPrototype = true
) => {
  const NEW_CONSTANTS = Object.keys(CONSTANTS_IN).reduce((acc, key, index) => {
    const object = CONSTANTS_IN[key];
    // Attach code to the error object as extension that Hasura supports
    acc[key] = {
      ...object,
      code: key, // Disabled for now.
      path: `$.${MICROSERVICE_NAME}.${key}`,
    };

    if (overrideByReference) {
      // Hack to enhance original object also! Through the reference
      // eslint-disable-next-line no-param-reassign
      CONSTANTS_IN[key] = {
        ...object,
        code: key, // Disabled for now.
        path: `$.${MICROSERVICE_NAME}.${key}`,
      };

      if (implementToStringPrototype) {
        // eslint-disable-next-line no-param-reassign
        CONSTANTS_IN[key].toString = function messageToString() {
          return JSON.stringify(this);
          // return JSON.stringify(this, null, 2);
        };
      }
    }

    return acc;
  }, {});

  return NEW_CONSTANTS;
};

export const CONSTANTS_NAMESPACING = [];

export const createConstantsDescriptor = (NORMAL_CONSTANTS_OBJECT, MICROSERVICE_NAME = '') => {
  const enhacnedConstants = constantsObjectEnahancer(NORMAL_CONSTANTS_OBJECT, MICROSERVICE_NAME);

  CONSTANTS_NAMESPACING.push({
    microservice_name: MICROSERVICE_NAME,
    constants: enhacnedConstants,
  });

  return enhacnedConstants;
};
