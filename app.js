import express from "express";

import {config} from 'dotenv';

import ErrorMiddleware from "./middlewares/Error.js";


config({
    path:'./config.env'
})


const app=express()


import faq from './routes/faqRoutes.js'

app.use('/api/v1',faq)

export default app

app.get('/',(req,res)=>
    res.send(
        `<h1> click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
    )
)

app.use(ErrorMiddleware)