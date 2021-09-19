## Exercise2
1. flexbox : https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox

2. Element.classList  
    - element의 class 속성 모음인 활성 DOMTokenList를 반환
    - 메서드
        - `add(String [, String [, ...]])` : 지정한 클래스 값을 추가
        - `remove(String [, String [, ...]])` : 지정한 클래스 값을 제거
        - `item(Number)` : 인덱스를 이용하여 클래스 값 반환
        - `toggle(String[, force])`
            - (1) 하나의 인수만 있을 때 : 클래스 값을 토글링  
                (클래스가 존재한다면 제거하고 false를 반환하며, 존재하지 않으면 클래스를 추가하고 true를 반환)
            - (2) 두번째 인수가 있을 때: 두번째 인수가 true로 평가되면 지정한 클래스 값을 추가하고 false로 평가되면 제거
        - `contains(String)` : 지정한 클래스 값이 element의 class 속성에 존재하는지 확인
        - `replace(oldClass, newClass)` : 존재한느 클래스를 새로운 클래스로 교체

3. toggle()
    - 토글 : on/off 스위치 개념. add(), remove() 메서드를 한번에 쓸 수 있는 합쳐진 개념