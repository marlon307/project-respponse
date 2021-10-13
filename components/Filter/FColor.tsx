import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import style from './style.module.scss';
import { addFilter } from '../../redux/redux-actions';

export type PFColor = {
  cName: string;
  color: string;
}

function FColor({ cName, color }: PFColor) {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(addFilter({ cName, color }));
  }, []);

  // useEffect(() => handleClick(), []);

  return (
    <label htmlFor={ cName } className={ style.itemfilter }>
      <input
        type="checkbox"
        name="filter"
        id={ cName }
        onClick={ handleClick }
      />
      <div className={ style.filtername }>
        { cName }
        <span style={ { backgroundColor: `${color}` } } />
      </div>
    </label>
  );
}

export default FColor;
