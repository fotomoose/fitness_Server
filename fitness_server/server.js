const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

const FILE_PATH = '/config/workout_data.json';

app.get('/api/workout/load', (req, res) => {
    if (fs.existsSync(FILE_PATH)) {
        const data = fs.readFileSync(FILE_PATH);
        res.json(JSON.parse(data));
    } else {
        res.json({});
    }
});

app.post('/api/workout/save', (req, res) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(req.body, null, 2));
    res.sendStatus(200);
});

app.listen(3001, () => {
    console.log('Fitness server running on port 3001');
});
