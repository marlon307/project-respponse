import React, { useState, useCallback, FormEvent } from 'react';
import { GetServerSideProps } from 'next';
import LoadingImage from '../../components/LoadImage';
import { api2 } from '../../service/api';
import HeadSEO from '../../components/Head/HeadSEO';
// import CardProduct from '../../components/Cards/CardProduct/CardProduct';
// import { SwiperButtonNext, SwiperButtonPrev } from '../../components/Buttons/SwiperButton';
import style from './style.module.scss';
import { Input, InputRadio } from '../../components/ComponentsForm';
import BtnAdd from '../../components/Buttons/BtnAdd';

type TList = {
  token: string;
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
    colors_id: number;
    quantity: string;
    sizes_id: number;
    discount: string;
    price: string;
    // [key: string]: string | number;
  };
};

type TInfo = {
  categorys_id: number;
  title: string;
  details: string;
  gender_id: number;
  specifications: string;
  [key: string]: string | number;
};

const fakeImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

interface ListColor {
  [key: string]: ISize[]
}

function ProductId({ list, token }: TList) {
  const [selectedFeature, setSelectedFeature] = useState(1);
  const [infoProduct, setInfoProduct] = useState<TInfo>({
    categorys_id: 0,
    title: '',
    gender_id: 0,
    details: '',
    specifications: '',
  });
  const [featureProduct, setFeatureProduct] = useState<TFeature>({
    1: {
      sku: '',
      sizes_id: 0,
      quantity: '',
      colors_id: 0,
      price: '',
      discount: '',
    },
  });
  const [listFiles, setListFiles] = useState<any>({ 1: {} });
  const [listSizes, setListSize] = useState<ListColor>({ 1: [] });

  const handlerChangeInfo = useCallback((target: HTMLInputElement | any) => {
    const { name, value } = target;

    setInfoProduct((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  }, []);

  const changeFeatureColor = useCallback(({ target }: any) => {
    const { name, value, dataset } = target;
    setFeatureProduct((currentState) => ({
      ...currentState,
      [dataset.index]: {
        ...currentState[dataset.index],
        [name]: Number(value),
      },
    }));
  }, []);

  const changeColorOption = useCallback(({ target }: any) => {
    const { value, dataset } = target;
    const object = { id: Number(dataset.id), size: value };

    if (!listSizes[dataset.index].some(({ id }) => id === Number(dataset.id))) {
      setListSize((currentColor) => ({
        ...currentColor,
        [dataset.index]: [...currentColor[dataset.index], object],
      }));
    }
  }, [listSizes]);

  function addFeature() {
    setFeatureProduct((currentState) => ({
      ...currentState,
      [Object.keys(currentState).length + 1]: {
        sku: '',
        sizes_id: '0',
        quantity: '',
        colors_id: '0',
        discount: '',
        price: '',
      },
    }));
    setSelectedFeature((currentFeatureVisible) => currentFeatureVisible + 1);
    setListFiles((curreFiles: any) => ({ ...curreFiles, [selectedFeature + 1]: {} }));
    setListSize((currentSize) => ({ ...currentSize, [selectedFeature + 1]: [] }));
  }

  function loadImg(event: any) {
    const { dataset, files } = event.target;

    setListFiles((currentFiles: any) => ({
      ...currentFiles,
      [dataset.index]: {
        ...currentFiles[dataset.index],
        [dataset.indexcolor]: files[0],
      },
    }));
  }

  async function registerProduct(event: FormEvent) {
    event.preventDefault();

    const { gender_id: genderId, categorys_id: ctgId } = infoProduct;
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);

    // const newBody = {
    //   ...infoProduct,
    //   gender_id: Number(genderId),
    //   categorys_id: ctgId,
    //   warranty: 1, // Garantia
    //   list_qtd: featureProduct,
    // };

    // const formdata = new FormData();

    // Object.keys(listFiles).forEach((index) => {
    //   Object.keys(listFiles[index]).forEach((files_index) => {
    //     formdata.append(`list_file-${index}`, listFiles[index][files_index]);
    //   });
    // });
    // formdata.append('body', JSON.stringify(newBody));

    // await api2.post('product_seller', formdata, {
    //   headers: {
    //     authorization: `Bearer ${token}`,
    //   },
    // }).catch((err) => err);
  }

  return (
    <>
      <HeadSEO
        title="Criar Produto"
        description="Criando Produto"
        keywords="Criando Produto"
      />
      <form className={ style.contprod } encType="multipart/form-data" onSubmit={ registerProduct }>
        <div className={ style.slide }>
          <div className={ style.panels }>
            { Object.keys(listFiles[selectedFeature] ?? {}).map((key_image) => (
              <div className={ style.contsimg } key={ key_image }>
                <LoadingImage
                  src={ URL.createObjectURL(listFiles[selectedFeature][key_image]) }
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
                  src={
                    listFiles[selectedFeature][upload_panel]
                      ? URL.createObjectURL(listFiles[selectedFeature][upload_panel])
                      : fakeImage
                  }
                  quality={ 80 }
                  alt="upload_image"
                />
                <input
                  id={ `img-${upload_panel}` }
                  type="file"
                  name={ `img-${selectedFeature}` }
                  accept=".png"
                  onChange={ loadImg }
                  data-indexcolor={ upload_panel }
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
            <select
              className={ style.select }
              name="categorys_id"
              defaultValue=""
              placeholder="Selecione o game que deseja jogar"
            >
              <option disabled hidden value="">Selectione uma categoria</option>
              { list.list_ctg.map(({ id, category_name }) => (
                <option
                  key={ id }
                  value={ id }
                  data-index="ctg"
                  onClick={ (e) => handlerChangeInfo(e.target) }
                >
                  { category_name }
                </option>
              )) }
            </select>
            <Input
              id="title"
              type="text"
              name="title"
              placeHolder="Titulo"
              msgError="Informe um titulo"
            />
            <div className={ style.palet_colors }>
              { Object.keys(featureProduct).map((key) => (
                <div className={ style.info_colors } key={ key }>
                  <div className={ style.colo_size }>
                    <div className={ style.select_custon }>
                      <span style={ {
                        backgroundColor: list.list_colors.find(
                          ({ id }) => id === featureProduct[key].colors_id,
                        )?.color,
                      } }
                      />
                      <ul>
                        { list.list_colors.map(({ id, color, color_name }) => (
                          <li key={ id }>
                            <button type="button" name="colors_id" value={ id } data-index={ key } onClick={ changeFeatureColor }>
                              <span className={ style.color } data-color={ color } style={ { background: `${color}` } } />
                              { color_name }
                            </button>
                          </li>
                        )) }
                      </ul>
                    </div>
                    <i />
                    <div className={ style.list_sizes }>
                      { listSizes[key].map((object) => (
                        <button type="button" key={ object.id }>
                          { object.size }
                        </button>
                      )) }
                    </div>
                    <div className={ style.select_custon }>
                      <pre>
                        +
                      </pre>
                      <ul>
                        { list.list_sizes.map(({ id, size }) => (
                          <li key={ id }>
                            <button
                              type="button"
                              name="sizes_id"
                              value={ size }
                              data-id={ id }
                              data-index={ key }
                              onClick={ changeColorOption }
                            >
                              { size }
                            </button>
                          </li>
                        )) }
                      </ul>
                    </div>
                  </div>
                  <div className={ style.desc_opt }>
                    <div className={ style.line }>
                      <Input
                        id={ key }
                        type="text"
                        name={ `quantity-${key}` }
                        placeHolder="Quantidade"
                        msgError="Quantidade"
                      />
                      <Input
                        id={ key }
                        type="text"
                        name={ `sku-${key}` }
                        placeHolder="SKU"
                        msgError="SKU"
                      />
                    </div>
                    <div className={ style.line }>
                      <Input
                        id={ key }
                        type="text"
                        name={ `price-${key}` }
                        placeHolder="Preço"
                        msgError="Preço"
                      />
                      <Input
                        id={ key }
                        type="text"
                        name={ `discount-${key}` }
                        placeHolder="Desconto"
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
                    family="gender_id"
                    iValue={ id }
                    execFunction={ handlerChangeInfo }
                  />
                )) }
              </div>
            </div>
            <textarea
              name="details"
              id="details"
              placeholder="Detalhes"
              maxLength={ 500 }
            />
            <textarea
              name="specifications"
              id="espec"
              placeholder="Especificações"
              maxLength={ 500 }
            />
          </div>
          <br />
          <button type="submit">Cadastrar produto</button>
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
      props: {
        list: data.list,
        token: req.cookies.u_token,
      },
    };
  }

  return {
    redirect: {
      permanent: false,
      destination: '/',
    },
  };
};
