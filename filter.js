const filter = document.querySelector('#filter')
filter.addEventListener('input', event => {
    const inputValue = event.target.value.toLowerCase()
    console.log(inputValue);

    const posts = document.querySelectorAll('.post')

    posts.forEach(post=> {
        const postTitle = post.querySelector('.post-title').textContent.toLowerCase()
        const postBody = post.querySelector('.post-body').textContent.toLowerCase()

        if(postTitle.includes(inputValue) || postBody.includes(inputValue)){
            post.style.display = "flex"
            return
        }
        post.style.display = "none"
    })
})