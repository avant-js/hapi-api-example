process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const Music = require('../models/music');

const chai = require('chai');
const server = require('../index');
const expect = chai.expect;

describe('Musics', () => {
    beforeEach((done) => {
        Music.remove({}, (err) => {
            done();
        });
    });
    describe('/GET music', () => {
        it('it should GET an empty music list', (done) => {
            const options = {
                method: 'GET',
                url: '/musics'
            };
            server.inject(options).
            then((res) => {
                expect(res).to.have.property('statusCode').eql(200);
                expect(res.result).to.be.a('array');
                expect(res.result.length).to.be.eql(0);
                done();
            }).
            catch((err) => done(err));
        });
    });
    describe('/POST music', () => {
        it('it should POST a music ', (done) => {
            const music = {
                title: 'You shook me all night long',
                artist: 'ACDC',
                album: 'Back In Black'
            };
            const options = {
                method: 'POST',
                url: '/musics',
                payload: music
            };
            server.inject(options).
            then((res) => {
                const data = res.result;
                expect(res).to.have.property('statusCode').eql(200);
                expect(data).to.be.a('object');
                expect(data).to.include(music);
                done();
            }).
            catch((err) => done(err));
        });
    });
});