/* eslint-disable react/no-invalid-html-attribute */
import React from 'react';

function Seo() {
  return (
    <>
      <title>
        Respponse
      </title>
      <meta name="title" content="Respponse" />
      <link rel="icon" href="/favico.ico" />
      <link rel="canonical" href="https://respponse.com" />
      <meta name="description" content="Respponse loja de roupas e acessórios para o dia a dia, tudo de melhor qualidade para você." />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#FFFFFF" />
      <meta name="application-name" content="Respponse" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Respponse" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="apple-touch-icon" href="/favico.ico" sizes="256x256" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
      <link rel="apple-touch-startup-image" media="screen and (device-width: 100px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/favico.ico" />
      <meta property="og:type" content="Respponse" />
      <meta property="og:title" content="Respponse" />
      <meta property="og:description" content="Respponse" />
      <meta property="og:site_name" content="Respponse" />
      <meta property="og:url" content="https://respponse.com" />
    </>
  );
}

export default Seo;

// import React, { useState/* , useEffect */ } from 'react';

// interface Types {
//   props: any
// }

// function Seo({ props }: Types) {
//   const [pgtitle, setPgTitle] = useState('');

//   // useEffect(() => {
//   //   if (props.pgProps !== undefined) {
//   //     setPgTitle(props.pgProps.subTitle);
//   //   } else {
//   //     let format = url.split('/').slice(-1)[0];
//   //     switch (format) {
//   //       case 'help':
//   //         format = 'Ajuda';
//   //         break;
//   //       case 'account':
//   //         format = 'Conta';
//   //         break;
//   //       case 'favorite':
//   //         format = 'Favoritos';
//   //         break;
//   //       case 'bag':
//   //         format = 'Sacola';
//   //         break;
//   //       case 'resetpsw':
//   //         format = 'Recuperar Senha';
//   //         break;
//   //       case 'support':
//   //         format = 'Suporte';
//   //         break;
//   //       case 'login-register':
//   //         format = 'Login - Registrar';
//   //         break;
//   //       default:
//   //         break;
//   //     }
//   //     setPgTitle(format);
//   //   }
//   // }, [url]);

//   return (
//     <>
//       <title>
//         { pgtitle !== '' ? `${pgtitle} | Respponse` : 'Respponse' }
//       </title>
//       <meta name="title" content={ pgtitle !== '' ? `${pgtitle} | Respponse` : 'Respponse' } />
//       <link rel="icon" href="/favico.ico" />
//       <link rel="canonical" href="https://respponse.com" />
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <meta name="description"
//            content="Respponse loja de roupas e acessórios para o dia a dia,
//            tudo de melhor qualidade para você."
//        />
//       <link rel="manifest" href="/manifest.json" />
//       <meta name="theme-color" content="#FFFFFF" />
//       <meta name="application-name" content="Respponse" />
//       <meta name="apple-mobile-web-app-capable" content="yes" />
//       <meta name="apple-mobile-web-app-status-bar-style" content="default" />
//       <meta name="apple-mobile-web-app-title"
//           content={ pgtitle !== '' ? `${pgtitle} | Respponse` : 'Respponse' } />
//       <meta name="format-detection" content="telephone=no" />
//       <link rel="icon" href="/favico.ico" />
//       <link rel="apple-touch-icon" href="/favico.ico" />
//       <meta
//            name="viewport"
//            content="minimum-scale=1, initial-scale=1, width=device-width,
//            shrink-to-fit=no, viewport-fit=cover" />
//       <meta property="og:type" content="Respponse" />
//       <meta property="og:title" content={ pgtitle !== '' ? `${pgtitle}` : 'Respponse' } />
//       <meta property="og:description" content="Respponse" />
//       <meta property="og:site_name" content="Respponse" />
//       <meta property="og:url" content="https://respponse.com" />
//     </>
//   );
// }

// export default Seo;
