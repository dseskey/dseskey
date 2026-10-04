import React from 'react';
import { SortDirection, SortField } from '../utils/sortUtils';

interface SortOption {
  value: SortField;
  label: string;
}

interface SortControlsProps {
  sortOptions: SortOption[];
  currentSort: SortField;
  currentDirection: SortDirection;
  onSortChange: (field: SortField) => void;
  onDirectionChange: (direction: SortDirection) => void;
}

const SortControls: React.FC<SortControlsProps> = ({
  sortOptions,
  currentSort,
  currentDirection,
  onSortChange,
  onDirectionChange,
}) => {
  return (
    <div className="sort-controls">
      <div className="sort-field">
        <label htmlFor="sort-select">Sort by:</label>
        <select
          id="sort-select"
          value={currentSort}
          onChange={(e) => onSortChange(e.target.value)}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="sort-direction">
        <button
          type="button"
          className={`sort-btn ${currentDirection === 'asc' ? 'active' : ''}`}
          onClick={() => onDirectionChange('asc')}
          aria-label="Sort ascending"
        >
          ↑
        </button>
        <button
          type="button"
          className={`sort-btn ${currentDirection === 'desc' ? 'active' : ''}`}
          onClick={() => onDirectionChange('desc')}
          aria-label="Sort descending"
        >
          ↓
        </button>
      </div>
    </div>
  );
};

export default SortControls;