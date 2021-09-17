import React from 'react';
import {
  FBranch, FColor, FSize, FGen, FCtg,
} from '.';
import style from './style.module.scss';

function Filter() {
  return (
    <div className={ style.optionsfilter }>
      <h1>Cores</h1>
      <div className={ style.block }>
        <FColor color="#000000" cName="Preto" />
        <FColor color="#e88b3c" cName="Laranja" />
        <FColor color="#dd3ce8" cName="Rosa" />
        <FColor color="#0a1f84" cName="Azul" />
        <FColor color="#fff" cName="Branco" />
        <FColor color="#22840a" cName="Verde" />
        <FColor color="#840a0a" cName="Vermelho" />
      </div>
      <h1>Categoria</h1>
      <div className={ style.block }>
        <FCtg ctg="Esporte" />
        <FCtg ctg="Lazer" />
        <FCtg ctg="Casual" />
        <FCtg ctg="Dia a dia" />
      </div>
      <h1>Tamanho</h1>
      <div className={ style.block }>
        <FSize size="XGG" />
        <FSize size="GG" />
        <FSize size="G" />
        <FSize size="M" />
        <FSize size="P" />
        <FSize size="PP" />
        <FSize size="34" />
        <FSize size="36" />
        <FSize size="35 / 36" />
        <FSize size="37 / 38" />
        <FSize size="40" />
        <FSize size="42" />
        <FSize size="46" />
      </div>
      <h1>Marca</h1>
      <div className={ style.block }>
        <FBranch branch="Nike" />
        <FBranch branch="Lacoste" />
        <FBranch branch="Hang Loose" />
        <FBranch branch="Polo" />
        <FBranch branch="Hurley" />
        <FBranch branch="Gucci" />
        <FBranch branch="Gangster" />
      </div>
      <h1>Genero</h1>
      <div className={ style.block }>
        <FGen gen="Femenino" />
        <FGen gen="Infantil" />
        <FGen gen="Masculino" />
      </div>
      <h1>Tipo</h1>
      <div className={ style.block }>
        <FColor color="#333" cName="Cinza Escuro" />
        <FColor color="#333" cName="Cinza" />
        <FColor color="#333" cName="Escuro" />
        <FColor color="#333" cName="Azul" />
      </div>
    </div>
  );
}

export default Filter;
