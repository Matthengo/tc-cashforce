const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../api/app');

const USER_PATH = '/user';
const EXISTING_USER_ID = 1;

const STATUS_OK = 200;

describe('Testing /user GET route', () => {
  let getByUserId;
  
  describe('with existing user id param', () => {
    before(async () => {
      getByUserId = await chai.request(app).get(`${USER_PATH}/${EXISTING_USER_ID}`);
    });
  
    it('should return status 200 - Ok', () => {
      const { status } = getByUserId;
      expect(status).to.be.equals(STATUS_OK);
    });
  
    it('should return an Object', () => {
      const { body } = getByUserId;
      expect(body).to.be.an('object')
    });

    it('should have, at least, name and email keys', () => {
      const { body } = getByUserId;
      expect(body).to.include.all.keys('name', 'email')
    });
  })
});