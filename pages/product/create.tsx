import React, { useState/* , useEffect */ } from 'react';
import { GetServerSideProps } from 'next';
import { Swiper/* , SwiperSlide */ } from 'swiper/react';
// import LoadingImage from '../../components/LoadImage';
// import { checkColorAvailable, checkSizeAvailable } from '../../hooks/useCheckAvailable';
// import { DetailsCard, Spec } from '../../components/Cards';
// import AddBag from '../../components/Buttons/AddBag';
// import BarSize from '../../components/Bars/BarSize';
// import BarColors from '../../components/Bars/BarColors';
import { api2 } from '../../service/api';
import HeadSEO from '../../components/Head/HeadSEO';
// import CardProduct from '../../components/Cards/CardProduct/CardProduct';
import { SwiperButtonNext, SwiperButtonPrev } from '../../components/Buttons/SwiperButton';
import style from './style.module.scss';
import { Input, InputRadio } from '../../components/ComponentsForm';
import BtnAdd from '../../components/Buttons/BtnAdd';

type TList = {
  list: {
    list_ctg: Array<ICategory>;
    list_colors: Array<IColor>;
    list_sizes: Array<ISize>;
    list_gender: Array<IGender>;
  }
};

function ProductId({ list }: TList) {
  // const [sizeChecked, setSizeChecked] = useState('');
  const [configProduct, setConfigProduct] = useState('');
  // const [colorChecked, setColorChecked] = useState({
  //   color: '',
  //   colorName: '',
  // });

  // useEffect(() => {
  //   checkSizeAvailable(options, colorChecked.color);
  //   checkColorAvailable(options, sizeChecked);
  // }, [colorChecked, options, sizeChecked]);

  // useEffect(() => {
  //   setSizeChecked('');
  //   setColorChecked({
  //     color: '',
  //     colorName: '',
  //   });
  // }, []);

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
          <h3>Produtos com estoque baixo</h3>
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
            <h3>Categoria</h3>
            <div className={ style.select }>
              <pre>Camisa</pre>
              <ul>
                { list.list_ctg.map(({ id, category_name }) => (
                  <li key={ id }>
                    { category_name }
                  </li>
                )) }
              </ul>
            </div>
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
                      { list.list_colors.map(({ id, color, color_name }) => (
                        <li key={ id }>
                          <span className={ style.color } data-color={ color } style={ { background: `${color}` } } />
                          { color_name }
                        </li>
                      )) }
                    </ul>
                  </div>
                  <div className={ style.select }>
                    <pre>GGGG</pre>
                    <ul>
                      { list.list_sizes.map(({ id, size }) => (
                        <li key={ id }>
                          { size }
                        </li>
                      )) }
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
            <div className={ style.gen }>
              <h3>Género</h3>
              <div className={ style.gen_options }>
                { list.list_gender.map(({ id, gender, gender_name }) => (
                  <InputRadio
                    key={ id }
                    checked
                    iId={ gender }
                    name={ gender_name }
                    family="gender"
                    iValue={ id }
                    execFunction={ () => { } }
                  />
                )) }
              </div>
            </div>
            <textarea name="mindescription" id="mindesc" placeholder="Descrição minima" />
            <textarea name="details" id="details" placeholder="Detalhes" />
            <textarea name="espec" id="espec" placeholder="Especificações" />
          </div>
          {/* <AddBag
            productId={ product }
            colorSelected={ colorChecked }
            sizeSelected={ sizeChecked }
          /> */}
        </div>
      </div>
    </>
  );
}

export default ProductId;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { data } = await api2.get('/list_options', {
    headers: {
      authorization: `Bearer ${req.cookies.u_token}`,
    },
  }).catch((error) => ({ data: error.message }));

  if (data.status === 200) {
    return {
      props: { list: data.list },
    };
  }

  return {
    redirect: {
      permanent: false,
      destination: '/',
    },
  };
};
