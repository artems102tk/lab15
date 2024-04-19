let number = 0;

while (number <= 100) {
    let isPrime = true;
    
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 100) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        console.log(number);
    }
    
    number++;
}
