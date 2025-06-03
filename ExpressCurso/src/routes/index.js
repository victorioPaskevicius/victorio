app.get('/about', (req,res)=>{
    res.render('index')
})

app.get('/dashboard', (req,res)=>{
    res.render('../views/index.ejs')
})