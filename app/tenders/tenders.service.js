export default class TendersService {

    constructor($http) {
        this.$http = $http;
    }

    getTenders() {
        return {data: [{id: 1, title: 'First tender'}, {id: 2, title: 'Second tender'}]};
        //return this.$http.get(''); // TODO Change this after API is done
    }

    getTender(tenderId) {
        return {data: {id: 1, title: 'First tender', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tortor neque. In viverra quam id consectetur semper. Sed elementum elit vel massa ornare, nec porta turpis varius. Aliquam gravida enim non arcu vehicula, id pretium est imperdiet. Nullam pretium eget eros eget venenatis. Aliquam ornare molestie ornare. Phasellus vitae auctor metus. Proin mi felis, dignissim vitae risus quis, commodo varius massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum mauris eros, volutpat ac arcu in, euismod cursus quam. Mauris eu ornare leo. Vivamus rhoncus massa vel dolor sollicitudin, sit amet euismod ipsum maximus.'}};
        //return this.$http.get(''); // TODO Change this after API is done
    }

}
