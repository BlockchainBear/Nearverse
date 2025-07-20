import { NearBindgen, near, call, view, UnorderedMap } from 'near-sdk-js';

@NearBindgen({})
export class NonFungibleToken {
  owner_by_id = new UnorderedMap('a');

  @call
  mint({ token_id, owner_id }) {
    this.owner_by_id.set(token_id, owner_id);
  }

  @view
  nft_token({ token_id }) {
    const owner_id = this.owner_by_id.get(token_id);
    if (owner_id === null) {
      return null;
    }
    return { token_id, owner_id };
  }
}
