const CONTRACT_ADDRESS = "0x5E3b21e32a2474DA1601a7A256934443e8CeF946";
const ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "blogId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "blogTitle",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "subTitle",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "authorName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "blogContent",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "blogUploaded",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "coverImage",
          "type": "string"
        }
      ],
      "name": "BlogAdded",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "getAllblogs",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "blogId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "blogOwner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "blogTitle",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "subTitle",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "authorName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "blogContent",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "coverImage",
              "type": "string"
            }
          ],
          "internalType": "struct DeBlog.Blog[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "blogId_",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "blogTitle_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "subTitle_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "authorName_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "blogContent_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "coverImage_",
          "type": "string"
        }
      ],
      "name": "newBlog",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "blogOwner_",
          "type": "address"
        }
      ],
      "name": "tipToOwner",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ]
export { CONTRACT_ADDRESS, ABI }