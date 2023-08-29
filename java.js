class NFT {
  constructor(fruit , car ,job, UID ) {
    this.fruit =fruit;
    this.car = car;
    this.job = job;
    this.UID = UID;
  }
}

const nfts = [];
let count = 0;

function mintNFT(fruit , car ,job, UID ) {
  const nft = new NFT(fruit , car ,job, UID );
  nfts.push(nft);
  count++;
}

function listNFTs() {
  console.log("The list of total NFTs:\n");
  for (let i = 0; i < count; i++) {
    console.log(nfts[i]);
  }
}

function getTotalSupply() {
  console.log("The total number of NFTs created by the user:");
  console.log(count);
}

mintNFT("Mango", "AUDI", "Game devloper", "21BCG1050");
mintNFT("Peach", "BMW", "Software Devloper", "25BCS1000");

listNFTs();
getTotalSupply();