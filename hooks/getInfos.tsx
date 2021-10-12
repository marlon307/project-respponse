import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionLogin, actionLogOut } from '../redux/redux-actions';

function getInfos() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getLocalStorage = localStorage.getItem('data_user')!;

    const getUserData = () => {
      if (getLocalStorage !== null) {
        const { logged } = JSON.parse(getLocalStorage);
        if (logged) dispatch(actionLogin());
        else dispatch(actionLogOut());
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

export default getInfos;
