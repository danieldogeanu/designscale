import { useContext } from 'react';
import { FilterContext } from '../providers/FilterProvider';

/**
 * Hook to set and get global filter state from the FilterProvider.
 * @returns {{state: {
 *    filter: number | null, scale: number, size: number
 * }, dispatch: ({
 *    type: 'filter' | 'scale' | 'size', value: number | string
 * }) => {}}} Returns the global filter state from the FilterProvider.
 */
export default function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}
