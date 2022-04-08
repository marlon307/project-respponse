import React, { useCallback, memo } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import style from './style.module.scss';

export type PFColor = {
  cName: string;
  color: string;
};

function FColor({ cName, color }: PFColor) {
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    // dispatch(addFilter({ cName, color }));
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

export default memo(FColor);
