const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.get('/greet', (req, res) => {
	res.json({ message: "Hello, World!" });
});
app.post('/greet', (req, res) => {
	const name = req.body.name;
	res.json({ message: `Hello, ${name}!` });
});
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
