const express = require('express')
const route = express.Router()
const articleController = require('../controllers/funController')

route.get('/', articleController.getHomepage)
route.get('/addNew', articleController.getAddNewPage)
route.post('/add-new', articleController.addNew)
route.get('/full-article/:id', articleController.getFullArticlePage)
route.get('/update-article/:id', articleController.getupdateArticle)
route.post('/update-article/:id', articleController.updateArticle)
route.get('/*', articleController.getNotfound)

module.exports = route

