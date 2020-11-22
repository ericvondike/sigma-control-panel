import * as fromFeature from './feature.actions';

describe('loadFeatures', () => {
  it('should return an action', () => {
    expect(fromFeature.loadFeatures().type).toBe('[Feature] Load Features');
  });
});
