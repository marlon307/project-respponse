import React from 'react';
import style from './style.module.scss';

function Footer() {
  return (
    <footer className={ style.footer }>
      <div className={ style.footercolumn }>
        <section>
          <h1>Sobre</h1>
          <div>
            <p>Construção do Site</p>
            <p>Quem Somos</p>
          </div>
        </section>
        <section>
          <h1>Ajuda</h1>
          <div>
            <p>Tel.: 9 99999-9999</p>
            <p>email@email.com</p>
            <p>Politica de troca e devoluções</p>
          </div>
        </section>
      </div>
      <div className={ style.footercolumn }>
        <section>
          <h1>Redes Sociais</h1>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
