* js 파일에서 html코드가 실행되는이유: jsx라능 기능때문, react 팀이 개발하고 도입한 특수구문 
  * 백그라운드에서 진행되는 코드변환 과정 덕분

* 리액트에 있는 컴포넌트는 단지 자바스크립트 함수
* jsxcode: 
```
function App() {
    return (
        <div>
            <h2>asdasd</h2>
        </div>
    )
}
```
* 리액트 규칙중의 하나: 리액트 컴포넌트에는 컴포넌트 안에 반환하는 jsx코드 안에 반환하는 문장 or jsx 코드 조각 마다 반드시 한개의 루트요소를 가져야한다
```
<div></div><div></div> //이렇게 쓰면 안됨
```
* 리액트는 재사용 할 수 있는 컴포넌트를 만들 수 있음
   * 매개변수를 사용하거나 리액트의 props 라는 개념을 사용하면 됨

* props: 우리만의 사용자 지정 컴포넌트속성 -> 리액트에서 이개념은 props라고 불림 = properties
```
<Component title = {}, name = {} ></Component>//이런식으로 보내면됨

function Component(props){
    return (
        <div>{props.title}</div>
    );
}
```

* 
```
// <Component>asdf</Component> 에서 asdf값을 사용하는법

function Component(props) {
    return <div>{props.children}</div>
}
```
* 위 방식대로 props.children 을 사용하면 asdf값이 출력됨
```
function Component(props) {
    return <div>{props.children}</div>
}

===

const Component = () => {
    return <div>{props.children}</div>
}
```

* 자바스크립트에서 이벤트 리슨하는법
```
document.getElementById('root').addEventListener();//명령형 방싱
```
* 리액트에서 이벤트 리슨하는법
```
<button onClick ={ () => {console.log('asdf')}}>sadf</button>
```
* 리액트는 컴포넌트, jsx 코드를 반환
* useState: 페이지를 반응형으로  만드는법
```
const Component = (props) => {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('update');
    }
    return <div>{props.title }</div>
}

//하나 바꾸면 여러개 변수 바꾸는법
const [userInput, setUserInput] = useState({
    enteredTitle '',
    enteredAmount: '',
    enteredDate: ''
});

const clickHandler = () => {
        setUserInput({
            ...userInput,
           enteredTitle: event.target.value 
        });
    }
```
* onChange 사용할때 인풋값 가져오는법
```
onChange = {(e) => {console.log(e.target.value);
    }
}
```
* 이전 state 에 의존하는 state 업데이트: 
```
const [userInput, setUserInput] = useState({
    enteredTitle '',
    enteredAmount: '',
    enteredDate: ''
});

const clickHandler = () => {
        setUserInput({
            ...userInput,
           enteredTitle: event.target.value 
        });
    }
```
* 위 코드는 이전 state에 의존하고 있음-> 위의 경우 세개의 상태로 접근x, 하나로 접근하는 방법을 사용하기 때문 ->이런식으로 업데이트하는 방법은 좋지 못함
```
//방법
const clickHandler = () => {
        setUserInput((이전state) => {
            return {...이전state, enteredTitle: event.target.value};
        });
    }
```
* 폼 제출 버튼을 클릭하면 페이지가 다시로드되는이유: 브라우저는 폼이 제출될때마다 호스팅하고 있는 서버에 요청을 보내기떄문
* preventDefault: 구체적으로 반응하지 않는 기본자바스크립트 동작 -> 기본 요청이 보내지는것을 막을 수 있음 -> 페이지 리로드를 막음 ex) a태그를 눌렀는데 href 링크이동x, form 안에 submit 작동은 하는데 새로 실행하지 않게 하고싶을 떄

* 리액트에서 부모컴포넌트에 데이터를 보내려면 callback함수를 써서 자식 데이터를 끌어오면 됨
* useState 사용해서 이전 데이터를 받아오는법
```
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
```
* 새로운 아이템을 추가할때 리액트에게 알려주는 방법: key 사용
* 만약 첫번째 배열에 div 태그같은 것을 넣으면 끝부분에 추가되고 모든 아이템들을 지나면서 안에있는 컨텐츠를 업데이트해준다 -> 성능이 좋지못함 -> 모든 목록을 업데이트 해야하고 버그를 만들수도 있기 때문
* 그래서 새로운 아이템이 어디에 추가되어야 하는지 리액트에게 알려줘야하는데 key props를 추가하면 됨
* key를 써주면 배열의 길이뿐만 아니라 아이템이 위치해야 할곳까지 인식해서 좀더 효율적인 방법으로 업데이트 할 수 있다.
* 즉 목록의 아이템을 매핑할때는 항상 key를 추가해야합니다
* Date 객체 getFullYear: date에서 4자리수 연도를 가져온다