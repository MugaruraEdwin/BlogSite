import bodyParser from "body-parser";
import express from "express";


const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static("public"))

app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.get('/createblog', (req,res) => {
    res.render('createblog.ejs')
})

app.post('/newblog',(req,res) => {
    const formData = req.body;

    const timestamp = new Date();

    formData.timestamp = timestamp;

    console.log(formData);

    res.render("index.ejs")
})


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});