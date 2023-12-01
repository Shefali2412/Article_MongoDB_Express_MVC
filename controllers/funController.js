const {render} = require('ejs')
const article = require("../model/articleModel")

const getHomepage = (req, res) => {
    article.find()
     .sort({create_at : -1})
     .then((result) => res.render('index', {articles : result}))
     .catch(err => console.log(err))
}

// get add new article page 
const getAddNewPage = (req, res) => {
    article.find()
    .then((err) => res.render('addNew', {err: err.errors}))
    .catch(err => console.log(err))

}


// post new article
const addNew = (req, res) => {
    const newArticle = new article(req.body)
     newArticle.save()
         .then((err) => res.redirect('/'))
         .catch(err => res.render('addNew', {err : err.errors}))
}

const getFullArticlePage = (req, res) => {
    article.findById(req.params.id)
    .then(result => res.render('fullArticle',{articles : result}))
    .catch(err => console.log(err))

}

const getupdateArticle = (req, res) => {
    article.findById(req.params.id)
    .then(result => res.render('edit',{article : result}))
    .catch(err => console.log(err))
}


const updateArticle = (req, res) => {
    article.findByIdAndUpdate(req.params.id , req.body)
    .then(result => res.redirect(`full-Article/$(result._id`))
    .catch(err => console.log(err))
}     

const getNotfound = (req, res) => {
    //article.find()
    // .then(result => 
    res.render('notfound')
   // .catch(err => console.log(err))
}



module.exports = {
    getHomepage, 
    addNew, 
    getAddNewPage,
    getFullArticlePage,
    getupdateArticle,
    updateArticle,
    getNotfound

   }
