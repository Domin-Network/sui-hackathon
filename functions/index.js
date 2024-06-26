const { onCall } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

exports.getAssetDetail = onCall(async (data, context) => {
  const { contractAddress, tokenId } = data.data;
  logger.info("Get Asset Detail", { structuredData: true });
  return {
    data: {
      name: "HONG KONG DIRL PASS",
      description:
        "A pass that connects ditital to IRL in Hong Kong. Check hongkongdirl.domin.foundation for more experiences.",
      image: "https://cdn.redreamer.review/HongKongDirlPass/HKDP.webp",
    },
  };
});

exports.getConsumerRecords = onCall(async (data, context) => {
  const { consumer } = data.data;
  logger.info(`Data: ${JSON.stringify(data.data)}`, { structuredData: true });
  logger.info(`Get Consumer Records: ${consumer}`, { structuredData: true });
  const testData = [
    {
      id: 1,
      source: {
        name: "Polygon",
        image: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
      },
      operator: "Operator #1",
      authorizer: "Authorizer #1",
      consumer: consumer
        ? consumer
        : "0x85b7ca161C311d9A5f0077d5048CAdFace89a267",
      assetData: {
        contractAddress: "0x85b7ca161C311d9A5f0077d5048CAdFace89a267",
        tokenId: 3,
      },
      detail: {},
      status: 1,
      createdAt: "2021-09-01T00:00:00Z",
    },
    {
      id: 2,
      source: {
        name: "Conflux",
        image: "https://icons.llamao.fi/icons/chains/rsz_conflux.jpg",
      },
      operator: "Operator #2",
      authorizer: "Authorizer #1",
      consumer: consumer
        ? consumer
        : "0x85b7ca161C311d9A5f0077d5048CAdFace89a267",
      assetData: {
        contractAddress: "0xb91b28d1ce16f1792cede7fed34dfb15678e0d88",
        tokenId: 1,
      },
      detail: {
        name: "7 ELEVEN - CITY CAFE Large Hot Latte Voucher",
        description: "Get large hot latte in CITY CAFE.",
        category: "Drink",
        type: "Coffee / Tea\n,\nOnsite shoppers",
        requirement:
          "Redeem with a specific Bonus NFT by achieving Uni Pass's Total level 10.",
        orderNumber: "BE2023112164777",
        purchaseProduct: "CITY CAFE-拿鐵(大杯-熱)",
        productType: "Coffee",
        discountValue: "55",
        redemptionExpiration: "2023/12/31",
        status: "已領取且已兌換",
        first6digitsOfRedemptionCode: "jmuiee",
      },
      status: 0,
      createdAt: "2021-09-02T00:00:00Z",
    },
    {
      id: 3,
      source: {
        name: "BNB Smart Chain",
        image: "https://icons.llamao.fi/icons/chains/rsz_binance.jpg",
      },
      operator: "Operator #1",
      authorizer: "Authorizer #1",
      consumer: "0x7c7B850d76884fC0e4B246eBEE6Cc84A23e3968f",
      assetData: {
        contractAddress: "0x7c7B850d76884fC0e4B246eBEE6Cc84A23e3968f",
        tokenId: 3,
      },
      detail: {},
      status: 0,
      createdAt: "2021-09-01T00:00:00Z",
    },
    {
      id: 4,
      source: {
        name: "Ethereum",
        image: "https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg",
      },
      operator: "Operator #3",
      authorizer: "Authorizer #2",
      consumer: "0x1234567890abcdef1234567890abcdef12345678",
      assetData: {
        contractAddress: "0x1234567890abcdef1234567890abcdef12345678",
        tokenId: 5,
      },
      detail: {},
      status: 1,
      createdAt: "2022-01-15T00:00:00Z",
    },
    {
      id: 5,
      source: {
        name: "Polygon",
        image: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
      },
      operator: "Operator #4",
      authorizer: "Authorizer #3",
      consumer: "0xabcdef1234567890abcdef1234567890abcdef12",
      assetData: {
        contractAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
        tokenId: 8,
      },
      detail: {},
      status: 1,
      createdAt: "2022-02-20T00:00:00Z",
    },
    {
      id: 6,
      source: {
        name: "Ethereum",
        image: "https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg",
      },
      operator: "Operator #5",
      authorizer: "Authorizer #4",
      consumer: "0x9876543210fedcba9876543210fedcba98765432",
      assetData: {
        contractAddress: "0x9876543210fedcba9876543210fedcba98765432",
        tokenId: 12,
      },
      detail: {
        name: "Solana NFT - Exclusive Access",
        description: "Get exclusive access to Solana events.",
        category: "Event",
        type: "Exclusive\n,\nSolana holders",
        requirement: "Own a Solana NFT and register.",
        orderNumber: "SO2023112164788",
        purchaseProduct: "Exclusive Access",
        productType: "Event",
        discountValue: "100",
        redemptionExpiration: "2023/12/31",
        status: "已領取且已兌換",
        first6digitsOfRedemptionCode: "abcdef",
      },
      status: 1,
      createdAt: "2022-03-10T00:00:00Z",
    },
    {
      id: 7,
      source: {
        name: "Polygon",
        image: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
      },
      operator: "Operator #6",
      authorizer: "Authorizer #5",
      consumer: "0x1234567890abcdef1234567890abcdef12345678",
      assetData: {
        contractAddress: "0x1234567890abcdef1234567890abcdef12345678",
        tokenId: 15,
      },
      detail: {},
      status: 1,
      createdAt: "2022-04-05T00:00:00Z",
    },
    {
      id: 8,
      source: {
        name: "Polygon",
        image: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
      },
      operator: "Operator #7",
      authorizer: "Authorizer #6",
      consumer: "0xabcdef1234567890abcdef1234567890abcdef12",
      assetData: {
        contractAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
        tokenId: 18,
      },
      detail: {
        name: "Polygon NFT - Special Offer",
        description: "Get special offers with Polygon NFT.",
        category: "Offer",
        type: "Special\n,\nPolygon holders",
        requirement: "Own a Polygon NFT and redeem.",
        orderNumber: "PO2023112164799",
        purchaseProduct: "Special Offer",
        productType: "Offer",
        discountValue: "50",
        redemptionExpiration: "2023/12/31",
        status: "已領取且已兌換",
        first6digitsOfRedemptionCode: "ghijkl",
      },
      status: 1,
      createdAt: "2022-05-01T00:00:00Z",
    },
    {
      id: 9,
      source: {
        name: "Conflux",
        image: "https://icons.llamao.fi/icons/chains/rsz_conflux.jpg",
      },
      operator: "Operator #8",
      authorizer: "Authorizer #7",
      consumer: "0x9876543210fedcba9876543210fedcba98765432",
      assetData: {
        contractAddress: "0x9876543210fedcba9876543210fedcba98765432",
        tokenId: 21,
      },
      detail: {},
      status: 1,
      createdAt: "2022-06-18T00:00:00Z",
    },
    {
      id: 10,
      source: {
        name: "Ethereum",
        image: "https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg",
      },
      operator: "Operator #9",
      authorizer: "Authorizer #8",
      consumer: "0x85b7ca161C311d9A5f0077d5048CAdFace89a267",
      assetData: {
        contractAddress: "0x1234567890abcdef1234567890abcdef12345678",
        tokenId: 25,
      },
      detail: {
        name: "Ethereum NFT - VIP Access",
        description: "Get VIP access with Ethereum NFT.",
        category: "Access",
        type: "VIP\n,\nEthereum holders",
        requirement: "Own an Ethereum NFT and redeem.",
        orderNumber: "ET2023112164800",
        purchaseProduct: "VIP Access",
        productType: "Access",
        discountValue: "75",
        redemptionExpiration: "2023/12/31",
        status: "已領取且已兌換",
        first6digitsOfRedemptionCode: "mnopqr",
      },
      status: 1,
      createdAt: "2022-07-11T00:00:00Z",
    },
    {
      id: 11,
      source: {
        name: "Polygon",
        image: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
      },
      operator: "Operator #10",
      authorizer: "Authorizer #9",
      consumer: "0xabcdef1234567890abcdef1234567890abcdef12",
      assetData: {
        contractAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
        tokenId: 28,
      },
      detail: {},
      status: 1,
      createdAt: "2022-08-20T00:00:00Z",
    },
    {
      id: 12,
      source: {
        name: "Ethereum",
        image: "https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg",
      },
      operator: "Operator #11",
      authorizer: "Authorizer #10",
      consumer: "0x9876543210fedcba9876543210fedcba98765432",
      assetData: {
        contractAddress: "0x9876543210fedcba9876543210fedcba98765432",
        tokenId: 32,
      },
      detail: {},
      status: 1,
      createdAt: "2022-09-05T00:00:00Z",
    },
    {
      id: 13,
      source: {
        name: "Polygon",
        image: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
      },
      operator: "Operator #12",
      authorizer: "Authorizer #11",
      consumer: "0x1234567890abcdef1234567890abcdef12345678",
      assetData: {
        contractAddress: "0x1234567890abcdef1234567890abcdef12345678",
        tokenId: 35,
      },
      detail: {},
      status: 1,
      createdAt: "2022-10-10T00:00:00Z",
    },
    {
      id: 14,
      source: {
        name: "Polygon",
        image: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
      },
      operator: "Operator #13",
      authorizer: "Authorizer #12",
      consumer: "0xabcdef1234567890abcdef1234567890abcdef12",
      assetData: {
        contractAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
        tokenId: 38,
      },
      detail: {},
      status: 1,
      createdAt: "2022-11-15T00:00:00Z",
    },
    {
      id: 15,
      source: {
        name: "Conflux",
        image: "https://icons.llamao.fi/icons/chains/rsz_conflux.jpg",
      },
      operator: "Operator #14",
      authorizer: "Authorizer #13",
      consumer: "0x9876543210fedcba9876543210fedcba98765432",
      assetData: {
        contractAddress: "0x9876543210fedcba9876543210fedcba98765432",
        tokenId: 41,
      },
      detail: {
        name: "Conflux NFT - Event Ticket",
        description: "Get event ticket with Conflux NFT.",
        category: "Event",
        type: "Ticket\n,\nConflux holders",
        requirement: "Own a Conflux NFT and redeem.",
        orderNumber: "CF2023112164801",
        purchaseProduct: "Event Ticket",
        productType: "Ticket",
        discountValue: "30",
        redemptionExpiration: "2023/12/31",
        status: "已領取且已兌換",
        first6digitsOfRedemptionCode: "stuvwx",
      },
      status: 1,
      createdAt: "2022-12-25T00:00:00Z",
    },
    {
      id: 16,
      source: {
        name: "Ethereum",
        image: "https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg",
      },
      operator: "Operator #15",
      authorizer: "Authorizer #14",
      consumer: "0x1234567890abcdef1234567890abcdef12345678",
      assetData: {
        contractAddress: "0x1234567890abcdef1234567890abcdef12345678",
        tokenId: 45,
      },
      detail: {},
      status: 1,
      createdAt: "2023-01-01T00:00:00Z",
    },
    {
      id: 17,
      source: {
        name: "Polygon",
        image: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
      },
      operator: "Operator #16",
      authorizer: "Authorizer #15",
      consumer: "0xabcdef1234567890abcdef1234567890abcdef12",
      assetData: {
        contractAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
        tokenId: 48,
      },
      detail: {},
      status: 1,
      createdAt: "2023-02-20T00:00:00Z",
    },
    {
      id: 18,
      source: {
        name: "Ethereum",
        image: "https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg",
      },
      operator: "Operator #17",
      authorizer: "Authorizer #16",
      consumer: "0x9876543210fedcba9876543210fedcba98765432",
      assetData: {
        contractAddress: "0x9876543210fedcba9876543210fedcba98765432",
        tokenId: 51,
      },
      detail: {
        name: "Solana NFT - Membership",
        description: "Get membership with Solana NFT.",
        category: "Membership",
        type: "Exclusive\n,\nSolana holders",
        requirement: "Own a Solana NFT and register.",
        orderNumber: "SM2023112164802",
        purchaseProduct: "Membership",
        productType: "Membership",
        discountValue: "200",
        redemptionExpiration: "2023/12/31",
        status: "已領取且已兌換",
        first6digitsOfRedemptionCode: "yzabcd",
      },
      status: 1,
      createdAt: "2023-03-10T00:00:00Z",
    },
    {
      id: 19,
      source: {
        name: "Polygon",
        image: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
      },
      operator: "Operator #18",
      authorizer: "Authorizer #17",
      consumer: "0x1234567890abcdef1234567890abcdef12345678",
      assetData: {
        contractAddress: "0x1234567890abcdef1234567890abcdef12345678",
        tokenId: 55,
      },
      detail: {},
      status: 1,
      createdAt: "2023-04-15T00:00:00Z",
    },
    {
      id: 20,
      source: {
        name: "Polygon",
        image: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
      },
      operator: "Operator #19",
      authorizer: "Authorizer #18",
      consumer: "0xabcdef1234567890abcdef1234567890abcdef12",
      assetData: {
        contractAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
        tokenId: 58,
      },
      detail: {},
      status: 1,
      createdAt: "2023-05-01T00:00:00Z",
    },
  ];
  return {
    data: testData,
  };
});
