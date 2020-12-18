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

function findNextId(){
    return Math.max(...article.map(article => article.id)) + 1;
}

const article:IArticle[] = [{
    id: 1,
    title: "Title",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    submited: false
}]

app.listen(port, () => {
    console.log(`Web Server Started and listening on localhost:${port}`);
});