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

  * 함수.bind(): 새롭게 바인딩한 함수를 만드는 함수, 바인딩한 함수는 원본 함수 객체를 감싸는 함수로써, 바인딩한 함수를 호출하면 일반적으로 래핑된 함수가 호출된다  -> this가 내가 정한 object 로 고정된다 -> 함수가 바로 실행되지 않음 -> 향후 실행을 위해 호출되는 함수를 준비
    * 함수를 사전에 구성할 수 있게 해줌 
  ```
  createTask.bind(null, taskText) 
  //함수 bind에서 bind에 보내는 첫번째 인자는 실행이 예정된 함수에서 this예약어를 사용하게 하는것
  //두번째 인자는 호출 예정인 함수가 받는 첫번째 인
  //
  ```
  * 바인드로 나중에 실행시키거나 함수자체를 보내거나 둘중하나 하면됨
  * 함수를 인자로 보낼때 함수자체에서 실행되기 때문에 bind로 걸어줘서 내가 실행하고싶을때 실행되게함
  * form 같은거를 조작할 때 바닐라자바스크립트 코드를 이용해서 DOM에 접근해서 무언가를 변경하는것은 보통 지양해야함
  * ex
  ```
  nameInputRef.currnet.value = ''; // x
  setnameInput(''); // o
  ```
  * 리액트를 사용해서 DOM 변경하는게 나음
  * 리액트에서 상태를 변경하고 그 상태를 가져오면 최신 상태를 가져오지 못할 수 도 있음, 그래서 데이터를 넣어주고 그 상태를 가져오지 말고 사용된 데이터와 같은 데이터를 가져와서 사용해야한다
  * 