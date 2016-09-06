/* global describe, it */

'use strict'

const translate = require('../lib/translate')
const expect = require('chai').expect

describe('Translate: ', function () {
  it('Must be translate from `EN` to `FR`', function (done) {
    translate({
      text: 'My name is Brian',
      source: 'en',
      target: 'fr'
    }, function (err, res) {
      if (err) throw err

      expect(res).to.equal('Mon nom est Brian')
      done()
    })
  })

  it('must be tranlated from `FR` to `EN`', function (done) {
    translate({
      text: 'Camion rouge',
      source: 'fr',
      target: 'en'
    }, function (err, res) {
      if (err) throw err

      expect(res).to.equal('red truck')
      done()
    })
  })

  it('must be tranlated from `FR` to `nl`', function (done) {
    translate({
      text: 'tout droit',
      source: 'fr',
      target: 'nl'
    }, function (err, res) {
      if (err) throw err

      expect(res).to.equal('rechtdoor')
      done()
    })
  })
})
