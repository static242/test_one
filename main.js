renderHomeView: function() {
    var html =
            "<div class='header'><h1>Home</h1></div>" +
            "<div class='search-view'>" +
            "<input class='search-key'/>" +
            "<ul class='employee-list'></ul>" +
            "</div>"
    $('body').html(html);
    $('.search-key').on('keyup', $.proxy(this.findByName, this));
},

showAlert: function (message, title) {
    if (navigator.notification) {
        navigator.notification.alert(message, null, title, 'OK');
    } else {
        alert(title ? (title + ": " + message) : message);
    }
},

initialize: function() {
    var self = this;
    this.store = new MemoryStore(function() {
        self.showAlert('Store Initialized', 'Info');
        self.renderHomeView();
    });
    $('.search-key').on('keyup', $.proxy(this.findByName, this));
}

