import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', (req, res) => {
    res.status(200).json({ status: true, message: 'Hello world!!' });
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
