const { v4 } = require('uuid');

const events = require('../../mocks');

class EventsRepository {
  findAll() {
    return events;
  }

  findSessionsByUser() {
    var sessionsByUser = events.reduce(function (sessions, element) {
      var visitorId = element.visitorId;

      sessions[visitorId] = sessions[visitorId] ?? [];

      sessions[visitorId].push(element);

      return sessions;

    }, {});

    for (let props in sessionsByUser) {
      const array = sessionsByUser[props];

      array.sort((a, b) => a.timestamp - b.timestamp);
    }

    return sessionsByUser;
  }

  create({ visitorId, url }) {
    if (!visitorId) {
      visitorId = v4();
    }
    const timestamp = Date.now();

    const newEvent = {
      url,
      visitorId,
      timestamp
    };

    events.push(newEvent);
  }
}

module.exports = new EventsRepository();