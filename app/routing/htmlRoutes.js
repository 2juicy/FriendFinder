app.get('/', (req, res) => {
    res.send('Hello Homepage');
});

app.get('/survey', (req, res) => {
    res.send('You are in the survey page');
});