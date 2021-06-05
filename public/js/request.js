function HttpRequest() {
    this.csrf = function () {
        let token = $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        return token;
    };
    this.countDashboard = function () {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/count/dashboard',
                method: 'get',
            });
        } catch (err) {
            console.log(err)
        };
    }
    this.getItem = function () {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/item/get',
                method: 'get',
            });
        } catch (err) {
            console.log(err)
        };
    }
    this.getSingleItem = function (id) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/item/get/'+id,
                method: 'get',
            });
        } catch (err) {
            console.log(err)
        };
    }
    this.addItem = function (postDta) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/item/add',
                method: 'post',
                data: postDta
            });
        } catch (err) {
            console.log(err)
        };
    }
    this.updateItem = function (postDta) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/item/update',
                method: 'put',
                data: postDta
            });
        } catch (err) {
            console.log(err)
        };
    }
    this.disableItem = function (id) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/item/disable/'+id,
                method: 'get',
            });
        } catch (err) {
            console.log(err)
        };
    }
    this.enableItem = function (id) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/item/enable/'+id,
                method: 'get',
            });
        } catch (err) {
            console.log(err)
        };
    }

    this.deleteItem = function (id) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/item/delete/'+id,
                method: 'delete',
            });
        } catch (err) {
            console.log(err)
        };
    }
    this.getQnt = function (postData) {
        try {
            this.csrf();
            return $.ajax({
                url: 'http://127.0.0.1:8182/api/get/qnt',
                method: 'post',
                data:postData
            });
        } catch (err) {
            console.log(err)
        };
    }
}
let serializeObject = function (data) {
    let o = {};
    let a = data.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
