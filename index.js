import inquirer from "inquirer";
console.log("ATM");
let mybalance = 500000; //Rs
let mypin = 1234;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinanswer.pin === mypin) {
    console.log("****CORRECT PIN CODE***");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select the options",
            type: "list",
            choices: ["withdraw", "checkbalance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Please enter the amount"
            }
        ]);
        //= += -=
        mybalance -= amountAns.amount;
        // console.log(`your Balnce is ${mybalance}`)
        console.log("your Balnce is " + mybalance);
    }
    else if (operationAns.operation === "checkbalance") {
        console.log(`your remaining Balnce is ${mybalance}`);
    }
    //);
}
else {
    console.log("Incorrect pin. Please enter the correct pin");
}
