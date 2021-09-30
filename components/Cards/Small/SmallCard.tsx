import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import TesteImgUrl from '../../../assets/img/brian-lawson-e9o9sAy5PL4-unsplash 1.png';
import style from './stylesSmallCard.module.scss';
import Svg from '../../../assets/Svg';
import ContentModal from '../../Modal/ContentModal';
import Loading from '../../Loading/Loading';

const CardEdit = dynamic(() => import('../CardEdit/CardEdit'), {
  loading: () => <Loading />,
});

type PSmallCard = {
  removable?: boolean
  editable?: boolean
}

function SmallCard({ removable, editable }: PSmallCard) {
  const [opeModal, setOpenModal] = useState(false);

  function openModalEdit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setOpenModal(true);
  }

  return (
    <>
      <div className={ style.smallcard }>
        <div className={ style.img }>
          <figure>
            <Image
              src={ TesteImgUrl }
              alt="Title"
              quality="90"
              placeholder="blur"
              layout="responsive"
              width={ 130 }
              height={ 165 }
            />
          </figure>
        </div>
        <div className={ style.desc }>
          <h2>Berrylush</h2>
          <h3>Top Forever 21 Canelado Preto</h3>
          <div className={ style.infos }>
            <div className={ style.setting }>
              <span title="Roxo Claro" style={ { background: '#AAB4D9' } } />
              <span title="Tamanho G" style={ { color: '#AAB4D9' } }>G</span>
              <span title="3 Berrylush - Top Forever 21 Canelado Preto" style={ { color: '#AAB4D9' } }>3x</span>
              { editable && (
                <a
                  href="/"
                  aria-label="Editar cor, tamanho e quantidade."
                  title="Editar cor, tamanho e quantidade."
                  onClick={ openModalEdit }
                >
                  <Svg icoName="edit" />
                </a>
              ) }
            </div>
            <div className={ style.price }>
              <span title="Valor da unidade R$ 199,90">R$ 199,90</span>
            </div>
          </div>
        </div>
        { removable && (
          <div className="action" title="Excluir">
            <Svg icoName="trash" />
          </div>
        ) }
      </div>
      <ContentModal
        isOpen={ opeModal }
        openModal={ setOpenModal }
      >
        { opeModal && <CardEdit /> }
      </ContentModal>
    </>
  );
}

export default SmallCard;

SmallCard.defaultProps = {
  removable: true,
  editable: false,
};
