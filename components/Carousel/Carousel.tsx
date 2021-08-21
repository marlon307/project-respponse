import React, { createRef, useState, useCallback } from 'react';
import style from './styles/drag.module.scss';

type Props = {
  children: any
}

interface IEvent {
  type: string;
  clientX: number;
}

function DragItens({ children }: Props) {
  const ref = createRef<HTMLElement>();
  const [move, setMove] = useState(0);
  const [initpositionClick, setInitpositionClick] = useState(0);

  const moveMouse = useCallback((event) => {
    const position1 = event.layerX - initpositionClick;
    // setMove(position1);
    // console.log(event);
  }, []);

  function mouseEvent(event: IEvent) {
    const { current } = ref;

    if (event.type === 'mousedown') {
      current?.addEventListener('mousemove', moveMouse);
      setInitpositionClick(event.clientX);
    } else {
      current?.removeEventListener('mousemove', moveMouse);
    }
  }

  return (
    <section
      className={ style.contentcarousel }
      ref={ ref }
      onMouseDown={ mouseEvent }
      onMouseUp={ mouseEvent }
      onMouseLeave={ mouseEvent }
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
