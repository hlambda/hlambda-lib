import * as assert from 'assert';

import { isEnvTrue, getEnvValue } from './../src/constants/index.js';

describe('Testing get env value helpers', function () {
  describe('getEnvValue', function () {
    it('Should get the value of the env variable', async function () {
      const valueToPassIntoEnv = '123456';
      process.env.TEST_1_VALUE = valueToPassIntoEnv;
      assert.equal(getEnvValue({ name: 'TEST_1_VALUE' }), valueToPassIntoEnv);
    });
  });
  describe('isEnvTrue', function () {
    it('Normal caps `true` string should return boolean true', async function () {
      const valueToPassIntoEnv = 'true';
      process.env.TEST_2_VALUE = valueToPassIntoEnv;
      assert.equal(isEnvTrue({ name: 'TEST_2_VALUE' }), true);
    });
    it('`TrUe` string should return boolean true', async function () {
      const valueToPassIntoEnv = 'TrUe';
      process.env.TEST_3_VALUE = valueToPassIntoEnv;
      assert.equal(isEnvTrue({ name: 'TEST_3_VALUE' }), true);
    });
    it('Normal caps `false` string should return boolean false', async function () {
      const valueToPassIntoEnv = 'false';
      process.env.TEST_4_VALUE = valueToPassIntoEnv;
      assert.equal(isEnvTrue({ name: 'TEST_4_VALUE' }), false);
    });
    it('`fAlSe` string should return boolean false', async function () {
      const valueToPassIntoEnv = 'fAlSe';
      process.env.TEST_5_VALUE = valueToPassIntoEnv;
      assert.equal(isEnvTrue({ name: 'TEST_5_VALUE' }), false);
    });
  });
});
