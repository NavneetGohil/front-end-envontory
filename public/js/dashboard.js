$(document).ready(function (){
    countDashboard()
});
function countDashboard(){
    (new HttpRequest()).countDashboard().done(function (response) {
        console.log(response)
        // data:
        //Item: 2
        // balance: 50000
        // company: 1
        // customer: 0
        // disable_item: 2
        // enable_item: 0
        // transaction: 15
    }).fail(function (response) {
        console.log(response)
    });
}
