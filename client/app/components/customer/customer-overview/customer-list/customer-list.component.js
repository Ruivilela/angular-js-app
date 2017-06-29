import customerListCtrl from './customer-list.controller.js'; 

module.exports = {
  template: require('./customer-list.html'),
  controller: customerListCtrl,
  bindings: {
    customers: '='
  }
}
