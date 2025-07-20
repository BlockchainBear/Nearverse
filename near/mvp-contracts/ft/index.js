import { NearBindgen, near, call, view, UnorderedMap } from 'near-sdk-js';

@NearBindgen({})
export class FungibleToken {
  accounts = new UnorderedMap('a');
  total_supply = '0';

  @call
  init({ owner_id, total_supply }) {
    this.total_supply = total_supply;
    this.accounts.set(owner_id, this.total_supply);
  }

  @call
  internal_transfer({ sender_id, receiver_id, amount }) {
    // Implementation goes here
  }

  @view
  ft_total_supply() {
    return this.total_supply;
  }

  @view
  ft_balance_of({ account_id }) {
    return this.accounts.get(account_id) || '0';
  }
}
