// defines function to estimate Transaction Fee
function estimateTransactionFee() {
    //accepts input and converts input into a number
    const amountToSend = parseFloat(prompt("Unatuma Ngapi? (KES):"));

    //rejects the input if not a valid input
    if (isNaN(amountToSend) || amountToSend <= 0) {
        console.log("Please enter a valid amount.");
        return;
    }

    //calculates transaction fee
    const feePercentage = 0.015; // 1.5%
    let transactionFee = amountToSend * feePercentage;


    // adds conditional transaction fee
    if (transactionFee < 10) {
        transactionFee = 10;
    } else if (transactionFee > 70) {
        transactionFee = 70;
    }

    //calculates total transaction fee
    const totalDebited = amountToSend + transactionFee;

    //displays output to user
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log("Send Money Securely!");
}

//executes the function
estimateTransactionFee();
