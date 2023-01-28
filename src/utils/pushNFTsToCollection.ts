// ToDo: Refactor code within connect wallet button components. 

import nfts from "../store/nfts";


function pushNFTsToCollection( data) {
    // chainAccount = ethereumAccount;
    // console.log($nfts)
    console.log(nfts)
    if (nfts && nfts.length) {
        let nfts = nfts.concat(data);
    } else {
        nfts.set(data);
    }
}

export default pushNFTsToCollection

