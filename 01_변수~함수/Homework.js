//1. 구구단 1단부터 9단까지 출력
for(let i = 1; i <= 9; i++) {
    for(let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

//2. 0부터 10까지 짝수만 출력
for(let i = 0; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

//3. 0부터 10까지 출력하다가 8에 도달하면 멈추도록
for (let i = 0; i < 10; i++){
    if (i === 8) break;
    console.log(i);
}

//4. 계산기 함수
function calculator(command, a, b) {
    switch (command) {
        case "add":
            return a + b;
            break;
        case "minus" :
            return a - b;
            break;
        case "divide" :
            return a / b;
            break;
        case "multiply" :
            return a * b;
            break;
        case "remainder" :
            return a % b;
            break;
        default:
            return "error";
    }
}

