const express = require('express');
const app = express();
const cors = require('cors');
const port = 3002;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');
const Detail = require('./models/Detail');

app.use(cors());
app.use(express.json());

const uri = 'mongodb://myuser00001:myuser123456@ac-mcgjvdm-shard-00-00.jbqiucq.mongodb.net:27017,ac-mcgjvdm-shard-00-01.jbqiucq.mongodb.net:27017,ac-mcgjvdm-shard-00-02.jbqiucq.mongodb.net:27017/?ssl=true&replicaSet=atlas-122m8h-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

const connect =async () => {
    try{
        await mongoose.connect(uri);
        console.log('Connect to MongoDB');
    }
    catch(error) {
         console.log('MongoDB Error: ', error); 
    }
};

/*connect();

app.use('/api', router);

// New endpoint to fetch details by ID
app.get('/api/details/:id', async (req, res) => {
    try {
        const detail = await Detail.findOne({ id: req.params.id });
        if (!detail) return res.status(404).send('Detail not found');
        res.send(detail);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

const server = app.listen(3002, '0.0.0.0', () => {
    console.log('Node server is listning to ${server.address().port}')
});

app.use('/api', router);   */


//new
connect();

app.use('/api', router);

// New endpoint to fetch details by ID
app.get('/api/details/:id', async (req, res) => {
    try {
        console.log('Fetching details for ID:', req.params.id);
        const detail = await Detail.findOne({ id: parseInt(req.params.id, 10) });
        if (!detail) {
            console.log('Detail not found');
            return res.status(404).send('Detail not found');
        }
        console.log('Detail found:', detail);
        res.send(detail);
    } catch (error) {
        console.error('Error fetching details:', error);
        res.status(500).send('Server error');
    }
});

const server = app.listen(3002, '0.0.0.0', () => {
    console.log(`Node server is listening on port 3002`);
});