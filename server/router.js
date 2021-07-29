const router = require('express').Router();

const tasks = require('./controllers/taskCon');

router.get('/actions', tasks.getTasks);
router.post('/actions', tasks.addTask);


module.exports = router;