import React, { useEffect, useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  console.log(props.items);
  const { items } = props; 
  console.log(items);
  console.log('1111');

  const sortedList = useEffect(() => {
    console.log('Items sorted');
    // return props.items.sort((a, b) => a - b);
  }, [items]); 


  console.log('DemoList RUNNING');



  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {/* {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default DemoList;
