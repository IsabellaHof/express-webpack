var express = require('express')
var router = express.Router()
var fs = require('fs')
var path = require('path')
var todos = require('../data/todos.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { todos })
})

router.post('/', function(req, res, next) {
  todos = [...todos, req.body]
  saveFile('../data/todos.json', todos, err => {
    err && res.send('Could not write file.')
    res.send(JSON.stringify({ success: true }))
  })
})

function saveFile(filePath, todos, callback) {
  fs.writeFile(path.join(__dirname, filePath), JSON.stringify(todos), callback)
}

function 

module.exports = router
