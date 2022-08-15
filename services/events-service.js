class EventsService {
  data;

  constructor(data) {
    this.data = data;
  }

  async fetchAllEvents() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(
          "https://nextjs-b302d-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
        );
        const events = await response.json();
        this.data = events;
        resolve(events);
      } catch (error) {
        reject(error);
      }
    });
  }

  async fetchFeaturedEvents() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(
          "https://nextjs-b302d-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
        );
        const events = await response.json();

        resolve(events.filter((event) => event.isFeatured));
      } catch (error) {
        reject(error);
      }
    });
  }

  async fetchEventsById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(
          `https://nextjs-b302d-default-rtdb.asia-southeast1.firebasedatabase.app/events.json?orderBy="id"&equalTo="${id}"`
        );
        const json = await response.json();
        const event = Object.entries(json).map(([key, value]) => value);

        resolve(event);
      } catch {
        reject(error);
      }
    });
  }
}

export default EventsService;
