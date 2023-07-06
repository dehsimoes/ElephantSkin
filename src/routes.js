const { Router } = require('express');
const EventController = require('./app/controllers/EventController');

const router = Router();

router.get('/events', EventController.show);
router.get('/teste', EventController.group);
router.post('/events/:visitorId?', EventController.store);

module.exports = router;