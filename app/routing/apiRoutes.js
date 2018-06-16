app.get('/api/friends', (req, res) => {
    res.send('Hello Homepage');
});

app.post('/api/friends', (req, res) => {
    res.send('You are in the survey page');
});