require('dotenv').config()

const path = require('path')
const express = require('express')
const app = express()

require('./modules/server-init')(app, process.env.PORT)

// 미들웨어: (callback(req, res, next))
// app.use((req, res, next) => {})

const json = (obj) => {
	return (req, res, next) => {
		// 실행하고
		next()
	}
}

app.use(json({}))


// const memberRouter = require('./routes/member')
// const adminRouter = require('./routes/admin')
// const shopRouter = require('./routes/shop')
// const payRouter = require('./routes/pay')
// const mypageRouter = require('./routes/mypage')


// 라우터 미들웨어: (주소, router 객체)
app.use('/', express.static( path.join(__dirname, 'public') ))
app.get('/', (req, res, next) => {
	res.json({ express })
})
// app.use('/member', memberRouter)

// 라우터: (주소, callback(req, res, next))
// HTML: Method <form method="get/post">
// app.get()
// app.post()
// app.delete()
// app.put()
// app.all()

