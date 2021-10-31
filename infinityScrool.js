let page = 1

const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
    return response.json()
}

const addPostsIntoDom = async () => {
    const posts = await getPosts()
    const postsTemplate = posts.map(({ id, title, body}) => 
        {
            `<section>
                <div class="number">
                ${id}
                </div>
                <article class="posts-info">
                    <h3 class="posts-title">
                        ${title}
                    </h3>
                    <p class="post-body">
                        ${body}
                    </p>
                </article>
            </section>`})
}
addPostsIntoDom()