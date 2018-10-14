/* eslint-disable object-shorthand */
import map from 'lodash/map';
import uniq from 'lodash/uniq';
import flattenDeep from 'lodash/flattenDeep';
import mixin from 'lodash/mixin';
import _ from 'lodash/wrapperLodash';

mixin(_, {
  map: map,
  uniq: uniq,
  flattenDeep: flattenDeep,
});

const uniqSubArray = (array, filterKey) => {
  const result = _.uniq(_.flattenDeep(_.map(array, filterKey)));
  const alphabeticalResult = result.sort();
  return alphabeticalResult;
};

export default (array, key, subKey) => {
  const trimToTerms = uniqSubArray(
    uniqSubArray(array, key)
    , subKey);
  return trimToTerms;
}
