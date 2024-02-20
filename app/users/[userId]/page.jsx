import { Suspense } from 'react';
import Users from '../page';

async function loadUser(id){
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await response.json();
    return data.data;
}

export default async function Page({params}){
    const user = await loadUser(params.userId);

    return (
        <div>
            <h1>{user.id}. {user.first_name} {user.last_name}</h1>
            <p>{user.email}</p>
            <hr/>
            <h3>Otros Usuarios</h3>
            <Suspense fallback={<div>Cargando Usuarios...</div>}>
              <Users/>
            </Suspense>
        </div>
      )
}