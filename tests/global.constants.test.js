import * as assert from 'assert';

// Trick to trick Node.js import to load same module multiple times.
import { CONSTANTS_NAMESPACING as INSTANCE1, nameOfTheGlobalVariableForConstantsNamespace } from './../src/index.js';
import { CONSTANTS_NAMESPACING as INSTANCE2 } from './../tests/copyOfIndex.js';

describe('Testing if system will work if there are multiple instances of hlambda package running...', function () {
  describe('Errors', function () {
    it('Different instance should contain the same data that we pass to instance 1', async function () {
      const valueToPassIntoEnv = {
        name: 'CONSTANTS1',
        description: 'desc 1',
      };
      INSTANCE1.push(valueToPassIntoEnv);

      assert.deepEqual(INSTANCE2, [valueToPassIntoEnv]);
    });
    it('Instance should have the same value as the other instance', async function () {
      const valueToPassIntoEnv = {
        name: 'CONSTANTS2',
        description: 'desc 2',
      };
      INSTANCE1.push(valueToPassIntoEnv);

      assert.deepEqual(INSTANCE2, INSTANCE1);
    });
    it('Instance should have the same value as the global variable', async function () {
      const valueToPassIntoEnv = {
        name: 'CONSTANTS3',
        description: 'desc 3',
      };
      INSTANCE1.push(valueToPassIntoEnv);

      assert.deepEqual(INSTANCE1, global[nameOfTheGlobalVariableForConstantsNamespace]);
    });
  });
});
