const express = require('express');
const router = express.Router();
const { getTasks, createTasks } = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/', createTasks);

module.exports = router;