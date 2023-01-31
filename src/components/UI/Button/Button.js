import React, { useEffect, useMemo } from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button RUNNING');

  const sortedList2 = useEffect(() => {
    console.log('Items sorted3');
  }, [props.items]); 

  const sortedList3 = useMemo(() => {
    console.log('Items sorted4');
  }, [props.items]); 

  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);