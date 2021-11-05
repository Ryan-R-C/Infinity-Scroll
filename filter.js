const filter = document.querySelector('#filter')
filter.addEventListener('input', event => {
    const inputValue = event.target.value.toLowerCase()
    console.log(inputValue);

    const posts = document.querySelectorAll('.post')

    posts.forEach(post=> {
        const postTitle = post.querySelector('.post-title').textContent.toLowerCase()
        const postBody = post.querySelector('.post-body').textContent.toLowerCase()

        //Check if the Post Content has the inputValue
        if(postTitle.includes(inputValue) || postBody.includes(inputValue)){//Incluedes is casa sensitive

            //the elements which includes the inputValue will continue to be displayed in screen:
            post.style.display = "flex"
            //it prevents this function to be executed again and again:
            return
        }
        //all elements that does not have the inputValue will not be displayed
        post.style.display = "none"
    })
})