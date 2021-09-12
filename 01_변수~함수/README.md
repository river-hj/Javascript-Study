### 자바스크립트 개요
* defer 옵션을 쓰는 것이 효율적이고 안전하게 연결하는 방법
* `'use strict';` : 더 상식적인 범위에서 프로그래밍 할 수 있음 

### 변수(Variable)
* block scope : 블록 안에서 선언된 변수는 블록 안에서만 유효
1. let (read and write)
2. ~~var~~
    * block scope이 적용되지 않는 등 위험 요소가 많음
3. constants (read only)
    * 변경이 불가능한 데이터 타입

### 자료형(Data Type)
1. number
2. string
    * 백틱(`)을 활용하면 변수, 텍스트를 쉽게 출력할 수 있음
3. null : 값이 없음
4. undefined : 값이 정의되지 않음
5. symbol : 식별자를 만들 때 활용
6. object(box container)

* immutable / mutable

### Dynamic typing 언어
* 상황에 따라 자료형을 바꾸어 인식 (실행되면서 자료형이 변환됨)

### 연산
1. String concatenation
2. Numeric operators
3. Increment/Decrement operators
    * (주의) 사용하는 위치에 따라 값이 달라짐
4. Assignment operators
5. Comparison operators
6. Logical operators : `||`(or), `&&`(and), `!`(not)
    * `||`, `&&`: or/and 연산자를 사용할 때 첫번째 비교 조건부터 무거운 계산식 혹은 실행문을 넣을 경우 프로그램 속도가 느려지기 때문에 가벼운 계산식/실행문부터 작성
7. Equality
    * `==` : loose equality (with type conversion)
    * `===` : strict equality
8. Conditional operators: if
    * if(), else if(), else()
9. Ternary operators
    * if를 쉽게 사용할 수 있는 방법
    * `console.log(name === 'abc' ? 'yes' : 'no')`
10. Switch statement
    * if문의 조건이 너무 많은 경우 switch문을 사용하는 것이 좋음
11. Loop  
    * While : 조건문이 참인 동안 반복. (do while : 조건문을 먼저 실행하고 조건이 맞는지 틀린지 검사)
    * For : begin, condition, step
    * break : 반복문을 끝냄.
    * continue : 현재 실행되고 있는 코드를 스킵하고 다음 코드로 넘어가는 것         