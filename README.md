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
```
* onChange 사용할때 인풋값 가져오는법
```
onChange = {(e) => {console.log(e.target.value);
    }
}
```