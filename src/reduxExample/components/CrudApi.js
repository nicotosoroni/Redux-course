import React, { useEffect, useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';
import { helpHttp } from 'reduxExample/helpers/helpHttp';
import { useDispatch, useSelector } from 'react-redux';
import {
  createAction,
  deleteAction,
  noDataAction,
  readAllAction,
  updateAction,
} from 'reduxExample/actions/crudActions';

const CrudApi = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // @ts-ignore
  const { db } = state.crud;
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = 'http://localhost:3001/santos';

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          // @ts-ignore
          dispatch(readAllAction(res));
          setError(null);
        } else {
          // @ts-ignore
          dispatch(noDataAction());
          setError(res);
        }
        setLoading(false);
      });
  }, [url, dispatch]);

  const createData = (data) => {
    data.id = Date.now().toString();
    console.log(data);

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        // @ts-ignore
        dispatch(createAction(res));
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        // @ts-ignore
        dispatch(updateAction(res));
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    console.log(id);
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { 'content-type': 'application/json' },
      };

      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          // @ts-ignore
          dispatch(deleteAction(id));
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;
