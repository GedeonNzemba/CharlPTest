

// Calculate total price of my phones.
// will keep buying phones until money in bank is finish
// after calcution, add in the tax
// then print out the total amount properly formatted

// Check your bank account balance to see if you can afford it or not

// taxRate,  phonePrice,   accessoryPrice, spendingThreshold,  banckAccountBalance

function userPurchase() {
    var banckAccountBalance = prompt("How much money do you have ?");


    // prompt user to select phones
    function postProducts() {
        //get user money
        function getBanckAccountBalance() {
            return banckAccountBalance;
        }

        let minMoney = 100
        if (banckAccountBalance < minMoney) {
            alert('Sorry. you do not haave enough cash to bu our products. We therefore do not want to display our products to you.');
            console.log('User do not have enough money.');

        } else if (banckAccountBalance >= minMoney) {
            alert(
                "Have a look at our list of products\n#Iphone X: $600\n#Nokia C9: $1,200\n#Samsung Galaxy S20: $3,000\n#Earphone black: $200\n#Iphone charger: $300\n\nPlease remember our choice and write it down in the next window."
            );

            // prompt user to select phones
            function getUserToBuy() {
                var answer1 = prompt('write yes or no.\nWant to buy #Iphone X ?');
                var answer2 = prompt('select yes or no.\n#want to buy #Nokia C9 ?');
                var answer3 = prompt('select yes or no\nWant to buy Samsung Galaxy S20 ?');
                var answer4 = prompt('select yes or no\nWant to buy #Earphone black ?');
                var answer5 = prompt('select yes or no\nWant to buy #Iphone charger ?');

                if (answer1 == 'no' && answer2 == 'yes' && answer3 == 'yes' && answer4 == 'yes') {
                    let answer2 = 1.200;
                    let answer3 = 3.000;
                    let answer4 = 200;
                    let answer5 = 300;

                    var result = answer2 + answer3 + answer4 + answer5;
                    return alert('The total price of our purchase is: ' + '$' + result);

                } else if (answer1 == 'yes' && answer2 == 'no' && answer3 == 'yes' && answer4 == 'yes') {
                    let answer1 = 600;
                    let answer3 = 3.000;
                    let answer4 = 200;
                    let answer5 = 300;
                    var result = answer1 + answer3 + answer4 + answer5;
                    return alert('The total price of our purchase is: ' + '$' + result.toString(2));
                } else if (answer1 == 'yes' && answer2 == 'yes' && answer3 == 'no' && answer4 == 'yes') {
                    let answer1 = 600;
                    let answer2 = 1.200;
                    let answer4 = 200;
                    let answer5 = 300;
                    var result = answer1 + answer2 + answer4 + answer5;
                    return alert('The total price of our purchase is: ' + '$' + result.toString(2));
                }
                else if (answer1 == 'yes' && answer2 == 'yes' && answer3 == 'yes' && answer4 == 'no') {
                    let answer1 = 600;
                    let answer2 = 1.200;
                    let answer3 = 3.000;
                    let answer5 = 300;
                    var result = answer1 + answer2 + answer3 + answer5;
                    return alert('The total price of our purchase is: ' + '$' + result.toString(2));
                }
                else if (answer1 == 'yes' && answer2 == 'yes' && answer3 == 'yes' && answer4 == 'yes' && answer5 == 'no') {
                    let answer1 = 600;
                    let answer2 = 1.200;
                    let answer3 = 3.000;
                    let answer4 = 200;
                    var result = answer1 + answer2 + answer3 + answer4;
                    return alert('The total price of our purchase is: ' + '$' + result.toString(2));
                } else {
                    let answer1 = 600;
                    let answer2 = 1.200;
                    let answer3 = 3.000;
                    let answer4 = 200;
                    let answer5 = 300;
                    var result = answer1 + answer2 + answer3 + answer4 + answer5;
                    return alert('The total price of our purchase is: ' + '$' + result.toString(2));
                }
            }

            return getUserToBuy();

        } else {
            return console.log('something went wrong!');

        }
    }

    postProducts();



    // for(let i = 100; i <= banckAccountBalance; i++){

    // }



}
// userPurchase();

// $124 $48 $268



var resTotalPrice = 124;



function tipWaiter() { // m
    var tips = [0.2, 0.15, 0.1];
    var finalBill = [124, 48, 260, 50];
    for (var i = 0; i < finalBill.length; i++) {
        console.log(finalBill[i])
        if (finalBill[i] < 0) {
            var tip = finalBill[0] * tips[0];
            return console.log('The tip will be m ' + `$` + tip.toFixed(2));
        } else if (finalBill[i] === 50 && finalBill[i] > 200) {
            var tip = finalBill[0] * tips[0];
            return console.log('The tip will be t' + `$` + tip.toFixed(2));
        } else if (finalBill[i] > 200) {
            var tip = finalBill[0] * tips[0];
            return console.log('The tip will be p' + `$` + tip.toFixed(2));
        } else {
            console.log('No tiping to give to waiter.');
            console.log(finalBill[i])
        }
    }


    //switch (item) { // m


    // case item < 500:
    //     var tip = finalBill[1] * tips[1];
    //     return console.log('The tip will be ' + `$` + tip);

    //     break;
    // case finalBill[0] === 50 && finalBill >= 201:
    //     var tip = finalBill[0] * tips[0];
    //     return console.log('The tip will be ' + `$` + tip);

    //     break;
    // case finalBill[2] > 200:
    //     var tip = finalBill[0] * tips[0];
    //     return console.log('The tip will be ' + `$` + tip);

    //     break;

    // default:
    //     console.log('No tiping to give to waiter.');
    //     break;
    //}
}

tipWaiter(); // m

// tipWaiter();

