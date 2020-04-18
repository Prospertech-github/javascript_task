let results = [];
let d1 = "yu";
let d2 = "gi";
let d3 = "oh";

//creating our function
function playWithLogic (input)  {
    //printing from i to our input using for loop
    for (i = 1; i <= input; i++ ){
        //pushing the values to the empty results array
        results.push(i);
        //looping through the array, testing for dividers and changing the values to strings
        for (j in results){
            if (results[j] %2 == 0 && results[j] %3 == 0 && results[j] %5 == 0 ) {
                 results[j] = d1 + "-" + d2 + "-" + d3;
            } else if (results[j] %2 == 0 && results[j] %3 == 0) {
                 results[j] = d1 + "-" + d2;
            }else if (results[j] %2 ==0 && results[j] %5 == 0) {
                 results[j] = d1 + "-" + d3;
            } else if (results[j] %3 == 0 && results[j] %5 == 0) {
                 results[j] = d2 + "-" + d3 ;
            } else if (results[j] %2 == 0) {
                 results[j] = d1;
            } else if (results[j] %3 == 0) {
                 results[j] = d2;
            }else if (results[j] %5 ==0) {
                 results[j] = d3;
            }
        }
     }
}
//calling our playWithLogic function with an input
playWithLogic(100)
//displaying solution in the results array
console.log(results);
