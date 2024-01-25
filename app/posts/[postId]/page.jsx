import Posts from '../page'
import { Suspense } from 'react';

async function loadPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    return data;
}

export default async function Page({params}) {
  const post = await loadPost(params.postId);

  return (
    <div>
        <h1>{post.id}. {post.title}</h1>
        <p>{post.body}</p>
        <hr/>
        <h3>Otras Publicaciones</h3>
        <Suspense fallback={<div>Cargando Publicaciones...</div>}>
          <Posts/>
        </Suspense>
    </div>
  )
}
