import React from 'react';
import { CardCategory } from '../components/Cards';
// import type { NextPage } from 'next';
import style from '../Sass/style.module.scss';
import mockCategory from '../service/mockCategory';
import slide from '../assets/img/revolt-164_6wVEHfI-unsplash.jpg';
import LoadingImage from '../components/LoadImage';

function Home() {
  return (
    <main className={ style.main }>
      <div className={ style.banner }>
        <LoadingImage
          src={ slide }
          quality={ 85 }
          alt="title"
          width={ 1080 }
          height={ 700 }
          layout="fill"
        />
      </div>
      <div className={ style.listctg }>
        <h2>Categorias</h2>
        <div className={ style.list }>
          { mockCategory.map(({
            ctgID, imgCategory, categoryName, color, path,
          }) => (
            <CardCategory
              key={ ctgID }
              image={ imgCategory }
              ctgName={ categoryName }
              path={ path }
              color={ color! }
            />
          )) }
        </div>
      </div>
    </main>
  );
}

export default Home;
