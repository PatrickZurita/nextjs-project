"use client"

export default function PostCard({ post }) {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => {
                alert('on change')
            }}>click here</button>
        </div>
    )
}