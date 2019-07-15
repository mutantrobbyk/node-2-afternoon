const express = require('express')
const app = express()
app.use(express.json())
const PORT = 3001
const messageCtrl = require('./controllers/messages_controller')
app.use(express.static('public/build'))

app.post('/api/messages', messageCtrl.create)
app.get('/api/messages', messageCtrl.read)
app.post('/api/messages/:id', messageCtrl.update)
app.delete('/api/messages/:id', messageCtrl.delete)





app.listen(PORT, () => console.log(`${PORT} a Space Oddesy`))