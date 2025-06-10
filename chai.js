function calculateChaiIngredients() {
    const numberOfCups = parseInt(prompt("Karibu! How many cups of Chai Bora would you like to make?"), 10);

    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        console.log("Please enter a valid number of cups.");
        return;
    }

    const water = numberOfCups * 200; 
    const milk = numberOfCups * 50;
    const teaLeaves = numberOfCups;
    const sugar = numberOfCups * 2; 

    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons`);
    console.log("Enjoy your Chai Bora!");
}


calculateChaiIngredients();
