function tenorsListCtrl() {

}

module.exports = {
    template: require('./tenors-list.html'),
    controller: tenorsListCtrl,
    bindings: {
        tenors: '=',
    }
}
