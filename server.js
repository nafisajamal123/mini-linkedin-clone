const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1', authRoutes);
//app.use("/api/v1/users", userRoutes);

const postRoutes = require('./routes/postRoutes');
app.use('/api/v1/posts', postRoutes);


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(8000, () => console.log("Server started on port 8000"));
    })
    .catch(err => console.log(err));