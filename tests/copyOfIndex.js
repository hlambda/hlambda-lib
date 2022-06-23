// This is clone of index.js to craft interesting test.
// The Node.js global variable is hard to test if multiple modules will work as expected

import {
  createErrorDescriptor,
  nameOfTheGlobalVariableForErrorsNamespace,
  ERROR_NAMESPACING,
} from './../src/errors/index.js';
import {
  createConstantsDescriptor,
  getEnvValue,
  isEnvTrue,
  nameOfTheGlobalVariableForConstantsNamespace,
  CONSTANTS_NAMESPACING,
} from './../src/constants/index.js';
import executeWithAdminRights from './../src/execute/index.js';

export {
  executeWithAdminRights,
  createErrorDescriptor,
  createConstantsDescriptor,
  getEnvValue,
  isEnvTrue,
  nameOfTheGlobalVariableForErrorsNamespace,
  nameOfTheGlobalVariableForConstantsNamespace,
  ERROR_NAMESPACING,
  CONSTANTS_NAMESPACING,
};

export default {
  executeWithAdminRights,
  createErrorDescriptor,
  createConstantsDescriptor,
  getEnvValue,
  isEnvTrue,
  nameOfTheGlobalVariableForErrorsNamespace,
  nameOfTheGlobalVariableForConstantsNamespace,
  ERROR_NAMESPACING,
  CONSTANTS_NAMESPACING,
};
