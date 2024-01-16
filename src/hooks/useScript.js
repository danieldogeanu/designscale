import { useEffect } from 'react';

/**
 * Hook that generates a script tag and adds it at the bottom of the `body` tag.
 * @param {string} source The URL for the `src` attribute of the `script` tag.
 * @param {{async: boolean, defer: boolean}} options Optional attributes for the `script` tag.
 * @param {object} attributes Additional custom attributes for the `script` tag.
 */
export default function useScript(source, options = {}, attributes = {}) {
  useEffect(() => {
    // Create `script` element.
    const script = document.createElement('script');

    // Set `src` attribute.
    if (typeof source === 'string') script.src = source;

    // Set `async` attribute.
    if (typeof options === 'object' && Object.prototype.hasOwnProperty.call(options, 'async')) {
      if (typeof options.async === 'boolean') script.async = options.async;
    }

    // Set `defer` attribute.
    if (typeof options === 'object' && Object.prototype.hasOwnProperty.call(options, 'defer')) {
      if (typeof options.defer === 'boolean') script.defer = options.defer;
    }

    // Set the other attributes.
    if (typeof attributes === 'object') {
      Object.entries(attributes).forEach((entry) => {
        const [key, value] = entry;
        if (typeof key === 'string' && typeof value === 'string') {
          script.setAttribute(key, value);
        }
      });
    }

    // Append `script` to `body` element.
    document.body.appendChild(script);

    // Remove `script` on component unmount.
    return () => document.body.removeChild(script);
  }, [source, options, attributes]);
}
