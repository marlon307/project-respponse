import React from 'react';
import Svg from '../../assets/Svg';
import style from './style.module.scss';

function Footer() {
  return (
    <footer className={ style.footer }>
      <div className={ style.footercolumn }>
        <section>
          <h1>Sobre</h1>
          <ul>
            <li>
              <a>
                <Svg icoName="construction" />
                Construção do Site
              </a>
            </li>
            <li>
              <a>
                <Svg icoName="question" />
                Quem Somos
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h1>Ajuda</h1>
          <ul>
            <li>
              <a href="Tel:+999999999" className="link" data-link="">
                <Svg icoName="phone" />
                (99) 9 9999-9999
              </a>
            </li>
            <li>
              <a href="mailto:email@email.com" className="link" data-link="">
                <Svg icoName="email" />
                email@email.com
              </a>
            </li>
            <li>
              <a>
                <Svg icoName="doc" />
                Politica de troca e devoluções
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className={ style.footercolumn }>
        <section>
          <h1>Redes Sociais</h1>
          <ul className={ style.social }>
            <li>
              <a href="https://www.instagram.com/_marlon307/" target="_blank" rel="noreferrer" aria-label="Instagram _marlon307" title="Instagram _marlon307"><Svg icoName="instagram" /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/marlon307/" target="_blank" rel="noreferrer" aria-label="Linkedin marlon307" title="Linkedin marlon307"><Svg icoName="linkedin" /></a>
            </li>
            <li>
              <a href="https://twitter.com/_marlon307" target="_blank" rel="noreferrer" aria-label="Twitter _marlon307" title="Twitter _marlon307"><Svg icoName="twitter" /></a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
