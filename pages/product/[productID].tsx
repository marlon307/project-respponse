import React, { useState } from 'react';
import Flicking from '@egjs/react-flicking';
import BarColors from '../../components/Bars/BarColors';
import style from './product.module.scss';
import { options } from '../../service/colorsMock';
import BarSize from '../../components/Bars/BarSize';
import AddBag from '../../components/Bars/AddBag';
import { DetailsCard, Spec } from '../../components/Cards';
import Svg from '../../assets/Svg';

function productId() {
  const [itemdrag, setItemDrag] = useState(false);

  return (
    <div className={ style.product }>
      <div className={ style.slide }>
        <BarColors array={ options } />
      </div>
      <div className={ style.infodesc }>
        <div className={ style.mindetail }>
          <p>
            Do mesmo modo, a consulta aos diversos militantes
            desafia a capacidade de equalização de todos os recursos funcionais envolvidos.
          </p>
        </div>
        <div className={ style.infos }>
          <div className={ style.primaryline }>
            <div className={ style.titles }>
              <h1>Berrylush</h1>
              <h2>Top Forever 21 Canelado Preto</h2>
            </div>
            <div className={ style.price }>
              <span>R$ 199,00</span>
            </div>
          </div>
          <div className={ style.secondline }>
            <BarSize array={ options } colorName="Laranja" />
          </div>
          <AddBag />
        </div>
      </div>
      <div className={ style.options }>
        <label htmlFor="detail">
          <input
            type="radio"
            name="dragoption"
            id="detail"
            onClick={ () => setItemDrag(itemdrag) }
          />
          <Svg icoName="spec" />
          Detalhes
        </label>
        <label htmlFor="recomendation">
          <input
            type="radio"
            name="dragoption"
            id="recomendation"
            onClick={ () => setItemDrag(true) }
          />
          <Svg icoName="similar" />
          <span>Produos Similares</span>
        </label>
      </div>
      <section className={ style.slideinfo }>
        <Flicking
          align="prev"
          bounce="100%"
        >
          <div className="panel">
            <DetailsCard />
          </div>
          <div className="panel">
            <Spec />
          </div>
        </Flicking>
      </section>
    </div>
  );
}

export default productId;
