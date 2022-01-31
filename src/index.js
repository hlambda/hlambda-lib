import { createErrorDescriptor } from './errors/index.js';
import { createConstantsDescriptor, getEnvValue, isEnvTrue } from './constants/index.js';
import executeWithAdminRights from './execute/index.js';

export default { executeWithAdminRights, createErrorDescriptor, createConstantsDescriptor, getEnvValue, isEnvTrue };
