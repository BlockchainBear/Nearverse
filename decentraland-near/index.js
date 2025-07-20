import { NearBindgen, near, call, view } from 'near-sdk-js';

@NearBindgen({})
class LandNFT {
  lands = {};

  @call
  mintLand({ owner, parcelId, metadata }) {
    this.lands[parcelId] = { owner, metadata };
    near.log(`Minted LAND ${parcelId} for ${owner}`);
  }

  @view
  getLand({ parcelId }) {
    return this.lands[parcelId] || null;
  }
}
