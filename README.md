Common.js 방식에서 ESC 방식으로 바꾸어 사용 할 것이다.
버튼을 누르면 시간 데이터가 저장 되도록 만든다.

우선 순위를 잘 고려 하지 못 하여서 시간 분배를 잘 못 하였다.
설계를 해둘 때 목적과 시간을 잘 고려 해두고 해보자.

1. 서버를 구동 할 수 있도록 해본다.
2. 시간을 표현 하는 웹 사이트를 만든다.
3. 서버를 aws에서 돌릴수 있도록 해본다.


## AWS EC2를 사용

- 가상 공간에서 서버를 열어 보고 싶어서 사용해 보았다.



## 시간 Date(); 생성

- 현재 시간 값을 받아오기 위하여 Date() 함수를 사용하였다.
    


### 객체의 새로운 값을 시도 해보기 전 코드

```html
const root = document.getElementById("root");

function getTime(){
  let date = new Date();
  Date.prototype.test = function (yy, mm, dd, hh, mn, ss) {
    yy = this.getFullYear().toString();
    mm = (this.getMonth() + 1).toString();
    dd = this.getDate().toString();
    hh = this.getHours().toString();
    mn = this.getMinutes().toString();
    ss = this.getSeconds().toString();
    setTimeout(getTime(), 00);
   
    return  console.log(yy + "-" + mm + "-" + dd + " 시간 "+hh + "시 "+ mn+ "분 " +ss +"초");

    
  };
}

console.log(getTime());
```

### 구조를 바꾼 뒤에 실행

```html
<script>
      const root = document.getElementById("root");
      document.addEventListener("DOMContentLoaded", get());

      function get() {
        let date = new Date();
        let yy = date.getFullYear().toString();
        let mm = (date.getMonth() + 1).toString();
        let dd = date.getDate().toString();
        let hh = date.getHours().toString();
        let mn = date.getMinutes().toString();
        let ss = date.getSeconds().toString();
        let time =
          yy +
          "-" +
          mm +
          "-" +
          dd +
          " 시간 " +
          hh +
          "시 " +
          mn +
          "분 " +
          ss +
          "초";
        root.innerHTML = time;
        setTimeout(get, 1000);
      }
    </script>
```

- get() 함수 안에서 날짜 생성 로직을 작성 하고 나서 setTimeout()메소드를 사용 하여 get함수가 1초 뒤에 계속 재실행 될수 있도록 구현해 보았다
- return 값을 없애 실행 함수로 만들어 주는 것도 키포인트가 될수도 있다.


## 에러 사항

- aws ec2에서 앱서버를 시작을 하여도 밖에서 접속 하지 못 하는 에러 사항을 격었다
    - EC2 가상 공간에서 앱서버를 열어서 앱서버의 ip 주소에 포트 번호를 들어가면 접속이 가능 할 것 같았지만 그렇게 생각 한대로 해보았지만 접속 하지 못 하였다.
- 현재 시간을 불러 오기는 성공 하였으나 시간을 자동으로 갱신시키는 부분에서 시간을 많이 사용 하였다.
    - 반복문을 사용 하여 페이지를 리로드 시킬 생각이였지만 그렇게 되면 페이지가 계속 새로고침 되어 좋은 방법은 아니라 판단 하였다.
    - new Date();를 반복적으로 생성해주거나 함수를 반복적으로 실행 시켜 주면 값을 계속 갱신하여 얻을수 있을것 같았지만 처음에 들어간 값이 계속 반복되어 어려움을 겪었다.