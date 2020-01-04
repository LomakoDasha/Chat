function Notifications(data) {
    if (data.length === 1) {
      new Notification(data[0].from, { body: data[0].message });
    }
  }
  export default Notifications;