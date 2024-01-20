import PostCard from "@/components/PostCard";

async function loadPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return data;
}

async function PostPages() {
    const posts = await loadPost()
    return (<div>
        {
            posts.map((post) => (
                <PostCard post={post} key={post.id} />
            ))
        }
    </div>
    );
}

export default PostPages;