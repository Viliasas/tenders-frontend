function tendersListCtrl() {

}

module.exports = {
    template: require('./tenders-list.html'),
    controller: tendersListCtrl,
    bindings: {
        tenders: '=',
    }
}
