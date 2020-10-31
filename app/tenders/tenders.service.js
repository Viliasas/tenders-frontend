export default class TendersService {

    constructor($http) {
        this.$http = $http;
    }

    getTenders() {
        return {data: [{title: 'First tender'}]};
        //return this.$http.get(''); // TODO Change this after API is done
    }

}
