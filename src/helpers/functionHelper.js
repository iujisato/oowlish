import lodashFp from 'lodash/fp';
import lodashDebounce from 'lodash/debounce';
import lodashGet from 'lodash/get';
import lodashIsEmpty from 'lodash/isEmpty';

export const { compose } = lodashFp;
export const debounce = lodashDebounce;
export const get = lodashGet;
export const isEmpty = lodashIsEmpty;
