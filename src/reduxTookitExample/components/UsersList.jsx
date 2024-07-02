import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UsersList = () => {
  // @ts-ignore
  const users = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        dispatch({ type: 'fetchUsers', payload: res.data });
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, [dispatch]);

  return <div>Usuarios</div>;
};
export default UsersList;
