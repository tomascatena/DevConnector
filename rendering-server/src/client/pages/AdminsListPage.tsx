import React, { FC, useEffect } from 'react';
import { fetchAdmins } from '../state/admin/admin.thunk';
import createStore from '../../helpers/createStore';
import { useAppDispatch, useTypedSelector } from '../hooks';
import RequireAuth from '../components/HOCs/RequireAuth';

interface Props {}

const AdminsListPage: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { adminsList } = useTypedSelector((state) => state.admin);

  useEffect(() => {
    if (!adminsList) {
      dispatch(fetchAdmins());
    }
  }, []);

  return (
    <div>
      <h1>Protected list of Admins</h1>

      {adminsList && (
        <ul>
          {adminsList.map((admin) => {
            <li key={admin.id}>{admin.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

const loadData = (store: ReturnType<typeof createStore>) => {
  return store.dispatch(fetchAdmins());
};

export default {
  component: RequireAuth(AdminsListPage),
  loadData,
};
