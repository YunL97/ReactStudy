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
* preventDefault: 구체적으로 반응하지 않는 기본자바스크립트 동작 -> 기본 요청이 보내지는것을 막을 수 있음 -> 페이지 리로드를 막음
* 리액트에서 부모컴포넌트에 데이터를 보내려면 callback함수를 써서 자식 데이터를 끌어오면 됨
* useState 사용해서 이전 데이터를 받아오는법
```
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
``` 

 * jsx 조건문 사용법
```
//true 면 button 보여주고 아니면 버튼 보여주지마라
{!false && <button>asdasdasd</button>}
```
* css모듈 사용해서 import로 가져와서 자기가 쓰고싶은 스타일을 지정해주는 게 리액트에서 권장하는 css모듈 사용법임 

```
import styles from './CourseInput.module.css';//모듈로 사용하려면 .module를 붙여야함

<div className=${styles['form-control'] ${!isValid && styles.invalid}}>
```
