const postsContainer = document.querySelector('#posts-container')
const loading = document.querySelector('.loader')
 

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
                <article class="post-info">
                    <h3 class="post-title">
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


const showLoading = () =>{
    loading.classList.add('show')
    removeLoading()
}
const getNextPosts = () =>{
    setTimeout(() => {
        page ++
        addPostsIntoDom()
    }, 300 )
}

const removeLoading = () =>{
    setTimeout(() => {
        loading.classList.remove('show')
        getNextPosts()
    }, 1000)
}
window.addEventListener('scroll', () => {
    const {clientHeight, scrollHeight, scrollTop} = document.documentElement
    const isPageBottomAlmostReached = scrollTop + clientHeight >= scrollHeight -  10
    if ( isPageBottomAlmostReached ){
        showLoading()
    }
})