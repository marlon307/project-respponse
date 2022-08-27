import React, { useState, useCallback } from 'react';
import { GetServerSideProps } from 'next';
// import LoadingImage from '../../components/LoadImage';
// import AddBag from '../../components/Buttons/AddBag';
import { api2 } from '../../service/api';
import HeadSEO from '../../components/Head/HeadSEO';
// import CardProduct from '../../components/Cards/CardProduct/CardProduct';
// import { SwiperButtonNext, SwiperButtonPrev } from '../../components/Buttons/SwiperButton';
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

type TFeature = {
  [key: string]: {
    sku: string;
    color: string;
    qtd: string;
    size: string;
    [key: string]: string | number;
  };
};

type TInfo = {
  category: string;
  title: string;
  discount: string;
  price: string;
  details: string;
  espec: string;
  [key: string]: string | number;
};

function ProductId({ list }: TList) {
  const [infoProduct, setInfoProduct] = useState<TInfo>({
    category: 'Selecionae uma categoria.',
    title: '',
    discount: '',
    price: '',
    details: '',
    espec: '',
  });
  const [featureProduct, setFeatureProduct] = useState<TFeature>({
    0: {
      sku: '',
      size: '0',
      qtd: '',
      color: '#fff',
    },
  });

  const handlerChangeInfo = useCallback((target: HTMLInputElement | any) => {
    const { name, value } = target;

    setInfoProduct((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  }, []);

  const handlerChangeFeature = useCallback((target: HTMLInputElement) => {
    const { name, value } = target;
    setFeatureProduct((currentState) => ({
      ...currentState,
      [target.id]: {
        ...currentState[target.id],
        [name]: value,
      },
    }));
  }, []);

  const changeFeatureColor = useCallback(({ target }: any) => {
    const { name, value, dataset } = target;
    setFeatureProduct((currentState) => ({
      ...currentState,
      [dataset.index]: {
        ...currentState[dataset.index],
        [name]: value,
      },
    }));
  }, []);

  function addFeature() {
    setFeatureProduct((currentState) => ({
      ...currentState,
      [Object.keys(currentState).length + 1]: {
        sku: '',
        size: '0',
        qtd: '',
        color: '#fff',
      },
    }));
  }

  return (
    <>
      <HeadSEO
        title="Criar Produto"
        description="Criando Produto"
        keywords="Criando Produto"
      />
      <div className={ style.contprod }>
        <div className={ style.slide }>
          <div className={ style.panels }>
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
          </div>
        </div>
        <div className={ style.products_similar }>
          <h3>Produtos com estoque baixo</h3>
          <div>
            {/* { similar.map((productSimilar: TypeProduct['similar'][0]) => (
              <SwiperSlide key={ productSimilar.id } className={ style.panel }>
                <CardProduct objectProduct={ productSimilar } />
              </SwiperSlide>
            )) } */}
          </div>
        </div>
        <div className={ style.maincontentinfo }>
          <div className={ style.panel_addproduct }>
            <h3>Categoria</h3>
            <div className={ style.select }>
              <pre>{ infoProduct.category }</pre>
              <ul>
                { list.list_ctg.map(({ id, category_name }) => (
                  <li key={ id }>
                    <button
                      type="button"
                      name="category"
                      value={ category_name }
                      data-index="ctg"
                      onClick={ (e) => handlerChangeInfo(e.target) }
                    >
                      { category_name }
                    </button>
                  </li>
                )) }
              </ul>
            </div>
            <Input
              id="title"
              type="text"
              name="title"
              placeHolder="Titulo"
              inputValue={ handlerChangeInfo }
              ivalue={ infoProduct.title }
              msgError="Informe um titulo"
            />
            <Input
              id="discount"
              type="text"
              name="discount"
              placeHolder="Desconto"
              inputValue={ handlerChangeInfo }
              ivalue={ infoProduct.discount }
              msgError="Informe um desconto"
            />
            <Input
              id="price"
              type="text"
              name="price"
              placeHolder="Preço"
              inputValue={ handlerChangeInfo }
              ivalue={ infoProduct.price }
              msgError="Informe um preço"
            />
            <div className={ style.palet_colors }>
              { Object.keys(featureProduct).map((key) => (
                <div className={ style.list_colors } key={ key }>
                  <div className={ style.color }>
                    <div className={ style.select }>
                      <span style={ { backgroundColor: featureProduct[key].color } } />
                      <ul>
                        { list.list_colors.map(({ id, color, color_name }) => (
                          <li key={ id }>
                            <button type="button" name="color" value={ color } data-index={ key } onClick={ changeFeatureColor }>
                              <span className={ style.color } data-color={ color } style={ { background: `${color}` } } />
                              { color_name }
                            </button>
                          </li>
                        )) }
                      </ul>
                    </div>
                    <div className={ style.select }>
                      <pre>{ featureProduct[key].size }</pre>
                      <ul>
                        { list.list_sizes.map(({ id, size }) => (
                          <li key={ id }>
                            <button type="button" name="size" value={ size } data-index={ key } onClick={ changeFeatureColor }>
                              { size }
                            </button>
                          </li>
                        )) }
                      </ul>
                    </div>
                    <Input
                      id={ key }
                      type="text"
                      name="qtd"
                      placeHolder="Quantidade"
                      inputValue={ handlerChangeFeature }
                      ivalue={ featureProduct[key].qtd }
                      msgError="Quantidade"
                    />
                    <Input
                      id={ key }
                      type="text"
                      name="sku"
                      placeHolder="SKU"
                      inputValue={ handlerChangeFeature }
                      ivalue={ featureProduct[key].sku }
                      msgError="SKU"
                    />
                  </div>
                </div>
              )) }
              <BtnAdd eventBtn={ addFeature! } title="Adicionar cor" />
            </div>
            <div className={ style.gen }>
              <h3>Género</h3>
              <div className={ style.gen_options }>
                { list.list_gender.map(({ id, gender, gender_name }) => (
                  <InputRadio
                    key={ id }
                    checked={ id === 1 }
                    iId={ gender }
                    name={ gender_name }
                    family="gender"
                    iValue={ id }
                    execFunction={ () => { } }
                  />
                )) }
              </div>
            </div>
            <textarea
              name="details"
              id="details"
              placeholder="Detalhes"
              value={ infoProduct.details }
              onChange={ (e) => handlerChangeInfo(e.target) }
              maxLength={ 500 }
            />
            <textarea
              name="espec"
              id="espec"
              placeholder="Especificações"
              value={ infoProduct.espec }
              onChange={ (e) => handlerChangeInfo(e.target) }
              maxLength={ 500 }
            />
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
