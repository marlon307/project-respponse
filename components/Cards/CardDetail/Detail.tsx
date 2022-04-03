import React from 'react';
import Svg from '../../../assets/Svg';

import style from './style.module.scss';
import type { TDetail } from './types';

function Detail({ branch, details, gender }: TDetail) {
  return (
    <div className={ style.detail }>
      <h3>
        <Svg icoName="spec" />
        Detalhes do produto
      </h3>
      { details !== undefined && (
        <>
          <span>
            Marca:
            { ' ' }
            { branch }
          </span>
          <span>
            Gênero:
            { ' ' }
            { gender }
          </span>
          <span>
            Modelagem:
            { ' ' }
            { details.model }
          </span>
          <span>
            Manga:
            { ' ' }
            { details.mango }
          </span>
          <span>
            Estampa/Padronagem:
            { ' ' }
            { details.printPattern }
          </span>
          <span>
            Quantidade de Bolsos:
            { ' ' }
            { details.numbPocked }
          </span>
          <span>
            Composição:
            { ' ' }
            { details.composition }
          </span>
          <span>
            Tipo de Tecido:
            { ' ' }
            { details.kindfabric }
          </span>
          <span>
            Lavagem:
            { ' ' }
            { details.wash }
          </span>
          <span>
            { details.material }
          </span>
          <span>
            Características Especiais:
            { ' ' }
            { details.specialFeatures }
          </span>
          <span>
            Medidas Modelo:
            { ' ' }
            { details.modelMeasures }
          </span>
          <span>
            Medidas da peça:
            { ' ' }
            { details.length }
          </span>
        </>
      ) }
    </div>
  );
}

export default Detail;
