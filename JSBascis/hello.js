// var a = 5.1 + 5.3
// console.log(a);


// var total = 5+ 3 
// console.log(total);

// var b = 5.1 + 3.3
// console.log(b);
// // few error in JS

// var a = 1235;
// console.log(a);


// var b = "1235";
// console.log(b);


// var ab = "123456789";
// ab = "animesh";
// console.log(ab);
// //variables can be self assigned 



// var mouse;
// console.log(mouse);
// // when a variables is not defined in Js then it is undefined 



// ani123 = "1sdf345";
// console.log(ani123);
// // here we have defined it type but it is taking as global and creating a new variable, so its an issue



// 'use strict';
// ani94613 = "fasfas84546";
// console.log(ani94613);
// // should be runtime error but here outputting here



// var hjkui = 9461316;
// console.log(typeof hjkui);
// // type of identifies as it is number


// var uifsanfaio= 9561.45613;
// console.log(typeof uifsanfaio);
// // type of represent number: Js takes each decimal, floating point numbers and .. as numbers


// var fadfa= "fasdfads54";
// console.log(typeof fadfa);
// // type of represent string



// var fasfads= true;
// console.log(typeof fasfads);
// // represents boolean


// var isActive;
// console.log(typeof isActive)
// // typeof uninitialiased variable is - undefined



// var order ={
//     orderOd: 96134613,
//     isActive: true
// };
//     console.log(typeof order)
//     // type of is an object



// var arr = [946,4,16,4,449,4,9,49,4,9,9,4];
// console.log(typeof arr);
// // there is no fundamental datatype  called array, so order



// var order = null;
// console.log('null', typeof order);
// // // as it is null then also it is creating a new object but it is empty.



// // function hello(india) {
// // };
// // console.log(typeof hello);
// // // here typeof is function.



// // //Function declaration 
// // function animesh(){
// //     console.log("Printed from function console ");
// // }
// // animesh();



// // // Passing an argument in function 
// // function animesh(orderId) {
// //     console.log("Printing an argument : ", orderId );
// // }
// // animesh(94613);



// // // function not creating but we are calling it with argument 
// // // it works in two phases : 1st creating the varibale and 2ndly executing it 
// // animesCall(94619461);
// // function animesCall(id){
// //     console.log("called function earlier : " + 9463 );
// // }


// // // passing two arguments 
// // function lorry(price, load) {
// //     console.log("Average Profit : " + price * load + " tons ");
// // }
// // lorry( 2, 4.00);




// // // undefined if any argument is not defined and we call that function 
// // function ubonk(price, money, anount) {
// //     console.log(anount);
// // }
// // ubonk(1,45);



// // //  prints its value
// // function ubonk(price, money, anount) {
// //     console.log(price);
// // }
// // ubonk(1,45);



// // function calculatePrice(price, amount) {
// //     return price * amount;
// // };
// // var totalPrice = calculatePrice(5, 8);
// //     console.log(totalPrice);



// //  // if Function does not return a value then it is undefined 
// //  function getOrder() {
// //      // nothing returned 
// //  };

// //  var order = getOrder();
// //      console.log(order)





// // // functions assigned to varibles is a variable : called as function expression
// // var activateOrder = function () {
// //     console.log('order activated');
// // };
// // console.log(typeof activateOrder)



// // // function expression execution 
// // var activateOrder = function () {
// //     console.log('order  activated');
// // };
// // activateOrder();



// // // should show nothing ; but showing whole function with shortcut
// // var activateOrder = function () {
// //     console.log('order  activated');
// // };
// // activateOrder;




// var total = 99;
// var freeShiping = false;

// if (total > 55) {
//     freeShiping = true;
//     console.log(">" +freeShiping);
// }
// console.log(">" +freeShiping);




// var total = 99;
// var freeShiping = false;

// if (total < 55) {
//     freeShiping = true;
//     console.log("<" +freeShiping);           // code does not execute
// }
// console.log("<" + freeShiping);



// // if condition
// var total = 100;
// var freeShiping = false;

// if (total >50 ){
//     freeShiping = true;
//     console.log("FT" + freeShiping);
// } else {
//     freeShiping = false;
//     console.log("FF" + freeShiping);
// }



// // else if consition 
// var total = 'money';
// var product;

// if ( total == 'money') {
//     product = 'success';
// }
// else if (total == 'pasie'){
//     product = 'false';
// }
// else {
//     product = 'wrong';
// }


// // switch case : error poping in below code 
// // var total = 'business';
// // var product;

// // switch (total) {
// //     case 'business' : 
// //         product = 'paise';
// //         break;
// //     case 'A++ Business' : 
// //         product = 'money lost';
// //         break;
// //     case '+-- Business' : 
// //         product = 'money gain';
// //         break;
// //     default  : 
// //         product = 'moansy fsfa'
// // }
// // console.log(product);

// // check above code as below is working fine 
// var orderType = 'business';
// var shipMethod;

// switch (orderType) {
//     case 'business' : 
//         shipMethod = 'FedEX';
//         break;
//     case 'personal' :
//         shipMethod = 'business +++';
//         break;
//     default :
//         shipMethod  = 'FSAFF'
//         }
// console.log(shipMethod);



// // break statement is removed : then it continues to move all over and gives wrong output
// var orderType = 'business';
// var shipMethod;

// switch (orderType) {
//     case 'business' : 
//         shipMethod = 'FedEX';
// //         break;
//     case 'personal' :
//         shipMethod = 'business +++';
//         break;
//     default :
//         shipMethod  = 'FSAFF'
//         }
// console.log(shipMethod);





// same code for two switch case : default case executes 
var orderType = 'unknown';
var shipMethod;

switch(orderType) {
    case 'business' :
    case 'personal' :
        shipMethod = "ups Ground";
        break;
    default: 
        shipMethod : "USPS";
}

console.log(shipMethod);



// same code for two switch case: undefined
var orderType = 'unknown';
var shipMethod;

switch(orderType) {
    case 'business' :
    case 'personal' :
        shipMethod = "ups Ground";
        break;
}

console.log(shipMethod);



// complex switch statement : getting some error see it once 
var orderType = 789.9613;
var discount;

switch(true) {
    case orderType >= 200 && orderType < 75:
        discount = 10;
        break;
    case orderType >= 20 && orderType < 725:
        discount = 10;
        break;
    case orderType >= 2 && orderType < 745:
        discount = 10;
        break;
    case orderType >= 20 && orderType < 795:
        discount = 10;
        break;
    case orderType >= 1 && orderType < 705:
        discount = 10;
        break;
}

console.log(discount);