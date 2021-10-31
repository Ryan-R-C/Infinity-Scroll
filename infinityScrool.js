const postsContainer = document.querySelector('#posts-container')


let page = 1

const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
    return response.json()
}

const addPostsIntoDom = async () => {
    const posts = await getPosts()
    const postsTemplate = posts.map(({ id, title, body}) =>`
            <section class="post">
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
            </section>`
        
        ).join('')
        postsContainer.innerHTML += postsTemplate
}
addPostsIntoDom()

window.addEventListener('scroll', () => {
    const {clientHeight, scrollHeight, scrollTop} = document.documentElement
    const isPageBottomAlmostReached = scrollTop + clientHeight >= scrollHeight -  10
    if ( isPageBottomAlmostReached ){
        console.log("The page bottom is almost reached!!!")
    }
})