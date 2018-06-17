app.get('/api/friends', (req, res) => {
    res.send('Hello Homepage');
});

app.post('/api/friends', (req, res) => {
    res.send('Posting a friend page');
    //Got to use path.join() possible here
});