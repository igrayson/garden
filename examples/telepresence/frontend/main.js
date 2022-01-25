const { app } = require('./app');

const port = process.env.PORT
app.listen(port, '0.0.0.0', () => console.log('Frontend service started on port', port));
