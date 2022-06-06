import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import style from './style.module.scss';
// https://jsfiddle.net/pjqxrgwu/
// https://stackoverflow.com/questions/19669786/check-if-element-is-visible-in-dom
function ScrollSlid({ children, nameClass }: any) {
  const [indexPanel, setIndexPanel] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current!.querySelector(`#panel-${indexPanel}`)!;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    });
  }, [indexPanel]);

  function next() {
    if (indexPanel < children.length - 1) {
      setIndexPanel((stateIndex) => stateIndex + 1);
    }
  }

  function prev() {
    if (indexPanel > 0) {
      setIndexPanel((stateIndex) => stateIndex - 1);
    }
  }

  return (
    <div className={ style.panelsliders }>
      <button
        className={ style.next }
        onClick={ next }
        type="button"
        aria-label="Next"
        data-active={ indexPanel < children.length - 1 }
      />
      <div
        ref={ ref }
        className={ cx(style.mainpanel, nameClass) }
      >
        { children }
      </div>
      {/* <div className={ style.slidecontrols }>
        { children.map((_: any, index: number) => (
          <span
            key={ index }
            aria-hidden="true"
            onClick={ () => setIndexPanel(index) }
            aria-label="control"
            data-active={ index === indexPanel }
          />
        )) }
      </div> */}
      <button
        className={ style.prev }
        onClick={ prev }
        type="button"
        aria-label="Prev"
        data-active={ indexPanel > 0 }
      />
    </div>
  );
}

export default ScrollSlid;
