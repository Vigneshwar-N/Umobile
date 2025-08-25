export const data = [
  {
    "price": 589,
    "data": "Unlimited",
    "speed": "40 Mbps",
    "validity": "2 month",
    "category": "recommended",
    "onlyForYou": { label: "Special Offer", description: "Best value plan for 2 months at low cost." },
    "isLastRecharged": false
  },
  {
    "price": 739,
    "data": "Unlimited",
    "speed": "55 Mbps",
    "validity": "1 month",
    "category": "recommended",
    "onlyForYou": { label: "Editor's Pick", description: "Handpicked for best balance between speed and price." },
    "isLastRecharged": false
  },
  {
    "price": 799,
    "data": "Unlimited",
    "speed": "60 Mbps",
    "validity": "1 month",
    "category": "recommended",
    "onlyForYou": { label: "", description: "" },
    "isLastRecharged": false
  },
  {
    "price": 999,
    "data": "Unlimited",
    "speed": "100 Mbps",
    "validity": "1 month",
    "category": "recommended",
    "onlyForYou": { label: "", description: "" },
    "isLastRecharged": false
  },
  {
    "price": 829,
    "data": "Unlimited",
    "speed": "65 Mbps",
    "validity": "1 month",
    "category": "recommended",
    "onlyForYou": { label: "", description: "" },
    "isLastRecharged": false
  },

  {
    "price": 880,
    "data": "Unlimited",
    "speed": "60 Mbps",
    "validity": "1 month",
    "category": "basic",
    "onlyForYou": { label: "", description: "" },
    "isLastRecharged": false
  },
  {
    "price": 949,
    "data": "Unlimited",
    "speed": "90 Mbps",
    "validity": "1 month",
    "category": "basic",
    "onlyForYou": { label: "", description: "" },
    "isLastRecharged": false
  },
  {
    "price": 1099,
    "data": "Unlimited",
    "speed": "100 Mbps",
    "validity": "1 month",
    "category": "basic",
    "onlyForYou": { label: "", description: "" },
    "isLastRecharged": false
  },
  {
    "price": 1199,
    "data": "Unlimited",
    "speed": "110 Mbps",
    "validity": "1 month",
    "category": "basic",
    "onlyForYou": { label: "", description: "" },
    "isLastRecharged": false
  },

  {
    "price": 1349,
    "data": "Unlimited",
    "speed": "210 Mbps",
    "validity": "1 month",
    "category": "entertainment",
    "onlyForYou": { label: "", description: "" },
    "isLastRecharged": false
  },
  {
    "price": 1399,
    "data": "Unlimited",
    "speed": "200 Mbps",
    "validity": "1 month",
    "category": "entertainment",
    "onlyForYou": { label: "", description: "" },
    "isLastRecharged": false
  },
  {
    "price": 1449,
    "data": "Unlimited",
    "speed": "220 Mbps",
    "validity": "1 month",
    "category": "entertainment",
    "onlyForYou": { label: "", description: "" },
    "isLastRecharged": false
  },
  {
    "price": 1599,
    "data": "Unlimited",
    "speed": "300 Mbps",
    "validity": "1 month",
    "category": "entertainment",
    "onlyForYou": { label: "", description: "" },
    "isLastRecharged": false
  },
  {
    "price": 1649,
    "data": "Unlimited",
    "speed": "310 Mbps",
    "validity": "1 month",
    "category": "entertainment",
    "onlyForYou": { label: "", description: "" },
    "isLastRecharged": false
  },

  {
    "price": 399,
    "data": "1.5 GB/day",
    "speed": "30 Mbps",
    "validity": "1 month",
    "category": "money saver",
    "onlyForYou": { label: "Budget Deal", description: "Best affordable monthly plan for light users." },
    "isLastRecharged": false
  },
  {
    "price": 499,
    "data": "Unlimited",
    "speed": "35 Mbps",
    "validity": "1 month",
    "category": "money saver",
    "onlyForYou": { label: "Low Cost Plan", description: "Unlimited data at an entry-level price." },
    "isLastRecharged": false
  },
  {
    "price": 549,
    "data": "2 GB/day",
    "speed": "40 Mbps",
    "validity": "1.5 months",
    "category": "money saver",
    "onlyForYou": { label: "Extra Validity", description: "Perfect balance of price and extended usage." },
    "isLastRecharged": false
  },
  {
    "price": 649,
    "data": "Unlimited",
    "speed": "45 Mbps",
    "validity": "2 months",
    "category": "money saver",
    "onlyForYou": { label: "Saver Pack", description: "Pay less for 2 months with decent speed." },
    "isLastRecharged": false
  },
  {
    "price": 699,
    "data": "Unlimited",
    "speed": "50 Mbps",
    "validity": "2 months",
    "category": "money saver",
    "onlyForYou": { label: "Top Pick", description: "Cheapest long-term unlimited plan." },
    "isLastRecharged": false
  }
]



export const paymentOptions = [
  {
    title: "RECOMMENDED",
    options: [
      {
        title:'RECOMMENDED',
        name:'RECOMMENDED',
        leftIcon:'star'
      },
      {
        name: "ICICI Bank Credit Card",
        checkBox:true,
        leftIcon2:"iciciLogo",
        nameDescription: "xxxx-xxxx-xxxx-2201",
      },
      {
        name: "Airtel Payment Bank",
        checkBox:true,
        leftIcon2:"airtel",
        nameDescription: "xxxx-xxxx-xxxx-2201",
        balance:'₹0.4',
        nameDescription2:'minimum recharge required:₹6008.0',
        offerDescription:'Get up to RS. 90 cashback (min.30) on bill payment or RS.500 and above'

      },
      {
        name: "Airtel UPI",
        checkBox:true,
        leftIcon2:"upiLogo",
        nameDescription: "linked to PYTM a/c no xxx8187",
        nameDescription2:'change bank a/c',
        offerDescription:'Flat RS.20 Cashback',
        end:true

      },
    ],
  },
  {
    title: "UPI",
    options: [
      {
        name: "Airtel",
        checkBox:true,
        leftIcon2:"airtel",
        offerDescription:'Flat Rs.20 Cashback'
      },
      {
        name: "PhonePe",
        checkBox:true,
        leftIcon2:"phonePe",
      },
      {
        name: "Google pay",
        checkBox:true,
        leftIcon2:"gpay",
      },
      {
        name: "more Upi options",
        leftIcon:"menu",
        end:true,
        rightIconNext:'next'
      },

    ],
  },
  {
    title: "NET BANKING",
    options: [
      {
        name: "SBI",
        checkBox:true,
        leftIcon2:"sbiLogo",
      },
      {
        name: "HDFC",
        checkBox:true,
        leftIcon2:"hdfcLogo",
      },
      {
        name: "ICICI",
        checkBox:true,
        leftIcon2:"iciciLogo",
      },
      {
        name: "other banks",
        leftIcon:"menu",
        end:true,
        rightIconNext:'next'
      },

    ],
  }
];
