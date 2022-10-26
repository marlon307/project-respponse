import React from 'react';
import Link from 'next/link';
import style from './style.module.scss';

function Footer() {
  return (
    <footer className={ style.footer }>
      <div className={ style.footercolumn }>
        <section>
          <h1>Sobre</h1>
          <ul>
            <li>
              <Link href="/help" aria-label="Construção do Site">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.7 15.6 17.2 11l.1-1.4a7.7 7.7 0 0 0-10.9-7 1 1 0 0 0-.3 1.6l4.4 4.4-1.8 1.8L4.3 6a1 1 0 0 0-.8-.2 1 1 0 0 0-.8.5 7.7 7.7 0 0 0 8.4 10.8l4.5 4.5a1 1 0 0 0 1.7-.3 1 1 0 0 0-.3-1.1l-4.8-5a1 1 0 0 0-1-.2 5.9 5.9 0 0 1-3.7-.2 5.7 5.7 0 0 1-3.4-6.2L8 12.6a1 1 0 0 0 1.4 0l3.2-3.2a1 1 0 0 0 0-1.4L8.7 4h1a5.7 5.7 0 0 1 5.5 7.1 1 1 0 0 0 .2 1l5 4.9a1 1 0 1 0 1.4-1.4Z" fill="#333" /></svg>
                Construção do Site
              </Link>
            </li>
            <li>
              <Link href="/help" aria-label="Quem Somos">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="m11.3 15.3-.1.1-.1.2v.8a.9.9 0 0 0 .5.5 1 1 0 0 0 .8 0 .9.9 0 0 0 .5-.5l.1-.4a1 1 0 0 0-1.7-.7ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-13a3 3 0 0 0-2.6 1.5 1 1 0 1 0 1.7 1A1 1 0 1 1 12 11a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.2A3 3 0 0 0 12 7Z" fill="#333" />
                </svg>
                Quem Somos
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h1>Ajuda</h1>
          <ul>
            <li>
              <a href="Tel:+999999999" className="link" aria-label="Numéro de telefone">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="m19.4 13-.6-.1c-.5-.1-1-.2-1.3-.4a2 2 0 0 0-2.5 1l-.2.4A12.2 12.2 0 0 1 10 9.3l.4-.3a2 2 0 0 0 1-2.5 10.3 10.3 0 0 1-.5-2A3 3 0 0 0 8 2H5a3 3 0 0 0-3 3.4A19 19 0 0 0 18.5 22h.4a3 3 0 0 0 3-3v-3a3 3 0 0 0-2.5-2.9Zm.5 6a1 1 0 0 1-.7 1 1 1 0 0 1-.4 0A17 17 0 0 1 4 5.2a1 1 0 0 1 .2-.8 1 1 0 0 1 .8-.3h3a1 1 0 0 1 1 .7 10.8 10.8 0 0 0 .6 2.4L8.3 8a1 1 0 0 0-.5 1.3c1.4 3 4 5.6 7 7h.8a1 1 0 0 0 .5-.5l.6-1.4a13.7 13.7 0 0 0 2.4.6 1 1 0 0 1 .8 1V19Z" fill="#333" />
                </svg>
                (99) 9 9999-9999
              </a>
            </li>
            <li>
              <a href="mailto:email@email.com" className="link" aria-label=" Email email@email.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-.4 2-5.9 5.9a1 1 0 0 1-1.4 0L5.4 6h13.2ZM20 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.4l5.9 5.9a3 3 0 0 0 4.2 0L20 7.4V17Z" fill="#333" />
                </svg>
                email@email.com
              </a>
            </li>
            <li>
              <Link href="/help" aria-label="Politica de troca e devoluções">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12H7a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2Zm-1-2h4a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2Zm1 6H7a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2Zm12-4h-3V3a1 1 0 0 0-1.5-.9l-3 1.7-3-1.7a1 1 0 0 0-1 0l-3 1.7-3-1.7A1 1 0 0 0 2 3v16a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1ZM5 20a1 1 0 0 1-1-1V4.7L6 6a1 1 0 0 0 1 0L10 4 13 6a1 1 0 0 0 1 0l2-1.2V19c0 .3 0 .7.2 1H5Zm15-1a1 1 0 1 1-2 0v-5h2v5Zm-6.4-2.8-.2-.1h-.2a1 1 0 0 0-1 .2 1 1 0 0 0-.1 1l.2.4.3.2a1 1 0 0 0 .8 0l.3-.2a1 1 0 0 0 .3-.7 1 1 0 0 0-.3-.7l-.1-.1Zm.1-4a1 1 0 0 0-1.7.9 1 1 0 0 0 1.7.6 1 1 0 0 0 0-1.4Z" fill="#333" />
                </svg>
                Politica de troca e devolução
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
              <a href="https://www.instagram.com/_marlon307/" target="_blank" rel="noreferrer" aria-label="Instagram _marlon307" title="Instagram _marlon307">
                { ' ' }
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM22 7.9c0-.8-.1-1.7-.4-2.5a5 5 0 0 0-1.2-1.7c-.5-.5-1-1-1.8-1.2-.7-.3-1.5-.4-2.4-.4L12 2H7.9c-.9 0-1.7.2-2.5.5-.6.3-1.2.7-1.7 1.2s-1 1-1.2 1.8c-.3.7-.4 1.5-.4 2.4L2 12v4.1c0 .9.2 1.7.5 2.4s.7 1.3 1.2 1.8 1 1 1.8 1.2c.7.3 1.5.4 2.4.4l4.1.1h4.1c.9 0 1.7-.2 2.4-.5s1.3-.7 1.8-1.2 1-1 1.2-1.8c.3-.7.4-1.6.4-2.4L22 12V7.9ZM20.1 16c0 .6 0 1.3-.3 1.9A3 3 0 0 1 19 19l-1.1.8a65 65 0 0 1-5.9.4L8 20c-.6 0-1.3 0-1.9-.3-.4-.2-.8-.4-1.1-.8a3 3 0 0 1-.7-1.1c-.3-.6-.4-1.2-.4-1.9l-.1-4V8c0-.6.2-1.3.4-1.9L5 5l1.1-.8c.6-.2 1.3-.3 1.9-.3l4-.1a57.3 57.3 0 0 1 5.9.4c.4.2.8.4 1.2.8l.7 1.1a65 65 0 0 1 .3 9.9ZM12 6.9A5.1 5.1 0 1 0 12 17 5.1 5.1 0 0 0 12 7Zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6Z" fill="#333" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/marlon307/" target="_blank" rel="noreferrer" aria-label="Linkedin marlon307" title="Linkedin marlon307">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17.5 9c-.9 0-1.8.2-2.6.6A1 1 0 0 0 14 9h-4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5.5a1 1 0 1 1 2 0V22a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7.5A5.5 5.5 0 0 0 17.5 9ZM21 21h-2v-4.5a3 3 0 0 0-6 0V21h-2V11h2v.7a1 1 0 0 0 1.8.6 3.5 3.5 0 0 1 6.2 2.2V21ZM7 9H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1ZM6 21H4V11h2v10ZM5 1.5A3.2 3.2 0 1 0 5 8a3.2 3.2 0 1 0 0-6.5ZM5 6a1.2 1.2 0 0 1-1.4-1.2C3.6 4 4 3.5 5 3.5a1.2 1.2 0 0 1 1.4 1.3C6.4 5.5 6 6 5 6Z" fill="#333" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/_marlon307" target="_blank" rel="noreferrer" aria-label="Twitter _marlon307" title="Twitter _marlon307">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M23 4a1 1 0 0 0-1.5-1c-.6.4-1.2.7-1.9.9-1-.8-2.1-1.3-3.4-1.3A5.2 5.2 0 0 0 11 7.7a11 11 0 0 1-6.8-4 1 1 0 0 0-1.3-.1 1 1 0 0 0-.3.3 5.3 5.3 0 0 0-.3 4.8 1 1 0 0 0-.5.9v.4c.1 1.3.7 2.5 1.6 3.3a1 1 0 0 0 0 .8 5.2 5.2 0 0 0 2.3 3c-1.1.4-2.4.5-3.6.4a1 1 0 0 0-.6 1.8 13 13 0 0 0 20-11v-.1A5.8 5.8 0 0 0 23 4Zm-3.3 3.2a1 1 0 0 0-.2.7v.5c0 1-.2 2-.5 3a10.7 10.7 0 0 1-10.5 8 11 11 0 0 1-2.6-.3c1-.4 2-1 3-1.6a1 1 0 0 0-.7-1.8c-.8 0-1.6-.3-2.2-1h.5a1 1 0 0 0-.1-2A3.2 3.2 0 0 1 4.2 11h.5a1 1 0 0 0 1-.6 1 1 0 0 0-.4-1.2 3.2 3.2 0 0 1-1.4-2.9A13 13 0 0 0 12 9.8a1 1 0 0 0 .8-.3 1 1 0 0 0 .2-.9v-.7a3.2 3.2 0 0 1 5.5-2.2 1 1 0 0 0 .9.3l1.2-.4-1 1.6Z" fill="#333" />
                </svg>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
