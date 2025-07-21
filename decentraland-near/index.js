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

  @call
  transferLand({ newOwner, parcelId }) {
    const land = this.lands[parcelId];
    if (!land) {
      throw new Error(`Parcel ${parcelId} does not exist.`);
    }
    if (land.owner !== near.predecessorAccountId()) {
      throw new Error(`Only the current owner can transfer the land.`);
    }
    land.owner = newOwner;
    this.lands[parcelId] = land;
    near.log(`Transferred LAND ${parcelId} to ${newOwner}`);
  }
}
