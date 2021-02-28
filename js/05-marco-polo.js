let x = 0;
for (let i = 1; i <=100; i++) {
    x += 1;
    if (x % 3 === 0 && x % 5 === 0) {
        console.log('Marco! Polo!');
    } else if (x % 3 === 0) {
        console.log('Marco!');
    } else if (x % 5 === 0) {
        console.log('Polo!');
    } else {
    console.log(x);
    }
}    