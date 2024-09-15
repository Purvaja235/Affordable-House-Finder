const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors()); 
app.use(bodyParser.json()); 

mongoose.connect('mongodb://localhost:27017/Affordable_House_Finder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));

const scheduleSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  time: String,
  propertyId: String,
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

app.post('/api/schedule', async (req, res) => {

  console.log('Request body:', req.body);

  try {
    const { name, phone, date, time, propertyId } = req.body;

    if (!name || !phone || !date || !time || !propertyId) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const newSchedule = new Schedule({ name, phone, date, time, propertyId });
    
    await newSchedule.save();
    
    res.status(201).json({ success: true, message: 'Your viewing has been scheduled successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
