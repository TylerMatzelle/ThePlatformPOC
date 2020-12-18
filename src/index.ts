import express from "express";

const app = express();
const port = 8000;

app.use(express.json);

interface IArticle{
    id: number;
    title: string;
    body: string;
    submited: Boolean;
    
}