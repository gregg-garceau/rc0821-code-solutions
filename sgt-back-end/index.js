const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {

  const sql = `
    select * from grades;
  `;

  db.query(sql)
    .then(data => {
      const grades = data.rows;

      res.json(grades);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Get grades error:', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });

});

app.post('/api/grades', (req, res) => {
  const { course, name, score } = req.body;
  const scoreNum = parseInt(score);
  const validInt = Number.isInteger(scoreNum);

  if (!course) {
    return res.status(400).json({ error: 'Must enter a course name' });
  } else if (!name) {
    return res.status(400).json({ error: 'Must enter a student name' });
  } else if (!score) {
    return res.status(400).json({ error: 'Must enter a course grade' });
  } else if (validInt === false || scoreNum < 0 || scoreNum > 100) {
    return res.status(400).json({ error: 'Must enter a valid grade' });
  }

  const sql = `
    insert into "grades"
      ("name", "course", "score")
      values
        ($1, $2, $3)
    returning *;
  `;

  const params = [name, course, score];

  db.query(sql, params)
    .then(data => {
      const [grade] = data.rows;
      res.status(201).json(grade);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Insert grade error: ', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });

});

app.put('/api/grades/:gradeId', (req, res) => {
  const { course, name, score } = req.body;
  const gradeId = parseInt(req.params.gradeId);
  const validInt = Number.isInteger(gradeId);

  if (!course) {
    return res.status(400).json({ error: 'Must enter a course name' });
  } else if (!name) {
    return res.status(400).json({ error: 'Must enter a student name' });
  } else if (!score) {
    return res.status(400).json({ error: 'Must enter a course grade' });
  } else if (validInt === false) {
    return res.status(400).json({ error: 'Must enter a valid gradeId' });
  }

  const sql = `
    update "grades"
       set "course" = $1,
           "name" = $2,
           "score" = $3
     where "gradeId" = $4
     returning *;
  `;

  const params = [course, name, score, gradeId];

  db.query(sql, params)
    .then(data => {
      const [grade] = data.rows;
      if (!grade) {
        return res.status(404).json({ error: 'ID does not exist in database' });
      }

      res.json(grade);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Insert grade error: ', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);
  const validInt = Number.isInteger(gradeId);

  if (validInt === false) {
    return res.status(400).json({ error: 'Must enter a valid gradeId' });
  }

  const sql = `
    delete from "grades"
     where "gradeId" = $1
    returning *;
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(data => {
      const [grade] = data.rows;
      if (!grade) {
        return res.status(404).json({ error: 'ID does not exist in database' });
      }

      res.status(204).json(grade);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Insert grade error: ', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on PORT:3000');
});
