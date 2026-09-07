import express from 'express'
const app = express();
const PORT = 8000;

//Application Level Middleware
//Not-mount on path
// app.use((req, res, next) => {
//     console.log("Middleware 1");
//     next();
// })

// app.use((req, res, next) => {
//     console.log("Middleware 2");
//     next();
// })

//Mount on path
// app.use('/student/:id', (req, res, next) => {
//     console.log("Response Type", req.method)
//     next();
// })

// app.get('/student', (req, res) => {
//     console.log("Router Middleware");
//     res.send("Home Page")
// })

//Multiple Route Handler
// app.use('/user/:id', 
//     (req, res, next) => {
//         console.log("Requested URL: ", req.url)
//         next();
//     },
//     (req, res, next) =>{
//         console.log("Request Type: ", req.method)
//         next();
//     }
// )

// app.use('/students/:id', 
//     (req, res, next) => {
//         const id = parseInt(req.params.id);
//         if(id === 0) next('route');
//         else {
//             console.log(req.method);
//             next();
//         }
//     },
//     (req, res, next) => {
//         res.send("Routing handeled");
//     }
// )
// app.use('/students/:id', (req, res) => {
//     res.send("Routing handled if id = 0");
// })

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status().send("Error Handeled");
// })


app.use(express.json()); 

app.use(express.urlencoded({ extended: true })); 

app.post('/user', (req, res) => {
    console.log(req.body); 
    res.send({ status: "Success", dataReceived: req.body });
});

app.listen(PORT, () => {
    console.log("Server is listening...");
})