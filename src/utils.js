
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
