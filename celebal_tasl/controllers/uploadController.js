exports.uploadFile = (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send('No file uploaded. Please upload a JSON file.');
      }
      res.status(200).send({
        message: 'File uploaded successfully',
        filePath: req.file.path
      });
    } catch (error) {
      res.status(500).send('Error uploading file');
    }
  };
  