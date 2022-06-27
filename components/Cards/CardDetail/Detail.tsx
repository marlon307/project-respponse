import React from 'react';
import style from './style.module.scss';
import type { TDetail } from './types';

function Detail({ branch, details, gender }: TDetail) {
  return (
    <div className={ style.detail }>
      <h3>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12C4.73478 12 4.48043 12.1054 4.29289 12.2929C4.10536 12.4804 4 12.7348 4 13V21C4 21.2652 4.10536 21.5196 4.29289 21.7071C4.48043 21.8946 4.73478 22 5 22C5.26522 22 5.51957 21.8946 5.70711 21.7071C5.89464 21.5196 6 21.2652 6 21V13C6 12.7348 5.89464 12.4804 5.70711 12.2929C5.51957 12.1054 5.26522 12 5 12ZM10 2C9.73478 2 9.48043 2.10536 9.29289 2.29289C9.10536 2.48043 9 2.73478 9 3V21C9 21.2652 9.10536 21.5196 9.29289 21.7071C9.48043 21.8946 9.73478 22 10 22C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2ZM20 16C19.7348 16 19.4804 16.1054 19.2929 16.2929C19.1054 16.4804 19 16.7348 19 17V21C19 21.2652 19.1054 21.5196 19.2929 21.7071C19.4804 21.8946 19.7348 22 20 22C20.2652 22 20.5196 21.8946 20.7071 21.7071C20.8946 21.5196 21 21.2652 21 21V17C21 16.7348 20.8946 16.4804 20.7071 16.2929C20.5196 16.1054 20.2652 16 20 16ZM15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9V21C14 21.2652 14.1054 21.5196 14.2929 21.7071C14.4804 21.8946 14.7348 22 15 22C15.2652 22 15.5196 21.8946 15.7071 21.7071C15.8946 21.5196 16 21.2652 16 21V9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8Z" fill="#333333" />
        </svg>
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
