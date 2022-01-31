# hlambda [![npm version](https://badge.fury.io/js/hlambda.svg)](https://www.npmjs.com/package/hlambda )

hlambda - Library containing functions and helpers used in hlambda apps.

[![NPM](https://nodei.co/npm/hlambda.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/hlambda )

## Installation

### npm
```bash
$ npm i hlambda --save
```

### yarn
```bash
$ yarn add hlambda
```

## Example

````javascript
import { executeWithAdminRights, createErrorDescriptor, createConstantsDescriptor, getEnvValue, isEnvTrue } from 'hlambda';
````

````javascript
import { createErrorDescriptor } from 'hlambda';

// --- START SAFE TO EDIT ---
export const errorsGroupName = 'example-hasura-app';

export const errors = {
  FUNCTIONALITY_NOT_IMPLEMENTED: {
    message:
      'Specific functionality is still in development. (It should be available soon, thank you for understanding.)',
  },
  SOMETHING_WENT_TERRIBLY_WRONG: {
    message: 'Description of an error message...',
  },
};
// --- STOP SAFE TO EDIT ---

export const ed = createErrorDescriptor(errors, errorsGroupName);

export default errors;
````
