import { createErrorDescriptor, nameOfTheGlobalVariableForErrorsNamespace, ERROR_NAMESPACING } from './errors/index.js';
import {
  createConstantsDescriptor,
  getEnvValue,
  isEnvTrue,
  nameOfTheGlobalVariableForConstantsNamespace,
  CONSTANTS_NAMESPACING,
} from './constants/index.js';
import executeWithAdminRights from './execute/index.js';

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
