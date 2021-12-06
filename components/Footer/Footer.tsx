import React from 'react';
import Link from 'next/link';
import Svg from '../../assets/Svg';
import style from './style.module.scss';

const Footer = function Footer() {
  return (
    <footer className={ style.footer }>
      <div className={ style.footercolumn }>
        <section>
          <h1>Sobre</h1>
          <ul>
            <li>
              <Link href="/help">
                <a aria-label="Construção do Site">
                  <Svg icoName="construction" />
                  Construção do Site
                </a>
              </Link>
            </li>
            <li>
              <Link href="/help">
                <a aria-label="Quem Somos">
                  <Svg icoName="question" />
                  Quem Somos
                </a>
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h1>Ajuda</h1>
          <ul>
            <li>
              <a href="Tel:+999999999" className="link" aria-label="Numéro de telefone">
                <Svg icoName="phone" />
                (99) 9 9999-9999
              </a>
            </li>
            <li>
              <a href="mailto:email@email.com" className="link" aria-label=" Email email@email.com">
                <Svg icoName="email" />
                email@email.com
              </a>
            </li>
            <li>
              <Link href="/help">
                <a aria-label="Politica de troca e devoluções">
                  <Svg icoName="doc" />
                  Politica de troca e devolução
                </a>
              </Link>
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
};

export default Footer;
