function calculateBodaFare() { //creates the function to calculate fare
    const prompt=require("prompt-sync")({sigint:true}); //provides critical package
    const distanceInKm = parseFloat(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:")); //accepts user input

    //checks if number is entered
    if (isNaN(distanceInKm) || distanceInKm < 0) {
        console.log("Please enter a valid distance.");
        return;
    }

    //defines variables, does calculations and saves into the variables
    const baseFare = 50; 
    const chargePerKm = 15;
    const chargebyKM = (distanceInKm * chargePerKm)
    const totalFare = baseFare + chargebyKM

    //diplays output to the user
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${chargebyKM}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("Panda Pikipiki!");
}

//runs the funtion
calculateBodaFare();
