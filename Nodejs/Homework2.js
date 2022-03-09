`Post Sıralama ve Post Ekleme
Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım,
sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.`

const posts = [
    { title: "Post Title 1", content: "Post Content 1", author: "Ahmet" },
    { title: "Post Title 2", content: "Post Content 2", author: "Sezer" },
    { title: "Post Title 3", content: "Post Content 3", author: "Kadir" }
];
const newPost = { title: "Post Title 4", content: "Post Content 4", author: "Turker" }

const listPost = () => {
    console.log("postlar listeleniyor")
    posts.map(post => {
        console.log(post)
    })
};

const addPost = (newPost) => {
    const promise = new Promise((resolve, reject) => {
        posts.push(newPost)
        if (posts) {
            resolve(posts);
            console.log('Yeni post eklendi', newPost)
        } else {
            reject('Bir hata oluştu')
        }



    })
    return promise;
};

async function showPosts() {
    try {
        listPost()
        await addPost(newPost)
        listPost()
    } catch (error) {
        console.log(error)
    }
}
showPosts()
