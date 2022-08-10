import React, { useState, useEffect } from 'react';
// import { GetStaticProps } from 'next';
import { Swiper/* , SwiperSlide */ } from 'swiper/react';
// import LoadingImage from '../../components/LoadImage';
// import { checkColorAvailable, checkSizeAvailable } from '../../hooks/useCheckAvailable';
// import { DetailsCard, Spec } from '../../components/Cards';
import AddBag from '../../components/Buttons/AddBag';
// import BarSize from '../../components/Bars/BarSize';
// import BarColors from '../../components/Bars/BarColors';
import { TypeProduct } from './product';
import api from '../../service/api';
import HeadSEO from '../../components/Head/HeadSEO';
// import CardProduct from '../../components/Cards/CardProduct/CardProduct';
import { SwiperButtonNext, SwiperButtonPrev } from '../../components/Buttons/SwiperButton';
import style from './style.module.scss';
import { Input } from '../../components/ComponentsForm';
import BtnAdd from '../../components/Buttons/BtnAdd';

function ProductId({ product }: TypeProduct) {
  const [sizeChecked, setSizeChecked] = useState('');
  const [configProduct, setConfigProduct] = useState('');
  const [colorChecked, setColorChecked] = useState({
    color: '',
    colorName: '',
  });

  // useEffect(() => {
  //   checkSizeAvailable(options, colorChecked.color);
  //   checkColorAvailable(options, sizeChecked);
  // }, [colorChecked, options, sizeChecked]);

  useEffect(() => {
    setSizeChecked('');
    setColorChecked({
      color: '',
      colorName: '',
    });
  }, []);

  return (
    <>
      <HeadSEO
        title="Criar Produto"
        description="Criando Produto"
        keywords="Criando Produto"
      />
      <div className={ style.contprod }>
        <div className={ style.slide }>
          <Swiper
            className={ style.panels }
            slidesPerView="auto"
            wrapperTag="section"
          >
            <SwiperButtonNext />
            <SwiperButtonPrev />
            {/* { options[0].imgs.map(({ urlImg, imgid }: any) => (
              <SwiperSlide key={ imgid } className={ style.contsimg } tag="figure">
                <LoadingImage
                  src={ urlImg }
                  quality={ 80 }
                  alt={ title }
                  layout="fill"
                />
              </SwiperSlide>
            )) } */}
          </Swiper>
        </div>
        <div className={ style.products_similar }>
          <h3>Produtos Similares</h3>
          <Swiper
            slidesPerView="auto"
            wrapperTag="section"
            spaceBetween={ 16 }
          >
            <SwiperButtonNext />
            <SwiperButtonPrev />
            {/* { similar.map((productSimilar: TypeProduct['similar'][0]) => (
              <SwiperSlide key={ productSimilar.id } className={ style.panel }>
                <CardProduct objectProduct={ productSimilar } />
              </SwiperSlide>
            )) } */}
          </Swiper>
        </div>
        <div className={ style.maincontentinfo }>
          <div className={ style.panel_addproduct }>
            <select>
              <option value="Categorias" disabled selected hidden>Categorias</option>
              <option value="Terno">Terno</option>
            </select>
            <Input
              id="title"
              type="text"
              name="title"
              placeHolder="Titulo"
              inputValue={ setConfigProduct }
              ivalue={ configProduct }
            />
            <Input
              id="discount"
              type="text"
              name="discount"
              placeHolder="Desconto"
              inputValue={ setConfigProduct }
              ivalue={ configProduct }
            />
            <Input
              id="price"
              type="text"
              name="price"
              placeHolder="Preço"
              inputValue={ setConfigProduct }
              ivalue={ configProduct }
            />
            <div className={ style.palet_colors }>
              <div className={ style.list_colors }>
                <div className={ style.color }>
                  <div className={ style.select }>
                    <span />
                    <ul>
                      <li>
                        <span />
                        Color Name
                      </li>
                    </ul>
                  </div>
                  <div className={ style.select }>
                    <span>PP</span>
                    <ul>
                      <li>GGG</li>
                      <li>GGG</li>
                      <li>GGG</li>
                    </ul>
                  </div>
                  <Input
                    id="qtd"
                    type="text"
                    name="qtd"
                    placeHolder="Quantidade"
                    inputValue={ setConfigProduct }
                    ivalue={ configProduct }
                  />
                  <Input
                    id="sku"
                    type="text"
                    name="sku"
                    placeHolder="SKU"
                    inputValue={ setConfigProduct }
                    ivalue={ configProduct }
                  />
                </div>
              </div>
              <BtnAdd eventBtn={ () => { } } title="Adicionar cor" />
            </div>
            <textarea name="mindescription" id="mindesc" placeholder="Descrição minima" />
            <textarea name="details" id="details" placeholder="Detalhes" />
            <textarea name="espec" id="espec" placeholder="Especificações" />
          </div>
          <AddBag
            productId={ product }
            colorSelected={ colorChecked }
            sizeSelected={ sizeChecked }
          />
        </div>
      </div>
    </>
  );
}

export default ProductId;

type TRequestProduct = {
  data: {
    product: TypeProduct['product'],
    similar: TypeProduct['similar'],
  }
};

export const getInitialProps = async ({ params }: any) => {
  const productId = Number(params.id);

  const {
    data: { product, similar },
  }: TRequestProduct = await api.get(`/product/${productId}`)
    .catch((error) => ({ data: error.message }));

  return {
    props: { product, similar },
  };
};
