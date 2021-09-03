module.exports = (app, port) => {
	app.listen(port, () => { 
		console.log('=======================') 
		console.log('Server Running !') 
		console.log('http://127.0.0.1:'+port)
		console.log('=======================') 
	})
}
