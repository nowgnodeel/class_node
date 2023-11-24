const express = require('express');
const app = express;

app.listen(8080, () => {
  console.log('8080에서 서버 대기중...')
});

app.get('/book', (req, res) => {
  res.send('도서 페이지입니다.')
})