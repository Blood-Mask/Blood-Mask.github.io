const express = require('express')
const path = require('path')
const fs = require('fs')
const db = JSON.parse(fs.readFileSync('public/info.json'))

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/newPost', (req, res) => {
    res.render('newPost')
})
app.post('/createPost', (req, res) => {
    let ar = req.body.article
    let con = req.body.content
    let pa = req.body.pass
    if(!ar || !con || !pa || pa != "16082010"){
        return res.redirect('/')
    }else{
        db.posts.push({
            id: Date.now(),
            article: ar,
            content: con,
            comments: []
        })
        fs.writeFileSync('public/info.json', JSON.stringify(db, null, 1))
        res.redirect('/')
    }
})

app.post('/writeComment', (req, res) => {
    let d = new Date()
    let cUs = req.body.cUsername
    let cC = req.body.cContent
    let pId = parseInt(req.body.postId)
    let post = db.posts.find(p => p.id === pId)
    if(!post){
        return res.send('Post not finded')
    }
    post.comments.push({
        username: cUs,
        content: cC,
        date: `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`
    })
    fs.writeFileSync('public/info.json', JSON.stringify(db, null, 1))
    res.redirect(`post/${pId}`)
})

app.get('/post/:id', (req, res) => {
    let postId = parseInt(req.params.id)
    let post = db.posts.find(p => p.id === postId)
    if(post){
        res.render('post', { post })
    }
})

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})