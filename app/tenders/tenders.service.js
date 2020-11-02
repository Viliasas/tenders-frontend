export default class TendersService {

    constructor($http) {
        this.$http = $http;
    }

    getTenders() {
        return {data: [{id: 1, title: 'First tender'}, {id: 2, title: 'Second tender'}]};
        //return this.$http.get(''); // TODO Change this after API is done
    }

}
