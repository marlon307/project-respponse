import React from 'react';
import BarColors from '../../components/Bars/BarColors';
import style from './product.module.scss';
import { options } from '../../service/colorsMock';
import BarSize from '../../components/Bars/BarSize';
import AddBag from '../../components/Bars/AddBag';
import Svg from '../../assets/Svg';

function productId() {
  return (
    <div className={ style.product }>
      <div className={ style.slide }>
        <BarColors array={ options } />
      </div>
      <div className={ style.infodesc }>
        <div className={ style.mindetail }>
          <p>
            Do mesmo modo, a consulta aos diversos militantes
            desafia a capacidade de equalização de todos os recursos funcionais envolvidos.
          </p>
        </div>
        <div className={ style.infos }>
          <div className={ style.primaryline }>
            <div className={ style.titles }>
              <h1>Berrylush</h1>
              <h2>Top Forever 21 Canelado Preto</h2>
            </div>
            <div className={ style.price }>
              <span>R$ 199,00</span>
            </div>
          </div>
          <div className={ style.secondline }>
            <BarSize array={ options } colorName="Laranja" />
          </div>
          <AddBag />
        </div>
      </div>
      <div className={ style.moreinfo }>
        <label htmlFor="espec">
          <input className={ style.teste } type="radio" name="option" id="espec" defaultChecked />
          <h2>
            <Svg icoName="spec" />
            Especificações
          </h2>
          <div className={ style.details }>
            <div className={ style.detail }>
              <h3>
                <Svg icoName="spec" />
                Detalhes do produto
              </h3>
              <span>Flanelado Fechado New Era Canguru Add T Preto</span>
              <span>Modelagem:Reta</span>
              <span>Manga: Longa</span>
              <span>Estampa/Padronagem: Outras</span>
              <span>Quantidade de Bolsos: 1</span>
              <span>Material: Algodão</span>
              <span>Composição: 50% Algodão e 50% Poliéster</span>
              <span>Tipo de Tecido: Moletom não flanelado (Moletinho)</span>
              <span> Lavagem: Pode ser lavado na máquina</span>
              <span>
                Medidas da peça: Ombro: 17cm/ Ombro a Ombro: 58cm/ Manga:
                70cm/ Tórax: 128cm /Comprimento: 79cm
              </span>
              <span> Medidas Modelo: Altura: 1,87m/ Tórax: 93cm/ Manequim 38</span>
              <span>Características Especiais: Possui capuz com ajuste</span>
            </div>
            <div className={ style.spec }>
              <h3>
                <Svg icoName="spec" />
                Especificações
              </h3>
              <span>SKU NE224SRM17PRY</span>
              <span>Modelo New Era NEI18MOL026</span>
              <span>Características Especiais Possui capuz com ajuste</span>
              <span>Cor Preto</span>
              <span>Ocasião de uso Casual</span>
              <span>Lavagem Pode ser lavado na máquina</span>
              <span>Material Algodão</span>
              <span>Estampa Logo</span>
              <span>Tipo de frete: Leve</span>
            </div>
          </div>
        </label>
        <label htmlFor="products">
          <input className={ style.teste } type="radio" name="option" id="products" />
          <h2>
            <Svg icoName="similar" />
            Produtos Similares
          </h2>
          <div className={ style.products } />
        </label>
      </div>
    </div>
  );
}

export default productId;
