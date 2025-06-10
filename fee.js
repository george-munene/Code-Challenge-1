function estimateTransactionFee() {
    const amountToSend = parseFloat(prompt("Unatuma Ngapi? (KES):"));

    if (isNaN(amountToSend) || amountToSend <= 0) {
        console.log("Please enter a valid amount.");
        return;
    }

    const feePercentage = 0.015; // 1.5%
    let transactionFee = amountToSend * feePercentage;

    
    if (transactionFee < 10) {
        transactionFee = 10;
    } else if (transactionFee > 70) {
        transactionFee = 70;
    }

    const totalDebited = amountToSend + transactionFee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log("Send Money Securely!");
}


estimateTransactionFee();
