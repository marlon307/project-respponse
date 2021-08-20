import React, { createRef, useState, useCallback } from 'react';
import style from './styles/drag.module.scss';

type Props = {
  children: any
}

function DragItens({ children }: Props) {
  const ref = createRef<HTMLDivElement>();
  const [move, setMove] = useState(0);

  const moveMouse = useCallback((event) => {
    const teste = event.pageX;
    setMove(teste);
  }, []);

  function mouseEvent(event: { type: string; }) {
    const { current } = ref;
    if (event.type === 'mousedown') current?.addEventListener('mousemove', moveMouse);
    else current?.removeEventListener('mousemove', moveMouse);
  }

  return (
    <section
      id="testesss"
      className={ style.contentcarousel }
      ref={ ref }
      onMouseDown={ mouseEvent }
      onMouseUp={ mouseEvent }
      role="button"
      tabIndex={ 0 }
    >
      <div
        className={ style.drag }
        style={ { transform: `translate3d(${move}px,0,0)` } }
      >
        { children }
      </div>
    </section>
  );
}

export default DragItens;
