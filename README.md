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
* React.Fragment: 의미없는 div 추가를 줄이기 위해서 사용
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

* 리액트훅을 사용할떄의 규칙
   * 리액트 훅은 리액트 함수에서만 호출해야 한다
   * 훅안에 훅 사용x, if 문에도 사용불가

* state가 둘이상이면 항상 리액트로 state를 관리해줘야한다
* concat: 자바스크립트에 내장된 메소드 -> 배열에 새 항목을 추가해준다 -> push 와 달리 기존 배열을 편집하는게 아닌 새 배열을 반환

* css에서 height 넘기면 스크롤 만드는법: max-height: 20rem, overflow:scroll 로하면됨
* findIndex: 자바스크립트에 내장된 index
* 리액트: 사용자 인터페이스 구축을 위한 자바스크립트 라이브러리
   * 리액트의 핵심은 컴포넌트
   * 리액트는 컴포넌트만 신경쓴다
   * 리액트는 컴포넌트를 통해 사용자 인터페이스를 효과적으로 구성하고 이에 대한 업데이트 역시 컴포넌트를 통해 한다
* 리액트 DOM: 웹에대한 인터페이스, 따라서 사용자가 보고있는 화면에 무언가를 표시하는 역할을 함
* 리액트는 브라우저와 전혀 관계없다
* 실제 html 요소들을 화면에 표시해주는 것은 리액트 DOM이 고려 해야 할것들
* 최종으로 리액트가 하는일은 가상 DOM 을 만든다 -> 가상DOM은 컴포넌트 트리의 현재 모양과 최종모양을 정함 -> 상태 업데이트되면 리액트DOM으로 정보전달 -> 리액트DOM이 갱신 전후의 상태를 인식 -> 가상DOm과 실제 DOM 을 일치시킴
* 상태나 props, context, 컴포넌트에 변경이 발생하면 컴포넌트 함수가 재실행되고. 리액트가 이를 재평가 -> 이재평가가 DOM을 다시 랜더링 하는것은 아님
* 컴포넌트 부분과 리액트부분, 실제 DOM을 구분할줄 알아야함

* 컴포넌트: 상태, props, 컨텍스트가 변경될때 재평가 -> 리액트는 컴포넌트함수를 다시실행 -> 실제 DOM은 리액트가 구성한 컴포넌트의 이전상태와트리, 현재의 상태간의 차이점을 기반으로 변경이 필요할떄만 업데이트 -> 실제 DOM은 필요한 경우에만 변경 -> 성능측면에서 매우중요 -> 이전과 현재의 상태를 가상으로 비교하는것은 간편하고 자원도 적게든다 -> 이작업은 메모리 안에서만 발생 -> 직접 브라우저에서 직접 렌더링하는것은 성능측면에서 자원이 많이 필요함 -> 실제 DOM을 사용하는 작업은 성능 부하가 많이 발생함 -> 그래서 리액트는 가상DOM과의 비교를 통해 최종 스냅샷과 현재의 스냅샷을 실제 DOM에 전달하는 구조를 가짐

* 컴포넌트 상태 변경 -> 리액트가 스냅샷을 비교 -> 차이점을 리액트DOM에 보고 -> 리액트 DOM이 실제 DOM을 업데이트 하면서 변경된 상태를 집어넣음 
* 리액트 DOM은 전체 DOM을 재렌더링이 하지 않음 딱 바뀐 부분만 재렌더링 -> 이것이 백그라운드에서 리액트가 작동하는 방식
* 부모 컴포넌트 함수가 재실행 되면 마찬가지로 자식 컴포넌트 함수도 재실행 된다 -> 함수가 재실행된다고 해서 실제 DOM이 변경된다는 것은 아님 -> 개발자는 특정한 상황일 경우에 컴포넌트를 실행하도록 리액트에 지시할 수 있음 -> React.memo


* React.memo: 함수형 컴포넌트에만 사용가능, React.memo는 인자로 들어간 props의 신규값을 확인한뒤 이를 기존의 props 값과 비교하도록 리액트에 전달하고, props의 값이 바뀌면 컴포넌트를 재실행 및 재평가한다, 안바뀌면 컴포넌트 실행을 건너뜀 -> 최적화가된다
*  근데 모든 컴포넌트에 하지않는이유: 최적화에는 비용이 따르기 때문
*  React.memo는 컴포넌트를 재평가하는데에 필요한 성능비용과 props를 비교하는 성능 비용을 서로 맞바꾸는것
*  일반적으로 컴포넌트트리의 상위에 있으면 React.memo를 쓰는게 좋음
  
* 주의점: 부모가 리랜더링 될때 memo 쓰면안되는데 함수나 객체가 리랜더링 되면 다른 거로 보기때문에 특정상황이 아닌데도 리랜더링 되는 경우가 있음
* React.memo는 객체 외에 prop 값에도 작동하게끔 할 수 있음 -> useCallback
* useCallback: 컴포넌트 실행 전반에 걸쳐 함수를 저장할 수 있게 하는 훅 -> 리액트에 우리는 이 함수를 저장할 것이고 매번 실행할 때마다 이 함수를 재생성할 필요가 없다는 걸 알릴 수 있음 -> 동일한 함수 객체가 메모리의 동일한 위치에 저장되므로 memo를 사용할때 예상치 못한 리랜더링을 막아줄 수 있다 -> 리액트의 내부저장곤간에 저장 해서 함수 객체가 실행될때마다 이를 재사용가능
* ex) 어떤 함수가 절대 변경되어서는 안된다면 useCallback을 사용해서 함수를 저장하면된다
```
  const changeTitleHandler = useCallback(() => {
    
    if(listTitle === 'My List'){
    setListTitle('New Title');
    }else {
      setListTitle('My List');
    }
  }, []);
  //changeTitleHandler 한번만 실행하고 실행 x
```
  
* useMemo: 의존성 변경이 되지 않으면 캐싱하고 있던 리턴값을 바로 리턴하고 의존성 변경되면 함수가 실행되면서 리턴값을 뱉는다
* 함수를 호출하고 이함수에서 리턴된 값을 리턴한다. useMemo를 호출할 때마다 dependenice를 먼저 확인하는데 [] 에서 바뀐값이 없다면 캐싱된 값을 리턴한다.


## useMemo와 useEffect 차이점: useEffect는 side-effect를 위한훅, useMemo는 side-effect가 존재하면 안됨 즉 useMemo의 콜백함수는 순수함수여야함

* useMemo: 값 리턴, useMemo를 이용한 데이터저장은 메모리를사용
* useCallback: 함수리턴
* useCallback: 함수를 저장하고 이를 재사용할 수 있는데 의존성 주입을 왜해줘야함? -> 클로저이기 때문 -> 외부 데이터에의해서 변경되면 안됨 -> 주입을 받고 그 값으로 해줘야 함
* useMemo, sueCallback는 의존적이어야한다
* React.memo, useMemo, useCallback 공통점: 불필요한 렌더링 또는 연산을 제어하는 용도로 성능 최적화에 그 목적이 있다.
* 차이점: 
  * React.memo: 클래스형 컴포넌트, 함수형 컴포넌트 모두 사용가능
  * useMemo, useCallback: hook 이기 때문에 함수형 컴포넌트 안에서만 사용가능
  * useMemo는 함수의 연산량이 많을때 이전결과값을 재사용하는목적, 배열이나 객체가 재생성되는 것을 방지도 가능
  * useCallback는 함수가 재생성 되는것을 방지하기 위한 목적

* DOM(Document Object Model): 웹페이지나 웹 앱에 있는 HTML 요소들을 구조적으로 표현한것 -> 개발자가 JS를 통해 콘텐츠를 수정할 수 있기 때문에 유용하다. 또한 구조화된 형식으로 되어 있어서 특정 대상을 선택가능하고, 코드작업이 쉬워진다
* DOM의 단점: 노드의 수가 많아질수록 속도가 느려지고, DOM 업데이트에 잦은 오류를 발생시킨다
* 버추얼돔: DOM을 가볍게 만든 JS 표현, 주로 React, Vue, 같은곳에 사용 -> 가상DOM은 실제로 스크린에 랜더링 하는것이 아니기 때문에 MDOM을 직접 업데이트 하는것보다 상대적으로 빠르다
* 배열도 참조값
* fetch함수: 프로미스라는 객체 반환 
* 커스텀 훅: 정규함수, 안에 상태를 설정할 수 있는 로직을 포함한 함수 -> 커스텀 훅을 만들어서 재사용 가능한 함수에 상태를 설정하는 로직을 아웃소싱 가능
  * 정규함수와는 다르게 다른 커스텀 훅을 포함한 다른 리액트 훅을 사용가능
  *  커스텀함수는 무조건 use로 시작해야한다. 리액트에게 이 함수가 커스텀 훅임을 알려주며 이는 리액트가 해당 함수를 훅의 규칙에 따라 사용하겠다고 보장해주는것
  *  커스텀 훅을 호출하면 호출한 컴포넌트에 상태설정, 발동된다.
  *  커스텀 훅의 상태가 바뀌면 호출한 컴포넌트도 리랜더링 된다
  *  커스텀 훅을 유연하게 만들어서 재사용하기 쉽게 만들어야 한다
  *  의존성을 없애는게 가장중요
  ```
  useHttp({url:'aslkdjasd'}); -> 컴포넌트 재평가마다 매번 재생성
  -> 이걸 
  fetchTasks(
      { url: 'aslkdjasd' },
      transformTasks
    );
  콜백함수로 빼주면 의존성을 없앨 수 있음
  ```

* 함수.bind(): 새롭게 바인딩한 함수를 만드는 함수,바인딩한 함수는 원본 함수 객체를 감싸는 함수로써, 바인딩한함수를 호출하면 일반적으로 래핑된 함수가 호출된다  ->this가 내가 정한 object 로 고정된다 -> 함수가 바로실행되지 않음 -> 향후 실행을 위해 호출되는 함수를 준비
  * 함수를 사전에 구성할 수 있게 해줌 
```
createTask.bind(null, taskText) 
//함수 bind에서 bind에 보내는 첫번째 인자는 실행이예정된 함수에서 this예약어를 사용하게 하는것
//두번째 인자는 호출 예정인 함수가 받는 첫번째 인
//
```
* 바인드로 나중에 실행시키거나 함수자체를 보내거나 둘중하나하면됨
* 함수를 인자로 보낼때 함수자체에서 실행되기 때문에bind로 걸어줘서 내가 실행하고싶을때 실행되게함
* form 같은거를 조작할 때 바닐라자바스크립트 코드를이용해서 DOM에 접근해서 무언가를 변경하는것은 보통지양해야함
* ex
```
nameInputRef.currnet.value = ''; // x
setnameInput(''); // o
```
* 리액트를 사용해서 DOM 변경하는게 나음
* 리액트에서 상태를 변경하고 그 상태를 가져오면 최신 상태를가져오지 못할 수 도 있음, 그래서 데이터를 넣어주고 그상태를 가져오지 말고 사용된 데이터와 같은 데이터를 가져와서사용해야한다
* 제출버튼을 구현할때 입력값이 다 차지 않으면 버튼을비활성화 할지 안할지에 대해 의견이 분분한데 나는 비활성을안시키는게 나은거같음
* 리액트 훅을 사용하지않아도 되는경우를 생각해보자
* 코드를 이해하기 쉽고 간결하게 쓰는법을 생각하자
* button에서 onblur: 포커스 빠져나갔을때 실행되는 함수
* 모던자바스크립트 문법에서 객체 쓸때 이름이같으면 생략가능
  ```
  {value: enteredValue, hasError:hasError}

  ===

  {value: enteredValue, hasError}
  ```
* useEffect로 입력한 함수는 promise를 반환해서는 안된다
* 클로저를 사용해서 사용해야함
* ex
```
    useEffect(async () =>{
        await fetch //xxx
    })

    ---
    useEffect(() => {
        const fetch = async () => {
            await fetch
        }
        fetchMeals();s
    },[]);
``` 
* 함수 내부에서 에러가 났을 때 캐치하는법
```
fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

    ===

    // fetchMeals 함수가 promise일 경우에는 밑의 코드가 오류가 나기 때문에 위의 코드를 사용해야함 아니면 밑의 try문을 async 함수가 감싸고 있으면 가능 -> 근데 useEffect는 async 가 사용불가능해서 위의 코드를 사용
    try {
        fetchMeals();
    }catch (error){
        setIsLoading(false);
      setHttpError(error.message);
    }
```
* 일단 강의 보다보니까 검증이나 이런거는 백엔드에서 하는듯?
* 상태는 세가지로 구분가능:
  * 1. 로컬상태: 데이터가 변경되어서 하나의 컴포넌트에 속하는 ui에 영향을 미치는상태 -> 보통 useState를 사용해서 컴포넌트 안에서 그런 로컬 상태를 관리
  * 2. 크로스컴포넌트 상태: 하나의 컴포넌트가 아니라 다수의 컴포넌트에 영향을 미치는 상태, ex) 모달컴포넌트가 다수의 컴포넌트에 영향을 미친다 -> prop체인을 구축해야 한다
  * 3. 앱 와이드 상태: 다수의 컴포넌트가 아닌 애플리케이션의 모든컴포넌트에 영향을 미치는 상태
* contextProvider 단점: 중첩이 너무많이 되서 코드 보기 쉽지 않음 -> 하나로 묶을 수 있는데 그러면 컴포넌트 하나가 너무 많은것들을 관리하기 때문에 유지보수아 어려워짐
* 리덕스: 애플리케이션에있는 하나의 중앙 데이터 저장소 -> 2개이상x -> 전체 애플리케이션의 모든 상태를 한곳에 저장
  * 절대로 저장된 데이터를 직접 조작하지 않아야한다
  * 데이터는 절대로 반대방향으로 흐르지 않는다
  * 컴포넌트는 저장소에 있는 그 데이터를 직접 조작하지 않는다
  * 그대신 리듀서라는 개념 사용, 리액트훅의 useReducer과 는 다름
  * 리덕스는 어떤 자브크립트 프로젝트에도 사용할 수 있음
  * \<Provider>\</Provider> 하위에 감싸진 컴포넌트 만이 리덕스를 사용가능
  * 리덕스 useSelector훅: 저장소가 관리하는 상태부분을 우리가 자동으로 선택 가능 -> 리덕스저장소에서 데이터가 변경될때마다 자동으로 컴포넌트가 업데이트가 되고 최신 데이터를 받게 되면 자동으로 반응해서 컴포넌트 함수가 재실행 -> 항상 최신 카운터를 갖게 된다 -> useSelector훅이 그래서 아주 유용한 훅
  *  리덕스는 컴포넌트가 제거되거나 DOM에서 제거되면 react-redux도 자동으로 구독을 해준다
  *  리덕스를 사용할때 절대 기존의 state를변경해서는 안된다 -> 리덕스툴킷과 createSlice함수를 사용하면 됨 -> 이 두개가 코드 감지하고 자동으로 원래있는 상태를 복제하고 새로운 상태객체를 생성하고, 모든 상태를 변경할 수 없게 유지하고 우리가 변경한 상태는 변하지 않도록 오버라이드
* 리덕스툴킷이라고 자동으로 상태를 복사해주기 때문에 사용자가 상태관리하면서 하는 실술르 줄일 수 있음
```
reducers: {
    login(state) { //여기서 state는 리덕스가 자동으로 제공하는 현재상태
      state.isAuthenticated = true;
    },
```
* 리듀서 함수는 반드시 순수함수여야하고 부수효과가 없고 동기식이어야한다
* reducers에서  
  ```
  a(state, action) {
    const b = action.payload;
  } 
  a(10) //이면 action.payload에 10이 들어감
  ```

* 리듀서 함수 안에 사이드이팩트가 들어가면 안되는데, 그떈 useEffect를 사용하면 된다 -> useSelector로 받아온 값을 useEffect종속성에 넣으면 그 값이 바뀌면 useEffect가 실행 -> 근데 useEffect는 처음 렌더링될때 실행이 되는데 이걸 막아야함 -> 처음에 비어있는 값을 백엔드로 보내고 거기에 저장된 모든 데이터를 덮어쓰기 때문
* 함수 같은거 사용할때 try catch 문 사용할때  throw 던지는법
```
  throw new Error('asdasdasd');
```
* thunk: 다른작업이 완료될때까지 작업을 지연시키는 단순한 함수
* dispatch는 작업객체가 아닌 함수인 작업을 디스패치하는것으로 확인되면 해당함수를 자동으로 실행한다
```
export const fetchCartData = () => {
  
  return async (dispatch) => { //자동으로 dispatch(fetchCartData) 할때 dispatch를 넣어준다
```
* react-router을 사용할때는 Link를 통해서 이동가능하다
```
<Route path = '/welcome'>
  <Welcome />
</Route>
```
* a href를 사용하면 링크누를때마다 새페이지를 로드하는데 그러면 새로운 요청을 보낸다는뜻 -> 새링크가 시작되기 때문에 이 애플리케이션에서 가질 수 있는 어플리케이션 상태를 잃게된다
* Link를 사용하면 된다
* NavLink: 링크에 스타일을 넣을 때 사용
* product/:productid == product/\<any value>
* : 뒤에 어떤거가와도 product링크로 이동
* useParams로 url 데이터를 가져올 수 있음
```
const params = useParams();
console.log(params.productId);
```
* 리액트라우터를 사용할 때 현재경로와 일치하는 모든 라우트가 로드된다
* product  
* product/:productid 일때 url product/:productid 쓰면 product 링크에있는거 불러오고 그밑에 product/:productid 링크 컴포넌트를 불러옴
* 그럴때는 라우터 위에 \<Switch>를 사용하면된다
* \<Switch>: 첫번째로 매칭되는 path를 가진 컴포넌트를 렌더링 시킨다
* \<Route> 안에 excat prop를 사용하면 딱 일치해야만 그라우터가 불러져온다
* 중첩라우트: 기본페이지가 아닌 페이지 내부에도 라우트가 필요할 때 사용
* asd/:12 로 설정해놓고 asd/12 로 가면 parse로 12 가져올 수 있음
* \<Route path='*'>\</Route>: 리액트 라우터에 모든 경로, 모든 url이 이 라우트와 일치해야 한다는 신호를 보냄
* react-router-dom useHistory: push 같은거를 사용해서 이전으로 돌아갈 수 있음
* react-router-dom Prompt: 다른곳으로 이동할 때 자동으로 감시, 특정조건이 충족되면 떠나기전에 경고를 표시해줌prompt
* eact-router-dom useLocation: location 객체에 접속하게 하고 location 객체엔 최근 로드된 페이지와 URL 에 대한 정보가 있다.
* react-router-dom useRouteMatch: url을 가져와서 보다 유연하게 url을 짤수가있음
* 리액트 라우터가 버전6로 업데이트 되었다.
  * Switch -> Routes  
  * \<Route path='/welcome' element = {\<Welcome />} />
  * expact 도 사라짐 -> 그럼 비슷한 링크는 다나오는거 아니야? -> /products/* 을 붙이면 된다 -> 그래서 라우트의 순서도 상관이 없어짐 -> 근데 * 없이도 리액트 라우터에서 알아서 가장 연관 깊은 라우트로 보내준다
  * activeClassName 프로퍼티 삭제 -> classname{(navData) => {navData.isActive ? classes.active: ''}}
  * Redirect -> Navigate -> 그냥 \<Route path="/" element = {Navigate to="welcome"} /> -> 현재 펭지를 새페이지로 교환하는 리디렉션을 원한다면 \<Route path="/" element = {Navigate replace to="welcome"} />
  * Route가 한개여도 Routes로 감싸야함
  * 중첩 라우트면 그전의 url은 안넣어도 된다. 
  * 중앙에 모든 라우트를 정의하고 Outlet 컴포넌트를 사용하면 알아서 중첩이된다.
  * useHistory -> useNavigate 훅 -> useNavigate(-2) 를 사용하면 이전의이전페이지로 이동
* 6.4 버전: 데이터 fetching, submission을 간소화한 기능이 추가됨
  * Route에서 loader: \<Route index element= {\<asdasd /> loader = {blogPostsLoader}}>: 라우트로 이동할때마다 자동으로 blogPostsLoader 함수 호출하고 반환한 데이터를 자동으로 가져와서 asdasd 컴포넌트에서 사용가능 -> useLoaderData훅을 사용하면됨
  * BrowserRouter는 더이상 사용할 수 없음 -> RouterProvider 컴포넌트 사용
  * Route index프로퍼티: 부모라우트의 경로가 활성화 되면 렌더링 된다
  * Route errorElement 프로퍼티: 데이터 패칭을 수행하는 라우트에 사용해서 error이 발생하면 errorElement가 실행 -> 문제가 생겼을 때 렌더링될 컴포넌트나 jsx 코드를 정의할 수 있음
  * useNavigation 훅: 이동정보 일부를 활용하게 해주는 객체를 제공하는 훅 ,해당 객체의 state 프로퍼티에 엑세스 하게 해준다
  * 리액트 라우터는 페이지의 데이터가 전부 로드될떄까지 기다렷다가 페이지를 이동한다 -> defer 함수를 사용-> 데이터를 가져오는 함수를 defer로 감싸면됨
  * ```
    defer({posts: getSlowPosts()});
    ```

  * 하면 위의 시간동안 Await 컴포넌트가 띄워짐 -> Suspense 컴포넌트로 Awiat 를 감싸야함
  * useFetcher: 백그라운드로 데이터를 보내고 싶을때 사용 ex) 뉴스레터 보내고 그페이지에 계속 있고 싶을 때 사용
* 서버 인증방법
  *  서버 사이드 세션: 전통적이면서 훌륭한 인증처리방법: 사용자 접근을 허가한 서버가 허가를 받을 클라이언트 사용자의 고유 ID를 저장
     * 단점: 백엔드와 프론트엔드의 결합이 긴밀하면 이상 없지만 분리되어 있으면 이야기가 달라진다 -> 프론트, 백이 나눠저있는 경우에는 사용하면 안된다. -> 서버는 무상태여야함 -> 즉 접속한 클라이언트의 데이터를 저장해서는 안된다
  *  인증 토큰 사용: 그래서 인증토큰을 사용한다 -> 사용자가 이메일과 비밀번호로 서버에 자격증명을 보내면 서버가 그걸 데이터베이스에 저장된 이메일/비밀번호를 확인하는것 까지는 같음 -> 자격이 증명되면 서버가 허가 토큰(이메일 주소를 비롯한 각종데이터가 인코딩된 문자열)이라는걸 생성 -> 사용되는키는 클라이언트는 모르고 서버만 알아야함 -> 토큰은 서버에 저장되지 않고 클라이언트에 다시 전송되지만 토큰을 생성하는 법은 서버만암 -> 서버는 id를 저장하지않고 자신이 생성한 토큰인지 확인 -> 토큰생성에 사용된 개인키를 아는건 서버뿐 -> 토큰이 위조됐거나 다른키로 생성되었으면 서버가 이를 감지하고 접근 거부
  
*  토큰은 앱와이드 상태여야한다 => 앱와이드 상태를 관리할때는 컨텍스트 api와 리덕스가 있다
*  !!: 빈문자열이 아니면 true반환, 빈문자열이면 false 반환
*  인증 토큰 기법의 핵심: 클라이언트의 어떤 정보도 서버에 저장되지 않는 다는점
*  네비게이션가드: ex 로그인이 되어있지 않은데 url 에 직접 쳐서 들어가면 들어가지는 걸 막는 방법
* 토큰 받아와서 리랜더링 하면 없어지기 때문에 따로 저장을 해야한다
* useEffect로 함수 실행할때 useCallback 사용해야하고 의존성 추가해야하는데 브라주저 빌트인 함수여서 의존성 추가하지 않아도 된다
* LazyLoading: 해당 코드가 필요할 때만 그 특정 코드를 로딩하는것 -> 왜쓰냐면 코드를 압축해서 사용자에게 한번에 보내기 때문에 우리가 최초의 코드를 최대한 작게 만들어야함 -> 특정한 코드는 진짜로 해당 페이지에 들어올 때만 다운로드 되도록 해야한다 -> 코드를 여러 덩어리, 여러 번들로 나누고 각각 필요할때만 다운로드 하는것이 레이지 로딩 -> 라우팅을 사용하는경우 구현하기 편하다
* import문 따라서 모든 코드가 미리 다운로드되고 해당 페이지와 해당페이지에서 사용하는 모든 컴포넌트에 대한 코드를 모든 페이지에 방문하지 않더라도 다운로드한다
```
const Login = lazy(() => import('@/pages/login/LoginPage').then(module => ({ default: module.Login })))

<Route path={RouterPath.LOGIN} element={<Login />} />
```
* lazy 로 다울로드 하면 얼마나 걸릴지 모르기 때문에 \<Suspense> 로 감싸줘야함 -> 리액트 라이브러리 자체에서 제공되는 특수 컴포넌트
```
<Suspense
  fallback={
    <LoadingSpinner / >
  }
>
```
* join 함수: 
```
arr  = ['a', 'b', 'c'];
arr.join(' '); // "a b c"
```

* Unit Test: 함수, 컴포넌트 테스트: 단위테스트는 가장 일반적이고 중요한 종류의 테스트 -> 모든 개별단위를 자체적으로 테스트하면 전체 애플리케이션도 작동한다는뜻
* 단위테스트와 통함테스트 만큼 많지는 않음
* 무엇을 테스트할지, 그리고 그것을 어떻게 테스트 할지 알아야한다
* 단위테스트를 할때는 서로 다른 기본 구성요소들을 테스트 해보아야한다 -> 앱을구성하는 구성요소들 -> 정말 작은 구성요소들을 테스트 해야한다 -> 작고, 집중된 테스트로 각각 하나의 주요사항만 테스트하는것
* 리액트에서 테스트하려면 테스팅 코드를 실행해야하는데 이것을 위해서는 추가적인 도구와 설정이 필요함 대부분 jest라는 툴을 사용
* 시뮬레이션 할때는 React Testing Library 사용
* 위의 두개를 사용해서 테스트함
* 테스트 코드를 사용해야하는이유: 시간이 더 단축된다
* 테스트코드 안쓸떄: 
   * 1. 코드수정
   * 2. 서버동작
   * 3. 필요에따라 테스트에 필요한 데이터를 db 입력
   * 4. 브라우저를 통해 우리의 서버에 접속하고 테스트 대상 메소드를 동작시키는 요청
   * 5. 테스트를 마치고 DB데이터정리
   * 6. 과정반복
* 테스트코드 작성할때
  * 1. 코드수정
  * 2. 테스트코드를 실행(테스트코드를 이미 작성했다는 가정)
  * 3. 결과확인