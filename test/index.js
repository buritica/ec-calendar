import EcCalendar from '../lib/'
import chai from 'chai'
import _ from 'lodash'

var expect = chai.expect
var calendar = new EcCalendar('SM15')

describe('Seasons @unit', function () {
  describe('Years', function () {
    it('should have `2011`', function () {
      expect(calendar.years).to.contain(2011)
    })

    it('should have `2012`', function () {
      expect(calendar.years).to.contain(2012)
    })

    it('should have `2013`', function () {
      expect(calendar.years).to.contain(2013)
    })

    it('should have `2014`', function () {
      expect(calendar.years).to.contain(2014)
    })

    it('should have this year', function () {
      var thisYear = new Date().getFullYear()
      expect(calendar.years).to.contain(thisYear)
    })

    it('should have next year', function () {
      var nextYear = new Date().getFullYear() + 1
      expect(calendar.years).to.contain(nextYear)
    })
  })

  // winter sept 15, dec 1
  // spring dec 15, march 1
  // summer march 15, june 1
  // fall june 15, sept 1

  describe('Seasons', function () {
    context('shirt winter 2011', function () {
      beforeEach(function () {
        this.season = calendar.findSeason('WN11')
      })

      it('should have id:WN11', function () {
        expect(this.season).to.be.ok
      })

      it('should have title:Winter 2011', function () {
        expect(this.season).to.have.property('title', 'Winter 2011')
      })

      it('should have charge date: Sept 15 2011', function () {
        var month = 8
        var day = 15
        var year = 2011
        var date = new Date(year, month, day)

        expect(this.season.dates.charge.getTime()).to.equal(date.getTime())
        expect(this.season.dates.charge.toString()).to.contain('Sep')
      })

      it('should have ship date: Dec 1 2011', function () {
        var month = 11
        var day = 1
        var year = 2011
        var date = new Date(year, month, day)

        expect(this.season.dates.ship.getTime()).to.equal(date.getTime())
        expect(this.season.dates.ship.toString()).to.contain('Dec')
      })

      it('should have inStoreDate: Jul 1 2011', function () {
        var month = 6
        var day = 1
        var year = 2011
        var date = new Date(year, month, day)

        expect(this.season.dates.inStore.getTime()).to.equal(date.getTime())
        expect(this.season.dates.inStore.toString()).to.contain('Jul')
      })

      it('should have kind: winter', function () {
        expect(this.season).to.have.property('kind', 'winter')
      })

      it('should have year: 2011', function () {
        expect(this.season).to.have.property('year', 2011)
      })

      it('should have code: WN', function () {
        expect(this.season).to.have.property('code', 'WN')
      })

      it('should start in: Jul 1', function () {
        expect(this.season.startDate.toString()).to.contain('Jul 01')
      })
    })

    context('suit winter 2011', function () {
      beforeEach(function () {
        this.season = calendar.findSeason('WN11', 'suit')
      })

      it('should have id:WN11', function () {
        expect(this.season).to.be.ok
      })

      it('should have title:Winter 2011', function () {
        expect(this.season).to.have.property('title', 'Winter 2011')
      })

      it('should have charge date: Sept 15 2011', function () {
        var month = 8
        var day = 15
        var year = 2011
        var date = new Date(year, month, day)

        expect(this.season.dates.charge.getTime()).to.equal(date.getTime())
        expect(this.season.dates.charge.toString()).to.contain('Sep')
      })

      it('should have ship date: Dec 1 2011', function () {
        var month = 11
        var day = 1
        var year = 2011
        var date = new Date(year, month, day)

        expect(this.season.dates.ship.getTime()).to.equal(date.getTime())
        expect(this.season.dates.ship.toString()).to.contain('Dec')
      })

      it('should have inStoreDate: Apr 1 2011', function () {
        var month = 3
        var day = 1
        var year = 2011
        var date = new Date(year, month, day)

        expect(this.season.dates.inStore.getTime()).to.equal(date.getTime())
        expect(this.season.dates.inStore.toString()).to.contain('Apr')
      })

      it('should have kind: winter', function () {
        expect(this.season).to.have.property('kind', 'winter')
      })

      it('should have year: 2011', function () {
        expect(this.season).to.have.property('year', 2011)
      })

      it('should have code: WN', function () {
        expect(this.season).to.have.property('code', 'WN')
      })

      it('should start in: Apr 1', function () {
        expect(this.season.startDate.toString()).to.contain('Apr 01')
      })
    })

    context('shirt spring 2012', function () {
      beforeEach(function () {
        this.season = calendar.findSeason('SP12')
      })

      it('should have id:SP12', function () {
        expect(this.season).to.be.ok
      })

      it('should have title:Spring 2012', function () {
        expect(this.season).to.have.property('title', 'Spring 2012')
      })

      it('should have chargeDate: Dec 15 2011', function () {
        var month = 11
        var day = 15
        var year = 2011
        var date = new Date(year, month, day)

        expect(this.season.dates.charge.getTime()).to.equal(date.getTime())
        expect(this.season.dates.charge.toString()).to.contain('Dec')
      })

      it('should have shipDate: March 1 2012', function () {
        var month = 2
        var day = 1
        var year = 2012
        var date = new Date(year, month, day)

        expect(this.season.dates.ship.getTime()).to.equal(date.getTime())
        expect(this.season.dates.ship.toString()).to.contain('Mar')
      })

      it('should have inStoreDate: Oct 1 2012', function () {
        var month = 9
        var day = 1
        var year = 2011
        var date = new Date(year, month, day)

        expect(this.season.dates.inStore.getTime()).to.equal(date.getTime())
        expect(this.season.dates.inStore.toString()).to.contain('Oct')
      })

      it('should have kind: spring', function () {
        expect(this.season).to.have.property('kind', 'spring')
      })

      it('should have year: 2012', function () {
        expect(this.season).to.have.property('year', 2012)
      })

      it('should have code: SP', function () {
        expect(this.season).to.have.property('code', 'SP')
      })

      it('should start in: Oct 1', function () {
        expect(this.season.startDate.toString()).to.contain('Oct 01')
      })
    })

    context('shirt summer 2012', function () {
      beforeEach(function () {
        this.season = calendar.findSeason('SM12')
      })

      it('should have id:SM12', function () {
        expect(this.season).to.be.ok
      })

      it('should have title:Summer 2012', function () {
        expect(this.season).to.have.property('title', 'Summer 2012')
      })

      it('should have chargeDate: March 15 2012', function () {
        var month = 2
        var day = 15
        var year = 2012
        var date = new Date(year, month, day)

        expect(this.season.dates.charge.getTime()).to.equal(date.getTime())
        expect(this.season.dates.charge.toString()).to.contain('Mar')
      })

      it('should have shipDate: June 1 2012', function () {
        var month = 5
        var day = 1
        var year = 2012
        var date = new Date(year, month, day)

        expect(this.season.dates.ship.getTime()).to.equal(date.getTime())
        expect(this.season.dates.ship.toString()).to.contain('Jun')
      })

      it('should have inStoreDate: Jan 1 2012', function () {
        var month = 0
        var day = 1
        var year = 2012
        var date = new Date(year, month, day)

        expect(this.season.dates.inStore.getTime()).to.equal(date.getTime())
        expect(this.season.dates.inStore.toString()).to.contain('Jan')
      })

      it('should have kind: summer', function () {
        expect(this.season).to.have.property('kind', 'summer')
      })

      it('should have year: 2012', function () {
        expect(this.season).to.have.property('year', 2012)
      })

      it('should have code: SM', function () {
        expect(this.season).to.have.property('code', 'SM')
      })

      it('should start in: Jan 1', function () {
        expect(this.season.startDate.toString()).to.contain('Jan 01')
      })
    })

    context('suit summer 2012', function () {
      beforeEach(function () {
        this.season = calendar.findSeason('SM12', 'suit')
      })

      it('should have id:SM12', function () {
        expect(this.season).to.be.ok
      })

      it('should have title:Summer 2012', function () {
        expect(this.season).to.have.property('title', 'Summer 2012')
      })

      it('should have chargeDate: March 15 2012', function () {
        var month = 2
        var day = 15
        var year = 2012
        var date = new Date(year, month, day)

        expect(this.season.dates.charge.getTime()).to.equal(date.getTime())
        expect(this.season.dates.charge.toString()).to.contain('Mar')
      })

      it('should have shipDate: June 1 2012', function () {
        var month = 5
        var day = 1
        var year = 2012
        var date = new Date(year, month, day)

        expect(this.season.dates.ship.getTime()).to.equal(date.getTime())
        expect(this.season.dates.ship.toString()).to.contain('Jun')
      })

      it('should have inStoreDate: Oct 1 2011', function () {
        var month = 9
        var day = 1
        var year = 2011
        var date = new Date(year, month, day)

        expect(this.season.dates.inStore.getTime()).to.equal(date.getTime())
        expect(this.season.dates.inStore.toString()).to.contain('Oct')
      })

      it('should have kind: summer', function () {
        expect(this.season).to.have.property('kind', 'summer')
      })

      it('should have year: 2012', function () {
        expect(this.season).to.have.property('year', 2012)
      })

      it('should have code: SM', function () {
        expect(this.season).to.have.property('code', 'SM')
      })

      it('should start in: Oct 1', function () {
        expect(this.season.startDate.toString()).to.contain('Oct 01')
      })
    })

    context(' shirt fall 2012', function () {
      beforeEach(function () {
        this.season = calendar.findSeason('FA12')
      })

      it('should have id:FA12', function () {
        expect(this.season).to.be.ok
      })

      it('should have title:Fall 2012', function () {
        expect(this.season).to.have.property('title', 'Fall 2012')
      })

      it('should have chargeDate: June 15 2012', function () {
        var month = 5
        var day = 15
        var year = 2012
        var date = new Date(year, month, day)

        expect(this.season.dates.charge.getTime()).to.equal(date.getTime())
        expect(this.season.dates.charge.toString()).to.contain('Jun')
      })

      it('should have shipDate: Sept 1 2012', function () {
        var month = 8
        var day = 1
        var year = 2012
        var date = new Date(year, month, day)

        expect(this.season.dates.ship.getTime()).to.equal(date.getTime())
        expect(this.season.dates.ship.toString()).to.contain('Sep')
      })

      it('should have inStoreDate: Apr 1 2012', function () {
        var month = 3
        var day = 1
        var year = 2012
        var date = new Date(year, month, day)

        expect(this.season.dates.inStore.getTime()).to.equal(date.getTime())
        expect(this.season.dates.inStore.toString()).to.contain('Apr')
      })

      it('should have kind: fall', function () {
        expect(this.season).to.have.property('kind', 'fall')
      })

      it('should have year: 2012', function () {
        expect(this.season).to.have.property('year', 2012)
      })

      it('should have code: FA', function () {
        expect(this.season).to.have.property('code', 'FA')
      })

      it('should start in: Apr 1', function () {
        expect(this.season.startDate.toString()).to.contain('Apr 01')
      })
    })

    context('shirt winter 2012', function () {
      beforeEach(function () {
        this.season = calendar.findSeason('WN12')
      })

      it('should have id:WN12', function () {
        expect(this.season).to.be.ok
      })

      it('should have title:Winter 2012', function () {
        expect(this.season).to.have.property('title', 'Winter 2012')
      })

      it('should have chargeDate: Sept 15 2012', function () {
        var month = 8
        var day = 15
        var year = 2012
        var date = new Date(year, month, day)

        expect(this.season.dates.charge.getTime()).to.equal(date.getTime())
        expect(this.season.dates.charge.toString()).to.contain('Sep')
      })

      it('should have shipDate: Dec 1 2012', function () {
        var month = 11
        var day = 1
        var year = 2012
        var date = new Date(year, month, day)

        expect(this.season.dates.ship.getTime()).to.equal(date.getTime())
        expect(this.season.dates.ship.toString()).to.contain('Dec')
      })

      it('should have inStoreDate: Jul 1 2012', function () {
        var month = 6
        var day = 1
        var year = 2012
        var date = new Date(year, month, day)

        expect(this.season.dates.inStore.getTime()).to.equal(date.getTime())
        expect(this.season.dates.inStore.toString()).to.contain('Jul')
      })

      it('should have kind: winter', function () {
        expect(this.season).to.have.property('kind', 'winter')
      })

      it('should have year: 2012', function () {
        expect(this.season).to.have.property('year', 2012)
      })

      it('should have code: WN', function () {
        expect(this.season).to.have.property('code', 'WN')
      })

      it('should start in: Jul 1', function () {
        expect(this.season.startDate.toString()).to.contain('Jul 01')
      })
    })

    context('suit winter 2012', function () {
      beforeEach(function () {
        this.season = calendar.findSeason('WN12', 'suit')
      })

      it('should have id:WN12', function () {
        expect(this.season).to.be.ok
      })

      it('should have title:Winter 2012', function () {
        expect(this.season).to.have.property('title', 'Winter 2012')
      })

      it('should have chargeDate: Sept 15 2012', function () {
        var month = 8
        var day = 15
        var year = 2012
        var date = new Date(year, month, day)

        expect(this.season.dates.charge.getTime()).to.equal(date.getTime())
        expect(this.season.dates.charge.toString()).to.contain('Sep')
      })

      it('should have shipDate: Dec 1 2012', function () {
        var month = 11
        var day = 1
        var year = 2012
        var date = new Date(year, month, day)

        expect(this.season.dates.ship.getTime()).to.equal(date.getTime())
        expect(this.season.dates.ship.toString()).to.contain('Dec')
      })

      it('should have inStoreDate: Apr 1 2012', function () {
        var month = 3
        var day = 1
        var year = 2012
        var date = new Date(year, month, day)

        expect(this.season.dates.inStore.getTime()).to.equal(date.getTime())
        expect(this.season.dates.inStore.toString()).to.contain('Apr')
      })

      it('should have kind: winter', function () {
        expect(this.season).to.have.property('kind', 'winter')
      })

      it('should have year: 2012', function () {
        expect(this.season).to.have.property('year', 2012)
      })

      it('should have code: WN', function () {
        expect(this.season).to.have.property('code', 'WN')
      })

      it('should start in: Apr 1', function () {
        expect(this.season.startDate.toString()).to.contain('Apr 01')
      })
    })

    context('shirt winter 2015', function () {
      beforeEach(function () {
        var calendar = new EcCalendar('WN15')
        this.season = calendar.upcomingShirtSeason
      })

      it('next season should be spring and should be charged this year 2015', function () {
        expect(this.season.dates.charge.getFullYear()).to.equal(2015)
        expect(this.season.dates.charge.getMonth()).to.equal(11)
      })
    })

    context('suit winter 2015', function () {
      beforeEach(function () {
        var calendar = new EcCalendar('WN15')
        this.season = calendar.upcomingSuitSeason
      })

      it('next season should be summer and should be charged the next year 2016', function () {
        expect(this.season.dates.charge.getFullYear()).to.equal(2016)
        expect(this.season.dates.charge.getMonth()).to.equal(2)
      })
    })

    describe('seasons per year', function () {
      var years = calendar.years
      var seasons = [
        {
          kind: 'spring',
          code: 'SP'
        },
        {
          kind: 'summer',
          code: 'SM'
        },
        {
          kind: 'fall',
          code: 'FA'
        },
        {
          kind: 'winter',
          code: 'WN'
        }
      ]

      years.forEach(function (year) {
        seasons.forEach(function (season) {
          it('has `' + season.kind + '` season for `' + year + '`', function () {
            var current = _.find(calendar.seasons, {
              kind: season.kind,
              year: year
            })
            var code = season.code + (year - 2000)
            expect(current).to.have.property('id', code)
          })
        })
      })
    })

    describe('shirt spring 2017', function () {
      beforeEach(function () {
        this.season = calendar.findSeason('SP17')
      })

      it('inStore date of 2017 should be 2016', function () {
        var month = 9
        var day = 1
        var year = 2016
        var date = new Date(year, month, day)

        expect(this.season.dates.inStore.getTime()).to.equal(date.getTime())
        expect(this.season.dates.inStore.toString()).to.contain('Oct')
      })
    })

    describe('suit summer 2017', function () {
      beforeEach(function () {
        this.season = calendar.findSeason('SM17', 'suit')
      })

      it('inStore date of 2017 should be 2016', function () {
        var month = 9
        var day = 1
        var year = 2016
        var date = new Date(year, month, day)

        expect(this.season.dates.inStore.getTime()).to.equal(date.getTime())
        expect(this.season.dates.inStore.toString()).to.contain('Oct')
      })
    })
  })

  describe('active shirt season', function () {
    it('returns active shirt season WN', function () {
      var calendar = new EcCalendar('WN11')
      var wn11 = calendar.findSeason('WN11')

      expect(wn11.id).to.equal('WN11')
      expect(calendar.activeShirtSeason).to.equal(wn11)
    })

    it('returns active shirt season SP', function () {
      var calendar = new EcCalendar('SP11')
      var sp11 = calendar.findSeason('SP11')

      expect(sp11.id).to.equal('SP11')
      expect(calendar.activeShirtSeason).to.equal(sp11)
    })
  })

  describe('active suit season', function () {
    it('returns active suit season WN', function () {
      var calendar = new EcCalendar('WN17')
      var wn17 = calendar.findSuitSeason('WN17')

      expect(calendar.activeSuitSeason).to.equal(wn17)
    })

    it('returns active suit season FA', function () {
      var calendar = new EcCalendar('FA17')
      var wn17 = calendar.findSuitSeason('WN17')

      expect(calendar.activeSuitSeason).to.equal(wn17)
    })

    it('returns active suit season SP', function () {
      var calendar = new EcCalendar('SP17')
      var sm17 = calendar.findSuitSeason('SM17')

      expect(calendar.activeSuitSeason).to.equal(sm17)
    })

    it('returns active suit season SM', function () {
      var calendar = new EcCalendar('SM17')
      var sm17 = calendar.findSuitSeason('SM17')

      expect(calendar.activeSuitSeason).to.equal(sm17)
    })
  })

  describe('upcoming shirt season', function () {
    it('returns `SM12` as upcoming season from `SP12`', function () {
      var calendar = new EcCalendar('SP12')
      var sm12 = calendar.findSeason('SM12')

      expect(sm12.id).to.equal('SM12')
      expect(calendar.upcomingShirtSeason).to.equal(sm12)
    })

    it('returns `FA12` as upcoming season from `SM12`', function () {
      var calendar = new EcCalendar('SM12')
      var sm12 = calendar.findSeason('FA12')

      expect(sm12.id).to.equal('FA12')
      expect(calendar.upcomingShirtSeason).to.equal(sm12)
    })

    it('returns `WN16` as upcoming season from `FA16`', function () {
      var calendar = new EcCalendar('FA16')
      var wn16 = calendar.findSeason('WN16')

      expect(wn16.id).to.equal('WN16')
      expect(calendar.upcomingShirtSeason).to.equal(wn16)
    })

    it('returns `SP17` as upcoming season from `WN16`', function () {
      var calendar = new EcCalendar('WN16')
      var sp17 = calendar.findSeason('SP17')

      expect(sp17.id).to.equal('SP17')
      expect(calendar.upcomingShirtSeason).to.equal(sp17)
    })
  })

  describe('upcoming suit season', function () {
    it('returns `WN12` as upcoming season from `SP12`', function () {
      var calendar = new EcCalendar('SP12')
      var wn12 = calendar.findSuitSeason('WN12')

      expect(wn12.id).to.equal('WN12')
      expect(calendar.upcomingSuitSeason).to.equal(wn12)
    })

    it('returns `WN12` as upcoming season from `SM12`', function () {
      var calendar = new EcCalendar('SM12')
      var wn12 = calendar.findSuitSeason('WN12')

      expect(wn12.id).to.equal('WN12')
      expect(calendar.upcomingSuitSeason).to.equal(wn12)
    })

    it('returns `SM17` as upcoming season from `FA16`', function () {
      var calendar = new EcCalendar('FA16')
      var sm16 = calendar.findSuitSeason('SM17')

      expect(sm16.id).to.equal('SM17')
      expect(calendar.upcomingSuitSeason).to.equal(sm16)
    })

    it('returns `SM17` as upcoming season from `WN16`', function () {
      var calendar = new EcCalendar('WN16')
      var sm17 = calendar.findSuitSeason('SM17')

      expect(sm17.id).to.equal('SM17')
      expect(calendar.upcomingSuitSeason).to.equal(sm17)
    })
  })

  describe('previous shirt season', function () {
    it('returns `WN16` as previous season from `SP17`', function () {
      var calendar = new EcCalendar('SP17')
      var wn16 = calendar.findSeason('WN16')

      expect(wn16.id).to.equal('WN16')
      expect(calendar.previousShirtSeason).to.equal(wn16)
    })

    it('returns `SP17` as previous season from `SM17`', function () {
      var calendar = new EcCalendar('SM17')
      var sp17 = calendar.findSeason('SP17')

      expect(sp17.id).to.equal('SP17')
      expect(calendar.previousShirtSeason).to.equal(sp17)
    })

    it('returns `SM17` as previous season from `FA17`', function () {
      var calendar = new EcCalendar('FA17')
      var sm17 = calendar.findSeason('SM17')

      expect(sm17.id).to.equal('SM17')
      expect(calendar.previousShirtSeason).to.equal(sm17)
    })

    it('returns `FA17` as previous season from `WN17`', function () {
      var calendar = new EcCalendar('WN17')
      var fa17 = calendar.findSeason('FA17')

      expect(fa17.id).to.equal('FA17')
      expect(calendar.previousShirtSeason).to.equal(fa17)
    })
  })

  describe('previous suit season', function () {
    it('returns `WN16` as previous season from `SP17`', function () {
      var calendar = new EcCalendar('SP17')
      var wn16 = calendar.findSuitSeason('WN16')

      expect(wn16.id).to.equal('WN16')
      expect(calendar.previousSuitSeason).to.equal(wn16)
    })

    it('returns `WN16` as previous season from `SM17`', function () {
      var calendar = new EcCalendar('SM17')
      var wn16 = calendar.findSuitSeason('WN16')

      expect(wn16.id).to.equal('WN16')
      expect(calendar.previousSuitSeason).to.equal(wn16)
    })

    it('returns `SM17` as previous season from `FA17`', function () {
      var calendar = new EcCalendar('FA17')
      var sm17 = calendar.findSuitSeason('SM17')

      expect(sm17.id).to.equal('SM17')
      expect(calendar.previousSuitSeason).to.equal(sm17)
    })

    it('returns `SM17` as previous season from `WN17`', function () {
      var calendar = new EcCalendar('WN17')
      var sm17 = calendar.findSuitSeason('SM17')

      expect(sm17.id).to.equal('SM17')
      expect(calendar.previousSuitSeason).to.equal(sm17)
    })
  })

  describe('findSeason', function () {
    it('returns `FA11`', function () {
      var season = calendar.findSeason('FA11')
      expect(season.id).to.equal('FA11')
    })
  })

  describe('findSuitSeason', function () {
    it('returns `WN11`', function () {
      var season = calendar.findSuitSeason('FA11')
      expect(season.id).to.equal('WN11')
    })
  })
})
