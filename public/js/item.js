$(document).ready(function (){
   getItem();
});

// //Click Edit Button
// //getSingleItem(1)
//
// //Add Item
// var postdata = {
//     "name" : "New Item",
//     "cost":300,
//     "quantity" : 250,
// }
// addItem(postdata)
//
// //Update Item
// var postData = {
//     'id':1,
//     "name" : "New computer",
//     "cost":300,
//     "quantity" : 250,
// }
// updateItem(postData)

// //Disable Utem
// disableItem(3);

// //enableItem Utem
// enableItem(3)

// // deleteItem
// deleteItem(4);

// //get Qnt
// var postData = {
//     "id":3
// };
// getQnt(postData)

function getItem(){
    (new HttpRequest()).getItem().done(function (response) {
        console.log(response)
        // cost: 20
        // created_at: "2021-06-03T17:43:11.000000Z"
        // id: 1
        // name: "PC"
        // quantity: 11
        // status: 0
        // updated_at: "2021-06-05T06:13:33.000000Z"
    }).fail(function (response) {
        console.log(response)
    });
}
function getSingleItem(id){
    (new HttpRequest()).getSingleItem(id).done(function (response) {
        console.log(response.data)
        // cost: 20
        // created_at: "2021-06-03T17:43:11.000000Z"
        // id: 1
        // name: "PC"
        // quantity: 11
        // status: 0
        // updated_at: "2021-06-05T06:13:33.000000Z"
    }).fail(function (response) {
        console.log(response)
    });
}
function addItem(postData){
    (new HttpRequest()).addItem(postData).done(function (response) {
        console.log(response)
        //{status: true, message: "Item Add Success"}
    }).fail(function (response) {
        console.log(response)
        //Error response.responseJSON.message
    });
}
function updateItem(postData){
    (new HttpRequest()).updateItem(postData).done(function (response) {
        console.log(response)
        //{status: true, message: "Item Add Success"}
    }).fail(function (response) {
        console.log(response)
        //Error response.responseJSON.message
    });
}
function disableItem(id){
    (new HttpRequest()).disableItem(id).done(function (response) {
        console.log(response)
        //{status: true, message: "Item Add Success"}
    }).fail(function (response) {
        console.log(response)
        //Error response.responseJSON.message
    });
}
function enableItem(id){
    (new HttpRequest()).enableItem(id).done(function (response) {
        console.log(response)
        //{status: true, message: "Item Add Success"}
    }).fail(function (response) {
        console.log(response)
        //Error response.responseJSON.message
    });
}
function deleteItem(id){
    (new HttpRequest()).deleteItem(id).done(function (response) {
        console.log(response)
        //{status: true, message: "Item Add Success"}
    }).fail(function (response) {
        console.log(response)
        //Error response.responseJSON.message
    });
}
function getQnt(postData){
    {
        (new HttpRequest()).getQnt(postData).done(function (response) {
            console.log(response.data)
            //{quantity: 29, cost: 500}
        }).fail(function (response) {
            console.log(response)
            //Error response.responseJSON.message
        });
    }
}


