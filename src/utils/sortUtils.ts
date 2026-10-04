export type SortDirection = 'asc' | 'desc';

export type SortField = string;

export interface SortableItem {
  [key: string]: any;
}

export const sortByField = <T extends SortableItem>(
  items: T[],
  field: SortField,
  direction: SortDirection = 'asc'
): T[] => {
  return [...items].sort((a, b) => {
    const aVal = a[field];
    const bVal = b[field];
    
    // Handle null/undefined values
    if (aVal == null && bVal == null) return 0;
    if (aVal == null) return direction === 'asc' ? 1 : -1;
    if (bVal == null) return direction === 'asc' ? -1 : 1;
    
    // Number comparison
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return direction === 'asc' ? aVal - bVal : bVal - aVal;
    }
    
    // String comparison
    const aStr = String(aVal).toLowerCase();
    const bStr = String(bVal).toLowerCase();
    
    if (aStr < bStr) return direction === 'asc' ? -1 : 1;
    if (aStr > bStr) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};

export const sortByDate = <T extends SortableItem>(
  items: T[],
  field: SortField,
  direction: SortDirection = 'desc'
): T[] => {
  return [...items].sort((a, b) => {
    const aDate = new Date(a[field]);
    const bDate = new Date(b[field]);
    
    // Handle invalid dates
    if (isNaN(aDate.getTime()) && isNaN(bDate.getTime())) return 0;
    if (isNaN(aDate.getTime())) return direction === 'asc' ? 1 : -1;
    if (isNaN(bDate.getTime())) return direction === 'asc' ? -1 : 1;
    
    return direction === 'asc' 
      ? aDate.getTime() - bDate.getTime()
      : bDate.getTime() - aDate.getTime();
  });
};

export const sortByPeriod = <T extends { period: string }>(
  items: T[],
  direction: SortDirection = 'desc'
): T[] => {
  return [...items].sort((a, b) => {
    const extractYear = (period: string): number => {
      // Extract the start year from periods like "2020 - Present" or "2017 - 2020"
      const match = period.match(/(\d{4})/);
      return match ? parseInt(match[1]) : 0;
    };
    
    const aYear = extractYear(a.period);
    const bYear = extractYear(b.period);
    
    return direction === 'asc' ? aYear - bYear : bYear - aYear;
  });
};