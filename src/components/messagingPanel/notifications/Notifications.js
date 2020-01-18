import PropTypes from 'prop-types';

function Notifications(data) {
  new Notification(data.from, { body: data.message });
}

export default Notifications;

Notifications.propTypes = {
  data: PropTypes.shape({
    time: PropTypes.number,
    id: PropTypes.string,
    from: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
};