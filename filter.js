const filter = document.querySelector('#filter')
filter.addEventListener('input', event => {
    const inputValue = event.target.value
    console.log(inputValue);

    const posts = document.querySelectorAll('.post')

    posts.forEach(post => {
        const postTitle = post.querySelector('.post-title').textContent
        const postBody = post.querySelector('.post-body').textContent

    console.log({postTitle, postBody})
    })
})