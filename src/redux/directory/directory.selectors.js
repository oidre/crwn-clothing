import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectSectionsDirectory = createSelector(
  [selectDirectory],
  directory => directory.sections
);