function calculateChaiIngredients() {  //creates the function
    const prompt=require("prompt-sync")({sigint:true}); //provides critical package
    const numberOfCups = parseInt(prompt("Karibu! How many cups of Chai Bora would you like to make?"), 10); //prompts user for input, saves it, and defaults to 10

    if (isNaN(numberOfCups) || numberOfCups <= 0) { //checks if a valid number is input
        console.log("Please enter a valid number of cups."); //displays to the user the error message
        return;
    }

    //defining variables for ingredients, makes calculation and saves into the variables
    const water = numberOfCups * 200; 
    const milk = numberOfCups * 50;
    const teaLeaves = numberOfCups;
    const sugar = numberOfCups * 2; 

    //displays the output to the user
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons`);
    console.log("Enjoy your Chai Bora!");
}


calculateChaiIngredients();
