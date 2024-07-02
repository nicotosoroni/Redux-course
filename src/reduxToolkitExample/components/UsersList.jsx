import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'reduxToolkitExample/redux/usersSlice';
import './UserList.css';

const UsersList = () => {
  // @ts-ignore
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        dispatch(fetchUsers(res.data));
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, [dispatch]);

  return (
    <div>
      <h3>Usuarios</h3>
      {users.map((i) => (
        <div key={i.id}>{i.name}</div>
      ))}
      <div id="divA">A</div>
      <div id="divB">B</div>
      <div id="divC">C</div>
    </div>
  );
};
export default UsersList;
