/**
 * Fichero con la especificación de las pruebas TDD para callback.js
 * Este fichero DEBE llamarse server-spec.js
 * Este fichero DEBE ubicarse en el subdirectorio spec/
 */


const request = require('supertest');
const app = require('../server');

describe('SERVER', () => {
  describe('REST API v1', () => {
    it('Devuelve Personas home', (done) => {
      request(app)
        .get('/personas')
        .expect(200)
        .expect('Content-Type', 'text/html; charset=utf-8')
        .end(function (error, res){
          if (error) return done.fail(error);
          expect(res.text).toEqual("Microservicio Personas: home page")
          done();
        });
    });
    it('Devuelve Personas about', (done) => {
      request(app)
        .get('/personas/about')
        .expect(200)
        .expect('Content-Type', 'text/html; charset=utf-8')
        .end(function (error, res){
          if (error) return done.fail(error);
          expect(res.text).toEqual("Microservicio Personas: about page")
          done();
        });
    })
  })
});
