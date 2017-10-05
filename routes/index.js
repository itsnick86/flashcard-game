const express = require('express');
const router = express.Router();

// router.use((req, res, next) => {
//   console.log("Hello");
//   next();
// });
//
// router.use((req, res, next) => {
//   console.log("World");
//   next();
// });

router.get('/', (req, res) => {
  const name = req.cookies.username
  if (name) {
    res.render('index', { name });
  } else {
    res.redirect('/hello')
  }
});

router.get('/hello', (req, res) => {
  res.render('hello');
});

router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

router.post('/goodby', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
});

module.exports = router;
