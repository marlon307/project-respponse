import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import style from './style.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

function ClipBoard({ text, ...props }: Props) {
  return (
    <button
      className={ style.clipBoard }
      type="button"
      onClick={ () => navigator.clipboard.writeText(text) }
      aria-label="Copiar"
      { ...props }
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M21 9v-.4a1 1 0 0 0-.3-.3l-6-6-.2-.2h-.1A.9.9 0 0 0 14 2H10a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V9Zm-6-3.6L17.6 8H16a1 1 0 0 1-1-1V5.4ZM15 19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1v7a3 3 0 0 0 3 3h5v1Zm4-4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3v5Z" />
      </svg>
    </button>
  );
}

export default ClipBoard;
