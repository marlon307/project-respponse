import { useEffect } from 'react';
import { LOGIN_USER } from '../redux/actions';
import { useAppDispatch } from '../redux/hooks';

function GetInfos() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getLocalStorage = localStorage.getItem('data_user')!;

    const getUserData = () => {
      if (getLocalStorage !== null) {
        const { logged } = JSON.parse(getLocalStorage);
        if (logged) dispatch(LOGIN_USER(true));
      } else {
        localStorage.setItem('data_user', JSON.stringify({
          logged: false,
        }));
      }
    };

    getUserData();
  }, []);
  return null;
}

export default GetInfos;
