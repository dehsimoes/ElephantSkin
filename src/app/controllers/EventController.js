const EventsRepository = require('../repositories/EventsRepository');
const EventService = require('../services/EventService');

class EventController {
  show(request, response) {
    const events = EventsRepository.findAll();

    response.json(events);
  }

  group(request, response) {
    const event = EventService.createSessions();

    response.json(event);
  }

  store(request, response) {
    const {url} = request.body;
    const { visitorId } = request.params;


    const event = EventsRepository.create({visitorId, url});

    response.json(event);
  }
}

module.exports = new EventController();