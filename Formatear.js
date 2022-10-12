//Utiliza capitalización  
//Mal hecho:

var DAYS_IN_WEEK1 = 7;
const daysInMonth = 30;

var songs1 = ['Back In Black', 'Stairway to Heaven', 'Hey Jude'];
const Artists = ['ACDC', 'Led Zeppelin', 'The Beatles'];

function eraseDatabase1() {}
function restore_database() {}

class animal {}
class Alpaca1 {}
//Bien hecho:

const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 30;

const songs = ['Back In Black', 'Stairway to Heaven', 'Hey Jude'];
const artists = ['ACDC', 'Led Zeppelin', 'The Beatles'];

function eraseDatabase() {}
function restoreDatabase() {}

class Animal {}
class Alpaca {}

//Los llamadores y llamantes de las funciones deben existir cerca
//Mal hecho:

class PerformanceReview {
    constructor(employee) {
      this.employee = employee;
    }
  
    lookupPeers() {
      return db.lookup(this.employee, 'peers');
    }
  
    lookupManager() {
      return db.lookup(this.employee, 'manager');
    }
  
    getPeerReviews() {
      const peers = this.lookupPeers();
      // ...
    }
  
    perfReview() {
      this.getPeerReviews();
      this.getManagerReview();
      this.getSelfReview();
    }
  
    getManagerReview() {
      const manager = this.lookupManager();
    }
  
    getSelfReview() {
      // ...
    }
  }
  
  var review = new PerformanceReview(user);
  review.perfReview();
  //Bien hecho:
  
  class PerformanceReview {
    constructor(employee) {
      this.employee = employee;
    }
  
    perfReview() {
      this.getPeerReviews();
      this.getManagerReview();
      this.getSelfReview();
    }
  
    getPeerReviews() {
      const peers = this.lookupPeers();
      // ...
    }
  
    lookupPeers() {
      return db.lookup(this.employee, 'peers');
    }
  
    getManagerReview() {
      const manager = this.lookupManager();
    }
  
    lookupManager() {
      return db.lookup(this.employee, 'manager');
    }
  
    getSelfReview() {
      // ...
    }
  }
  
  const review = new PerformanceReview(employee);
  review.perfReview();