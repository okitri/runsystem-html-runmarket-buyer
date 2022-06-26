/*=========================================================================================
    File Name: navs.js
    Description: Navigation available in Bootstrap share general markup and styles, from
                the base .nav class to the active and disabled states. Swap modifier
                classes to switch between each style.
    ----------------------------------------------------------------------------------------
    Item Name: RUN System  - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: RUN System
    Author URL: http://www.themeforest.net/user/RUN System
==========================================================================================*/
(function (window, document, $) {
  'use strict';

  // add height to navigation in left tabs according to content area height
  var heightLeft = $('.nav-left + .tab-content').height();

  $('ul.nav-left').height(heightLeft);

  // add height to navigation in right tabs according to content area height
  var heightRight = $('.nav-right + .tab-content').height();

  $('ul.nav-right').height(heightRight);
})(window, document, jQuery);