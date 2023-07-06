
const EventsRepository = require('../repositories/EventsRepository');

class EventService {

  createSessions() {
    const sessionsByUser = EventsRepository.findSessionsByUser();

    const sessionPerUser = {};

    // Itera sobre cada visitante
    for (const visitorId in sessionsByUser) {

      const events = sessionsByUser[visitorId];
      let currentSession = null;
      let timestampLastEvent = 0;

      for (const event of events) {
        console.log(events);
        const { timestamp, url } = event;

        if (!currentSession || timestamp - timestampLastEvent > 600000) {
          currentSession = {
            duration: 0,
            pages: [],
            startTime: timestamp
          };

          sessionPerUser[visitorId] = sessionPerUser[visitorId] ?? [];
          sessionPerUser[visitorId].push(currentSession);
        }

        currentSession.pages.push(url);
        currentSession.duration = timestamp - currentSession.startTime;
        timestampLastEvent = timestamp;
      }

      if (currentSession && currentSession.pages.length === 1) {
        currentSession.duration = 0;
      }
    }

    return {
      sessionsByUser: sessionPerUser
    };
  }
}

module.exports = new EventService();