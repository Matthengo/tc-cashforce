const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../api/app');
const { Order } = require('../database/models');

const ORDER_PATH = '/order';
const ORDER_USER_PATH = '/user';
const EXISTING_USER_ID = 1;
const NON_EXISTING_USER_ID = 9999;

const STATUS_OK = 200;

describe('Testing /order/user GET route', () => {
  let getOrderByUserId;

  describe('with existing user id param', () => {
    before(async () => {
      getOrderByUserId = await chai.request(app).get(`${ORDER_PATH}${ORDER_USER_PATH}/${EXISTING_USER_ID}`);
    });
  
    it('should return status 200 - Ok', () => {
      const { status } = getOrderByUserId;
      expect(status).to.be.equals(STATUS_OK);
    });
  
    it('should return an Array', () => {
      const { body } = getOrderByUserId;
      expect(body).to.be.an('array')
    });
  
    it('should returns only that user\'s orders', () => {
      const { body } = getOrderByUserId;
      const everyTrue = body.every((order) => order.userid === EXISTING_USER_ID);
  
      expect(everyTrue).to.be.true;
    });
  
    it('should returns with buyer and provider keys', () => {
      const { body } = getOrderByUserId;
      const everyTrue = body.every((order) => order.buyer && order.provider)

      expect(everyTrue).to.be.true;
    });
  });

  describe('with non existing user id param', () => {
    before(async () => {
      getOrderByUserId = await chai.request(app).get(`${ORDER_PATH}${ORDER_USER_PATH}/${NON_EXISTING_USER_ID}`);
    });

    it('should return an Array', () => {
      const { body } = getOrderByUserId;
      expect(body).to.be.an('array')
    });

    it('should returns an EMPTY array', () => {
      const { body } = getOrderByUserId;
      expect(body).to.deep.equals([]);
    });
  });
});