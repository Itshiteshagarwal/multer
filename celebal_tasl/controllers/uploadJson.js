const fs = require('fs');
const path = require('path');

exports.uploadJSONData = (req, res) => {
  try {
    const jsonData = req.body;

    if (!jsonData || Object.keys(jsonData).length === 0) {
      return res.status(400).send('No JSON data provided');
    }

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filePath = path.join(__dirname, '../uploads', `data-${uniqueSuffix}.json`);

    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf-8');

    res.status(200).send({
      message: 'JSON data saved successfully',
      filePath: filePath
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving JSON data');
  }
};
