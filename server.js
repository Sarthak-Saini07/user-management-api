import app from "./app.js"
const PORT = process.env.PORT || 8080;
app.listen(8080, (err,data)=>{
    console.log("server running at http://localhost:8080");
})