let coinFlip;
let numFlip = parseInt(prompt('Welcome to the coin flip game! Enter the number of coin flips you want. Ex: 4'), 10);
if (!isNaN(numFlip) && numFlip > 0) {
    for (let i = 1; i <= numFlip; i++) {
        coinFlip = Math.round(Math.random());
        if (coinFlip === 0) {
            console.log(`Flip #${i}: Heads`);
        } else if (coinFlip === 1) {
            console.log(`Flip #${i}: Tails`);
        }
    }
} else {
    console.log('Invalid entry. Please refresh the page and enter any positive integer.');
}