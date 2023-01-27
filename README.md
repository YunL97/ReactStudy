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
* preventDefault: 구체적으로 반응하지 않는 기본자바스크립트 동작 -> 기본 요청이 보내지는것을 막을 수 있음 -> 페이지 리로드를 막음 ex) a태그를 눌렀는데 href 링크이동x, form 안에 submit 작동은 하는데 새로 실행하지 않게 하고싶을 떄 -> 다이얼로그가 떳을 때 onSubmit 안에 preventDefault를 쓰지 않으면 다이얼로그가 바로꺼진다.

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

 * jsx 조건문 사용법
```
//true 면 button 보여주고 아니면 버튼 보여주지마라
{!false && <button>asdasdasd</button>}
```
* css모듈 사용해서 import로 가져와서 자기가 쓰고싶은 스타일을 지정해주는 게 리액트에서 권장하는 css모듈 사용법임 -> import styles 이런식으로 import 해오면 각 css파일마다 고유한 네임스페이스를 부여해주기 때문에 각 react컴포넌트는 완전히 격리된 스타일을 보장, -> 다른 css파일에 똑같은 클래스에대한 스타일이 정의되어있더라도, style.btn 이런식으로 쓴 클래스는 영향을 받지 않음

```
import styles from './CourseInput.module.css';//모듈로 사용하려면 .module를 붙여야함

<div className=${styles['form-control'] ${!isValid && styles.invalid}}>
```
* 리액트 앱을 디버깅 하는방법:
   * 코드 흐름, 에러 분석
   * 중단점 으로 디버깅: 개발자 도구 디버깅으로 찾을 수있음

* 태그 2개로 반환 못하는이유
```
return (
    <h2>hi</h2>
    <p>hihihi</p>
)

===

return (
    React.reateElement('h2', {}, 'hi')
    React.reateElement('p', {}, 'hihi')
) 
-> 자바스크립트에서는 둘이상을 반환할 수 없기 때문
```
* 불필요한 내용을 렌더링 하는것은 일반적으로 프로그래밍에서는 좋은생각이 아님
* React.Fragment: 의미없는 div 추가를 줄이기 위해서
* 특정 컴포넌트가 깊숙히 있을때 body에 붙이고 싶을 때는포털 작업을 하면된다
```
//index.html
//body 바로밑
<div id="backdrop-root"></div>

<React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
   </React.Fragment>   
```
* useRef hook: 
  * 함수형 컴포넌트 안에서만 사용가능
  * const nameInputRef = useRef();
  * input 태그에 ref = nameInputRef 를 추가 해서 useRef()와 연결
  * DOM 노드를 확인할 수 있음 -> 조작가능 -> 그런데 조작하면안된다 -> 리액트에 의해서만 DOM이 조작되어야한다 
  * 언제사용한는가
    * 값을 여러개 입력하고 첫번째 칸으로 이동해야하는경우
    * 속성값을 초기화 하고 싶은경우
    * useRef로 컴포넌트 안의 변수 관리하기
      * 리렌더링을 하지않으면서 컴포넌트속성을 조회, 수정할때
      * setTimeout,setInterval을 통해 만들어진id
      * scroll위치
      * 배열에 새 항목을 추가할때 필요한 고유값 key
  * 선언적으로 해결할 수 있는 문제는 ref 사용 지양
  
  </br>
* 리액트 주요 기능
   *  JSX 코드와 DOM을 평가하고 렌더링
   *  state와 prop 관리
* SideEffect: 애플리케이션이서일어나는 다른모든것
   * http 리퀘스트보내는것
   * 브라우저 저장소에 무언가를 저장하는것
   * 코드에서 타이머나 간격을 설정
   * 어플리케이션에서 고려해야하는 작업
   * 무한루프나 버그에걸린것
* useEffect: 사이드이팩트를 줄이기 위해 사용
  * 무언가에 대한 응답으로 실행되는 코드를 다루는데 도움이 된다.
  * useEffect 에 timer 넣으면 여러번 실행될때 마지막 timer만 실행이 된다.
  ㅣ

* 브라우저에는 우리가 사용할 수 있는 저장소가 여러개 있음
   * 일반적으로 쿠키 ,로컬 저장소가 있음

```
//앱이 시작될때 한번만 실행된다
  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);
```

*  clearTimeOut: 앞에있는 settimeout를 지움 -> http 요청같은거 할때 한번만 보낼 수 있게 셋팅 가능
*  useReducer: 복잡한 state에 유용
  * 여러 state들이 함께 속해있는 경우
  * useState를 대신해서 사용가능
  * ```
    const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
    ```
  * state: state 스냅샷
  * dispatchFn: 스냅샷 업데이트 ->reducerFn 함수 실행
  * reducerFn: 최신 state 스냅샷을 자동으로 가져오는 함수, dispatchFn 데이터를 가져오고, 새로운 업데이트된 state를 반환
  * initialState: 초기 state 설정
  * initFn: 초기 state를 설정하기 위해 실행해야 하는 함수

* 디스트럭처링을 언제사용하냐: 객체에서 특정 값이 변할때만 리렌더링 시키고 싶을때 사용하면 될듯?
* Context: GetX 같은거 체인이용해서 데이터 가져오는것보다 쉬움
   * state 가 자주 바뀌는 경우에는 Context를 사용하면 안된다 -> 빠르게 바뀌는 데이터에 리액트 컨텍스트가 최적화되어있지 않기 때문