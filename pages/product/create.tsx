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

const fakeImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

interface ListColor {
  [key: string]: IColor | any;
}
interface ListSize {
  [key: string]: ISize[];
}
interface IFile {
  [key: string]: any
}

function ProductId({ list, token }: TList) {
  const [selectedFeature, setSelectedFeature] = useState(1);
  const [listColors, setListColors] = useState<ListColor>({ 1: {} });
  const [listSizes, setListSize] = useState<ListSize>({ 1: [] });
  const [listFiles, setListFiles] = useState<IFile>({ 1: {} });

  const changeFeatureColor = useCallback(({ target }: any) => {
    const { value, dataset } = target;
    const object = { id: Number(dataset.id), color: value };
    setListColors((currentColor) => ({
      ...currentColor,
      [dataset.index]: object,
    }));
  }, [listColors]);

  const addSizeOption = useCallback(({ target }: any) => {
    const { value, dataset } = target;
    const object = { id: Number(dataset.id), size: value };

    if (!listSizes[dataset.index].some(({ id }) => id === Number(dataset.id))) {
      setListSize((currentSize) => ({
        ...currentSize,
        [dataset.index]: [...currentSize[dataset.index], object],
      }));
    }
  }, [listSizes]);

  function addFeature() {
    setListColors((currentColor) => ({ ...currentColor, [selectedFeature + 1]: {} }));
    setSelectedFeature((currentFeatureVisible) => currentFeatureVisible + 1);
    setListFiles((curreFiles) => ({ ...curreFiles, [selectedFeature + 1]: {} }));
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

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    const options = Object.keys(listColors).map((key) => {
      formData.delete(`img-${key}`);
      formData.delete('file');
      return {
        ...listColors[key],
        sizes: listSizes[key].map(({ id }) => id),
        sku: data[`sku-${key}`],
        quantity: Number(data[`quantity-${key}`]),
        discount: Number(data[`discount-${key}`]),
        price: Number(data[`price-${key}`]),
      };
    });

    Object.keys(listFiles).forEach((index) => {
      Object.keys(listFiles[index]).forEach((files_index) => {
        formData.append(`list_file-${index}`, listFiles[index][files_index]);
      });
    });

    formData.append('warranty', '1');
    formData.append('options', JSON.stringify(options));

    await api2.post('product_seller', formData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).catch((err) => err);
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
              { Object.keys(listColors).map((key) => (
                <div className={ style.info_colors } key={ key }>
                  <div className={ style.colo_size }>
                    <div className={ style.select_custon }>
                      <span style={ { backgroundColor: listColors[key]?.color } } />
                      <ul>
                        { list.list_colors.map(({ id, color, color_name }) => (
                          <li key={ id }>
                            <button type="button" name="colors_id" value={ color } data-id={ id } data-index={ key } onClick={ changeFeatureColor }>
                              <span className={ style.color } style={ { background: `${color}` } } />
                              { color_name }
                            </button>
                          </li>
                        )) }
                      </ul>
                    </div>
                    <i />
                    <div className={ style.list_sizes }>
                      { listSizes[key]?.map((object) => (
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
                              onClick={ addSizeOption }
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
