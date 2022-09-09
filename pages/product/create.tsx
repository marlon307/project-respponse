import React, { useState, useCallback } from 'react';
import { GetServerSideProps } from 'next';
import LoadingImage from '../../components/LoadImage';
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
    qunatity: string;
    size: string;
    discount: string;
    price: string;
    listImage: any;
    // [key: string]: string | number;
  };
};

type TInfo = {
  category: string;
  title: string;
  details: string;
  espec: string;
  [key: string]: string | number;
};

const fakeImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

function ProductId({ list }: TList) {
  const [selectedFeature, setSelectedFeature] = useState(1);
  const [infoProduct, setInfoProduct] = useState<TInfo>({
    category: 'Selecionae uma categoria.',
    title: '',
    details: '',
    espec: '',
  });
  const [featureProduct, setFeatureProduct] = useState<TFeature>({
    1: {
      sku: '',
      size: '0',
      qunatity: '',
      color: '#fff',
      price: '',
      discount: '',
      listImage: {},
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
        qunatity: '',
        color: '#fff',
        discount: '',
        price: '',
        listImage: {},
      },
    }));
    setSelectedFeature((currentFeatureVisible) => currentFeatureVisible + 1);
  }

  function loadImg({ target }: any) {
    const {
      name, dataset, files,
    } = target;

    if (files[0].type === 'image/png') {
      setFeatureProduct((currentState) => ({
        ...currentState,
        [dataset.index]: {
          ...currentState[dataset.index],
          listImage: {
            ...currentState[dataset.index].listImage,
            [name]: URL.createObjectURL(target.files[0]),
          },
        },
      }));
    }
  }

  return (
    <>
      <HeadSEO
        title="Criar Produto"
        description="Criando Produto"
        keywords="Criando Produto"
      />
      <form className={ style.contprod }>
        <div className={ style.slide }>
          <div className={ style.panels }>
            { Object.keys(featureProduct[selectedFeature]?.listImage ?? {}).map((key_image) => (
              <div className={ style.contsimg } key={ key_image }>
                <LoadingImage
                  src={ featureProduct[selectedFeature].listImage[key_image] }
                  quality={ 80 }
                  alt="title"
                />
              </div>
            )) }
          </div>
          <div className={ style.list_upload }>
            { [...Array(6).keys()].map((upload_panel) => (
              <label htmlFor={ `img-${upload_panel}` } className={ style.load_img } key={ upload_panel }>
                <LoadingImage
                  src={ featureProduct[selectedFeature]?.listImage[`img-${upload_panel}`] ?? fakeImage }
                  quality={ 80 }
                  alt="upload_image"
                />
                <input
                  id={ `img-${upload_panel}` }
                  type="file"
                  name={ `img-${upload_panel}` }
                  accept=".png"
                  onChange={ loadImg }
                  data-index={ selectedFeature }
                />
              </label>
            )) }
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
            <div className={ style.palet_colors }>
              { Object.keys(featureProduct).map((key) => (
                <div className={ style.list_colors } key={ key }>
                  <div className={ style.color }>
                    <div className={ style.line }>
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
                    </div>
                    <div className={ style.line }>
                      <Input
                        id={ key }
                        type="text"
                        name="qunatity"
                        placeHolder="Quantidade"
                        inputValue={ handlerChangeFeature }
                        ivalue={ featureProduct[key].qunatity }
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
                    <div className={ style.line }>
                      <Input
                        id={ key }
                        type="text"
                        name="price"
                        placeHolder="Preço"
                        inputValue={ handlerChangeFeature }
                        ivalue={ featureProduct[key].price }
                        msgError="Preço"
                      />
                      <Input
                        id={ key }
                        type="text"
                        name="discount"
                        placeHolder="Desconto"
                        inputValue={ handlerChangeFeature }
                        ivalue={ featureProduct[key].discount }
                        msgError="Desconto"
                      />
                    </div>
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
      </form>
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
