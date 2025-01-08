const express = require('express');
    const app = express();
    const port = 3000;

    app.use(express.json());

    app.get('/api/projects', (req, res) => {
      const projects = [
        { id: 1, name: 'Project 1', location: 'Dubai' },
        { id: 2, name: 'Project 2', location: 'Abu Dhabi' },
        { id: 3, name: 'Project 3', location: 'Sharjah' }
      ];
      res.json(projects);
    });

    app.listen(port, () => {
      console.log(`Mock API listening at http://localhost:${port}`);
    });
