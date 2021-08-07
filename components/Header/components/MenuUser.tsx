import React from 'react';
import Image from 'next/image';
import icoUser from '../../../img/u_user.svg';

function MenuUser() {
  return (
    <div className="menuUser">
      <Image src={ icoUser } />
    </div>
  );
}

export default MenuUser;
