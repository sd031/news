'use strict';

Routes.Controllers = {};

Routes.Controllers.page = RouteController.extend({
  onAfterAction: () => {
    $("html, body").animate({scrollTop:0}, 500, 'swing');
  }
});

Routes.Controllers.news = Routes.Controllers.page.extend({
  onAfterAction: () => {
    Session.set('showComments', false);
  },
  template: 'empty'
});
