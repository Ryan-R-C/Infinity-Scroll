const filter = document.querySelector('#filter')
filter.addEventListener('input', event => {
    const inputValue = event.target.value
    console.log(inputValue);

    const posts = document.querySelectorAll('.post')

    posts.forEach((post, index) => {
        const postTitle = post.querySelector('.post-title').textContent
        const postBody = post.querySelector('.post-body').textContent

        if(postTitle.includes(inputValue) || postBody.includes(inputValue)){
            console.log(`post ${index + 1 }, value searched ${inputValue}`);

        }
    })
})