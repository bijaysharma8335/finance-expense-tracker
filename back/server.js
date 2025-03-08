import app from "./app.js";

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
    console.log(`Server is running at ${port}`);
});
