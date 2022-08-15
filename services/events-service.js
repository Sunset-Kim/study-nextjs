class EventsService {
  data;

  constructor(data) {
    this.data = data;
  }

  async fetchEvents() {
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

  getFeaturedEvents() {
    if (!this.data) return;
    return this.data.map((event) => (event.isFeatured ? event : undefined)).filter((item) => item);
  }
}

export default EventsService;
