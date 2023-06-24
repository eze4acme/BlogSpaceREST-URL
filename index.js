
  let postData = [];
  function renderPosts() {
    let html = ''
    postData.forEach((post) => {
        html += `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        <hr/>
        `
    })
    document.getElementById('blog-listing').innerHTML = html 
  }

    fetch('https://apis.scrimba.com/jsonplaceholder/posts', {method: 'GET'})
   .then(res => res.json())
   .then(data => { postData = data.slice(0, 5)
    renderPosts()
})
 
        const titleInput = document.getElementById("title")
        const bodyInput = document.getElementById("post")
      const formEl = document.getElementById("form")  
      formEl.addEventListener("submit", function(e) {
        e.preventDefault()
        postTitle = titleInput.value
        postBody = bodyInput.value
      if(postTitle && postBody){
        let data = {
          title: postTitle,
          body: postBody
      };
      fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(res => res.json())
      .then(post => {
          postData = [post, ...postData ]
          renderPosts()
           formEl.reset()
           
      })
      }
       
        
    })
