export default class CustomerService {
  constructor($http) {
    this.$http = $http
  }

  getCustomer() {
    return this.$http.get('http://localhost:8000/api/Customers')
  }
}
