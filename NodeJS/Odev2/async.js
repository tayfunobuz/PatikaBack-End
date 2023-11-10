const posts = [
    {postNo: "1", postTitle: "title1", postContent: "content1"},
    {postNo: "2", postTitle: "title2", postContent: "content2"},
    {postNo: "3", postTitle: "title3", postContent: "content3"}
]

const listPosts = () => {
    posts.map((post => {
        console.log(post.postNo, post.postTitle, post.postContent)
    }))
}

const addPost = (newPost) => {
    const postPromise = new Promise((resolve, reject) => {
        posts.push(newPost)
        resolve(posts)
        reject("Book didn't add.")
    })

    return postPromise
}

async function showPosts() {
    try {
        await addPost({postNo: "4", postTitle: "title4", postContent: "content4"})
        listPosts()
    } catch (error) {
        console.log(error)
    }
}

showPosts()
