import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('work');
  this.route('about');
  this.route('blog');
});

export default Router;
