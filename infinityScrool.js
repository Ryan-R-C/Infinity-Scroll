const postsContainer = document.querySelector('#posts-container')
const loading = document.querySelector('.loader')
 

let page = 1

const getPosts = async () => {
    const response = await
     fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
    return response.json()
}

const generateTemplate = posts => posts.map(
    //generates the content of postsTemplate to add it into DOM
    ({ id, title, body}) =>
    `
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
        </section>
    `
    ).join('')


const addPostsIntoDom = async () => {
    const posts = await getPosts()
    const postsTemplate = generateTemplate(posts)

    postsContainer.innerHTML += postsTemplate

}
addPostsIntoDom()


const showLoading = () =>{
    loading.classList.add('show')
    removeLoading()
}
const getNextPosts = () =>{
    setTimeout(() => {//to the it not appear at same time that loader is displayed:
        page ++
        addPostsIntoDom()
    }, 300 )//this time is loader's animation time 
}

const removeLoading = () =>{
    setTimeout(() => {
        loading.classList.remove('show')
        getNextPosts()
    }, 1000)
}
const handleScrollToPageBottom = () => {
    const {clientHeight, scrollHeight, scrollTop} = document.documentElement
    const isPageBottomAlmostReached = scrollTop + clientHeight >= scrollHeight -  10
    if ( isPageBottomAlmostReached ){
        showLoading()
    }
}

window.addEventListener('scroll', handleScrollToPageBottom)