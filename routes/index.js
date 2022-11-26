var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/products', (req, res) =>{
const data = [{"id" : 1, "name": "hello world", "price": 350, "description": "hello World !!!", "image": "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80", "url": "https://modelviewer.dev/shared-assets/models/Astronaut.glb"} ];
  return res.status(200).json(data);
})

module.exports = router;
