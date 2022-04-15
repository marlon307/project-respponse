import React from 'react';
import { CardCategory } from '../components/Cards';
// import type { NextPage } from 'next';
import style from '../Sass/style.module.scss';
import mockCategory from '../service/mockCategory';

function Home() {
  return (
    <main className={ style.main }>
      <div className={ style.listctg }>
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
    </main>
  );
}

export default Home;
