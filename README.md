# 🐓 Rooster Marketplace

A decentralized auction marketplace powered by Rooster Cash, where users can create long-term auctions (up to 10 years) and bid using real virtual currency.

## 🌟 Features

### Rooster Cash Payment System
- **Purchase Rooster Cash**: Buy at $1 per Rooster Cash via PayPal (watsonkris611@gmail.com)
- **Sell Back to PayPal**: Convert your Rooster Cash back to USD
- **Transfer Between Users**: Send Rooster Cash to other marketplace users
- **Wallet System**: Each user has a secure wallet tracking their balance and transactions

### Auction System
- **Flexible Duration**: Create auctions lasting from minutes to 10 years
- **Logical Bidder Validation**: Only users with sufficient Rooster Cash can bid
- **Real-time Bidding**: Competitive bidding with automatic validation
- **Rooster Crow Notifications**: Get notified when someone bids on your auction! 🐓
- **Automatic Completion**: Auctions close automatically and transfer funds to sellers

### Marketplace Features
- Browse active auctions
- Track your auctions and bids
- View marketplace statistics
- Secure transaction handling

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/pewpi-infinity/rooster.os.git
cd rooster.os

# Install dependencies
npm install

# Run the demo
npm start
```

## 💰 How to Get Rooster Cash

1. **Purchase via PayPal**
   - Send payment to: `watsonkris611@gmail.com`
   - Price: $1.00 per Rooster Cash
   - Include your user ID in the payment note

2. **Receive Rooster Cash**
   - Once payment is confirmed, Rooster Cash will be added to your wallet
   - You can now bid on auctions or create your own

3. **Sell Back (Optional)**
   - You can sell Rooster Cash back via PayPal for $1.00 each
   - Refund requests are processed to the same PayPal email

## 📖 Usage Examples

### Register a User
```javascript
const RoosterMarketplace = require('./marketplace');
const marketplace = new RoosterMarketplace();

// Register new user
const user = marketplace.registerUser('my_user_id');
console.log(user);
```

### Purchase Rooster Cash
```javascript
// After completing PayPal payment
const transaction = marketplace.purchaseRoosterCash(
  'my_user_id',
  100,  // Amount of Rooster Cash
  'PAYPAL_TRANSACTION_ID'
);
console.log(`Purchased ${transaction.amount} Rooster Cash`);
```

### Create an Auction
```javascript
// Create a 1-year auction
const auction = marketplace.createAuction('my_user_id', {
  title: 'Vintage Rooster Collection',
  description: 'Rare rooster memorabilia from the 1950s',
  startingBid: 50,
  duration: 365 * 24 * 60 * 60 * 1000  // 1 year in milliseconds
});

console.log(`Auction created: ${auction.id}`);
console.log(`Ends at: ${auction.endTime}`);
```

### Place a Bid
```javascript
// Bid on an auction
const result = marketplace.placeBid(
  'auction_id',
  'bidder_user_id',
  75  // Bid amount in Rooster Cash
);

console.log(result.message);  // "🐓 ROOSTER CROW! You got a bid on your auction!"
```

### Browse Active Auctions
```javascript
const activeAuctions = marketplace.getActiveAuctions();
activeAuctions.forEach(auction => {
  console.log(`${auction.title} - Current bid: ${auction.currentBid} Rooster Cash`);
});
```

## 🏗️ Architecture

The marketplace consists of three main components:

### 1. RoosterCashSystem (`roosterCash.js`)
- Manages virtual currency
- Handles purchases, sales, and transfers
- Maintains user wallets and transaction history

### 2. AuctionSystem (`auctionSystem.js`)
- Creates and manages auctions
- Validates bids and bidders
- Handles auction lifecycle (active, completed, cancelled)
- Integrates with RoosterCashSystem for payment validation

### 3. RoosterMarketplace (`marketplace.js`)
- Main interface combining both systems
- Provides unified API for marketplace operations
- Handles user management and statistics

## 🔒 Security Features

- **Logical Bidder Validation**: Only users with sufficient Rooster Cash can place bids
- **Balance Verification**: All transactions verify sufficient funds before execution
- **Auction Integrity**: Sellers cannot bid on their own auctions
- **Automatic Fund Transfer**: Winner's payment automatically transfers to seller on auction completion

## 📊 API Reference

### Marketplace Methods

#### User Management
- `registerUser(userId)` - Register a new user and create wallet
- `getUserInfo(userId)` - Get complete user information including wallet and auctions

#### Rooster Cash Operations
- `getPaymentInstructions()` - Get PayPal payment details
- `purchaseRoosterCash(userId, amount, paypalTransactionId)` - Purchase Rooster Cash
- `sellRoosterCash(userId, amount)` - Sell Rooster Cash back to PayPal

#### Auction Operations
- `createAuction(userId, auctionData)` - Create a new auction
- `placeBid(auctionId, bidderId, bidAmount)` - Place a bid
- `getAuction(auctionId)` - Get auction details
- `getActiveAuctions()` - Get all active auctions
- `cancelAuction(auctionId, userId)` - Cancel an auction (before any bids)

#### Statistics
- `getStatistics()` - Get marketplace statistics

## 🎯 Auction Duration Examples

```javascript
// 1 hour auction
duration: 60 * 60 * 1000

// 1 day auction
duration: 24 * 60 * 60 * 1000

// 1 week auction
duration: 7 * 24 * 60 * 60 * 1000

// 1 month auction
duration: 30 * 24 * 60 * 60 * 1000

// 1 year auction
duration: 365 * 24 * 60 * 60 * 1000

// 10 year auction (maximum)
duration: 10 * 365 * 24 * 60 * 60 * 1000
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

ISC

## 📧 Contact

For Rooster Cash purchases and support:
- PayPal: watsonkris611@gmail.com

---

🐓 **Happy Bidding with Rooster Marketplace!** 🐓