/* eslint-disable */
const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');

const db = require('../src/utils/db');
const app = require('../src/app');
const logger = require('../src/utils/logger');

chai.should();
chai.use(chaiHttp);

before(() => {
    return new Promise((resolve) => {
        db.connection.once('open', () => resolve());
    });
});

describe('API Task', () => {
    describe('Test GET route /api/images/all', () => {
        it('Should return all urls and image names', (done) => {
            logger.info('Getting all Image Documents from DB');
            chai.request(app)
                .get('/api/images/all')
                .end((err, result) => {
                    result.should.have.status(200);
                    result.body.should.be.a('array');
                    result.body.length.should.not.be.eq(0);
                    done();
                });
        });
    });
});
