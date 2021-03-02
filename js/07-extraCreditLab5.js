let miles;
let gallons;
let mpg;
let again = 'y';

do {
    miles = parseFloat(prompt('Enter miles driven.'));
    gallons = parseFloat(prompt('How many gallons does your tank hold?'));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`)
    } else {
        alert(`One or both entries are invalid`)
    }
    while (true) {
        again = prompt(`Run application again? (y or n)`, 'y');
        if (again === 'y' || again === 'n' || again === null) {
            break;
        } else {
            continue;
        }
    }
} while (again === 'y');
console.log('Application has exited');


