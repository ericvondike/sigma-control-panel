import * as fromAddressUsageTypeActions from './address-usage-types.actions';

describe('loadAddressUsageTypeActionss', () => {
  it('should return an action', () => {
    expect(fromAddressUsageTypeActions.loadAddressUsageTypeActionss().type).toBe('[AddressUsageTypeActions] Load AddressUsageTypeActionss');
  });
});
