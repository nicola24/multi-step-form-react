const express = require('express');

const db = require('../../db/models');

const router = express.Router();

router.route('/users').get((req, res, next) => {
  db.getUsers()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      next(err);
    });
});

router.route('/login/:email').get((req, res, next) => {
  const { email } = req.params;
  db.getUserEmail(email)
    .then((user) => {
      res.send({
        email: user[0].email,
        firstName: user[0].firstName,
        lastName: user[0].lastName,
        phone: user[0].phone,
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.route('/emailorphone/:id').get((req, res) => {
  const { id } = req.params;

  if (id.includes('@')) {
    db.getUserEmail(id)
      .then((user) => {
        res.send({ email: user[0].email });
      })
      .catch(() => {
        res.send({ email: 'noUser' });
      });
  } else {
    db.getUserPhone(id)
      .then((user) => {
        res.send({ email: user[0].email });
      })
      .catch(() => {
        res.send({ email: 'noUser' });
      });
  }
});

router.route('/email/pwd/:email/:pwd').get((req, res, next) => {
  const { email, pwd } = req.params;
  db.getUserEmail(email)
    .then((user) => {
      if (user[0].password === pwd) {
        res.send([{
          email: user[0].email,
          firstName: user[0].firstName,
          lastName: user[0].lastName,
          phone: user[0].phone,
        }]);
      } else {
        res.send(['wrongPW']);
      }
    })
    .catch((err) => {
      next(err);
    });
});

router.route('/signup').post((req, res, next) => {
  db.createUser(req.body).then(() => {
    res.send();
  }).catch((err) => {
    next(err);
  });
});

module.exports = router;
