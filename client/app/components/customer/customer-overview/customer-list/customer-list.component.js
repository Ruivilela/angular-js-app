function customerListCtrl() {
  console.log(this);
}

module.exports = {
  template: require('./customer-list.html'),
  controller: customerListCtrl,
  bindings: {
    customers: '='
  }
}
