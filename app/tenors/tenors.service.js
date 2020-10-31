export default class TenorsService {

    constructor($http) {
        this.$http = $http;
    }

    getTenors() {
        return {data: [{title: 'First tenor'}]};
        //return this.$http.get(''); // TODO Change this after API is done
    }

}
