
/**
 * Facade function for the `umami.track()` function.
 * @param {string} eventName The event name that you want to track.
 * @param {object} eventData An object with the event data you want to track.
 */
export function umamiTrack(eventName, eventData = {}) {
  if (window.umami && (typeof eventName === 'string' && eventName !== '') && typeof eventData === 'object') {
    window.umami.track(eventName, eventData);
  }
}

/** Object with Umami event types for consistency. */
export const umamiEventTypes = {
  button: 'Button',
  key: 'Key Event',
  filter: 'Filter',
  value: 'Value',
  social: 'Social Icon',
  website: 'Website',
};
