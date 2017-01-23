import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  // LIST OF ORGS
  this.route('orgs'); //   /orgs

  // INDIVIDUAL ORG
  this.route('org', {path: 'org/:id'}, function() { //  /org

    // LIST OF REPOS
    this.route('repos'); // /org/repos

    // INDIVIDUAL REPO
    this.route('repo', {path: ':repoid'}, function() { // /org/repo
      this.route('contributors'); // /org/repo/contributors
      this.route('issues');
    });
  });
  this.route('notfound', {path: '*path'})
});

export default Router;
