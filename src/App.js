import React, { useState, useCallback, useMemo, useEffect } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  console.log('000');
  const changeTitleHandler = useCallback(() => {
    console.log('aaaa');
    if(listTitle === 'My List'){
    setListTitle('New Title');
    }else {
      setListTitle('My List');
    }
  }, [listTitle]);

  const a = (() => {});
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  useMemo(() => {
    console.log('111');
  }, [a]);

  useEffect(() => {
    console.log('222');
  }, [a]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
