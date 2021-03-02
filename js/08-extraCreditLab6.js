//Global Variables
let futureValue;
let investment;
let rate;
let years;


//Collect values from the user
do { 
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'), 10);
} while (isNaN(investment));

do {
rate = parseFloat(prompt('Enter interest rate as xx.x'), 10);
} while (isNaN(rate) || (rate < 0 || rate > 6));

do {
years = parseInt(prompt('Enter the number of years'), 10);
} while (isNaN(years) || (years < 1 || years > 30));

//Calculate future value
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

//Display result
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);