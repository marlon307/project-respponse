'use client';

import React, { useState, useCallback, FormEvent } from 'react';
import Image from 'next/image';
import { api2 } from '../../service/api';
import { Input, InputRadio } from '../ComponentsForm';
import BtnAdd from '../Buttons/BtnAdd';
import BtnIco from '../Buttons/BtnIco';
import style from './style.module.scss';

const fakeImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

interface ListColor {
  [key: string]: IColor | any;
}

interface IFile {
  [key: string]: any
}

function CreateProduct({ list }) {
  const [selectedFeature, setSelectedFeature] = useState(1);
  const [listColors, setListColors] = useState<ListColor>({ 1: {} });
  const [listSizes, setListSize] = useState<ISize[]>([]);
  const [listFiles, setListFiles] = useState<IFile>({ 1: {} });
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

    if (!listSizes.some(({ id }) => id === Number(dataset.id))) {
      setListSize((currentSize) => ([
        ...currentSize,
        object,
      ]));
    }
  }, [listSizes]);

  function addFeature() {
    setListColors((currentColor) => ({ ...currentColor, [selectedFeature + 1]: {} }));
    setSelectedFeature((currentFeatureVisible) => currentFeatureVisible + 1);
    setListFiles((curreFiles) => ({ ...curreFiles, [selectedFeature + 1]: {} }));
    // setListSize((currentSize) => ({ ...currentSize, [selectedFeature + 1]: [] }));
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
    setIsLoading(true);
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    const options = Object.keys(listColors).map((key) => {
      formData.delete(`img-${key}`);
      formData.delete('file');
      return {
        ...listColors[key],
        sizes: listSizes.map(({ id }) => ({
          id,
          quantity: Number(data[`quantity-${key}-${id}`]),
        })),
        sku: data[`sku-${key}`],
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
    formData.append('list_qtd', JSON.stringify(options));

    await api2.post('/product', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).catch((err) => err);
    setIsLoading(false);
  }

  return (
    <form className={ style.contprod } encType="multipart/form-data" onSubmit={ registerProduct }>
      <div className={ style.slide }>
        <div className={ style.list_upload }>
          { [...Array(6).keys()].map((upload_panel) => (
            <label htmlFor={ `img-${upload_panel}` } className={ style.load_img } key={ upload_panel }>
              <Image
                src={
                  listFiles[selectedFeature][upload_panel]
                    ? URL.createObjectURL(listFiles[selectedFeature][upload_panel])
                    : fakeImage
                }
                quality={ 80 }
                alt="upload_image"
                fill
              />
              <input
                id={ `img-${upload_panel}` }
                type="file"
                name={ `img-${selectedFeature}` }
                accept=".png"
                onChange={ loadImg }
                data-indexcolor={ upload_panel }
                data-index={ selectedFeature }
                required
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
          <select
            className={ style.select }
            name="categorys_id"
            defaultValue=""
            placeholder="Selecione o game que deseja jogar"
            required
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
            placeholder="Titulo"
            msgError="Informe um titulo"
            required
          />
          <div className={ style.palet_colors }>
            { Object.keys(listColors).map((key) => (
              <div className={ style.info_colors } key={ key }>
                <div className={ style.color_size }>
                  <div className={ style.select_custon }>
                    <span style={ { backgroundColor: listColors[key]?.color } } />
                    <ul>
                      { list.list_colors.map(({ id, color, color_name }) => (
                        <li key={ id }>
                          <button
                            type="button"
                            name="colors_id"
                            value={ color }
                            data-id={ id }
                            data-index={ key }
                            onClick={ changeFeatureColor }
                          >
                            <span className={ style.color } style={ { background: `${color}` } } />
                            { color_name }
                          </button>
                        </li>
                      )) }
                    </ul>
                  </div>
                  <i />
                  <Input
                    id={ key }
                    type="text"
                    name={ `sku-${key}` }
                    placeholder="SKU"
                    msgError="SKU"
                    required
                  />
                </div>
                <div className={ style.desc_opt }>
                  <div className={ style.line }>
                    <Input
                      id={ key }
                      type="text"
                      name={ `price-${key}` }
                      placeholder="(R$) Preço"
                      msgError="(R$) Preço"
                      required
                      max={ 8 }
                    />
                    <Input
                      id={ key }
                      type="text"
                      name={ `discount-${key}` }
                      placeholder="(%) Desconto"
                      msgError="(%) Desconto"
                      required
                      max={ 8 }
                    />
                  </div>
                  <div className={ style.line }>
                    { listSizes.length
                      ? (
                        <div className={ style.list_sizes }>
                          { listSizes?.map((object) => (
                            <div className={ style.size_qtd } key={ object.id }>
                              <button type="button">
                                { object.size }
                              </button>
                              <input
                                type="text"
                                name={ `quantity-${key}-${object.id}` }
                                placeholder="QTD"
                                title="Qauntidade"
                                required
                                defaultValue={ 0 }
                              />
                            </div>
                          )) }
                        </div>
                      ) : null }
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
                  required
                />
              )) }
            </div>
          </div>
          <textarea
            name="details"
            id="details"
            placeholder="Detalhes"
            maxLength={ 500 }
            required
          />
          <textarea
            name="specifications"
            id="espec"
            placeholder="Especificações"
            maxLength={ 500 }
            required
          />
        </div>
        <br />
        <BtnIco
          textBtn="Cadastrar produto"
          actionLiberate={ isLoading }
        />
      </div>
    </form>
  );
}

export default CreateProduct;
