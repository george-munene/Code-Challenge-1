function calculateBodaFare() {
    const distanceInKm = parseFloat(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));

    if (isNaN(distanceInKm) || distanceInKm < 0) {
        console.log("Please enter a valid distance.");
        return;
    }

    const baseFare = 50; 
    const chargePerKm = 15;
    const chargebyKM = (distanceInKm * chargePerKm)
    const totalFare = baseFare + chargebyKM

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${chargebyKM}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("Panda Pikipiki!");
}


calculateBodaFare();
