# rooster.os

## 🐓 Premium Silver Marketplace with AI Intelligence

A cutting-edge web application for buying and selling silver items with advanced features including:

- **AI-Powered Authentication**: Intelligent verification system to detect fakes
- **Blockchain Tokenization**: Silver-backed tokens for real assets
- **Advanced Categorization**: Filter by year, rarity, type, variety, and more
- **Live Bidding System**: Real-time bidding with rooster crow notifications
- **No Fakes Guarantee**: AI verification ensures authenticity

## 🎯 Features

### Core Marketplace Features
- Browse silver coins, bars, and collectibles
- Advanced filtering system:
  - **By Year**: Ancient (Pre-1900), Vintage (1900-1999), Modern (2000+)
  - **By Rarity**: Common, Uncommon, Rare, Very Rare
  - **By Type**: Coins, Bars
  - **By Category**: New, Ancients
  - **By Variety**: Bullion, Numismatic, Historical

### AI Intelligence System
- **Authenticity Verification**: Advanced AI algorithms verify each piece
- **Market Analysis**: Real-time price predictions and trend analysis
- **Rarity Scoring**: Intelligent rarity assessment (0-100 scale)
- **Fraud Detection**: Sophisticated fake detection system
- **Knowledge Base**: Quantum-level pattern recognition beyond traditional grading

### Blockchain & Tokenization
- **Silver-Backed Tokens**: Each verified item can be tokenized
- **NFT Integration**: Blockchain-verified ownership
- **Metadata Management**: Comprehensive on-chain data storage
- **Real Asset Backing**: Physical silver backing digital tokens

### Bidding System
- **Live Bidding**: Real-time bid placement
- **Rooster Crow Alert**: Unique audio notification on successful bids (🐓)
- **Bid History**: Track all bids for transparency
- **Automatic Updates**: Real-time price updates

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pewpi-infinity/rooster.os.git
cd rooster.os
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
rooster.os/
├── app/
│   ├── layout.js          # Main layout component
│   ├── page.js            # Home page with marketplace
│   └── roosterSound.js    # Audio utility for rooster crow
├── public/
│   ├── sounds/            # Audio files
│   └── images/            # Product images
├── package.json           # Project dependencies
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## 🎨 Technology Stack

- **Frontend**: React 19 with Next.js 16
- **Styling**: Inline CSS with modern gradients and effects
- **Audio**: Web Audio API for sound effects
- **State Management**: React Hooks (useState, useEffect)

## 🎮 How to Use

### Browsing Products
1. Use the filter panel to narrow down products by category, type, rarity, or year
2. Sort products by name, price, or year
3. Click on any product card to view details

### Placing Bids
1. Click on a product to open the detail modal
2. View AI intelligence analysis
3. Enter a bid amount higher than the current bid
4. Click "🐓 Place Bid" button
5. Hear the rooster crow on successful bid!

### Understanding AI Analysis
Each product shows:
- **Authenticity Verification**: ✅ = Verified genuine
- **Market Analysis**: AI-predicted price trends
- **Rarity Score**: Numerical rarity rating
- **Tokenization Status**: Whether blockchain token exists

## 🔐 Security & Authenticity

The AI system uses advanced algorithms to:
- Detect counterfeit items
- Verify authenticity against known patterns
- Analyze market data for fair pricing
- Prevent fake listings

**No Fakes Guarantee**: All verified items are guaranteed authentic.

## 🌟 Special Features

### Quantum Reality Analysis
Our AI doesn't just use dictionary definitions - it sees patterns and connections that traditional grading services miss. Like a canvas of infinite possibilities, the system understands:
- Hidden value markers
- Historical context
- Market psychology
- Rarity beyond conventional metrics

### Infinity Encapsulation
The operating system is designed for perfection, adding value to every listed coin through:
- Rich metadata capabilities
- Blockchain tokenization
- Real-world asset backing
- Future-proof architecture

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Products

Edit the `silverProducts` array in `app/page.js`:

```javascript
{
  id: 9,
  name: 'Your Product Name',
  year: 2024,
  category: 'new', // or 'ancients'
  type: 'coin', // or 'bar'
  rarity: 'rare',
  variety: 'bullion',
  price: 100.00,
  currentBid: 100.00,
  description: 'Product description',
  weight: '1 oz',
  purity: '.999',
  verified: true,
  tokenized: true
}
```

## 🎵 Audio Features

The rooster crow sound plays when:
- A successful bid is placed
- Using Web Audio API for cross-browser compatibility
- Placeholder sound included (can be replaced with real rooster audio)

## 📝 License

ISC

## 🤝 Contributing

Contributions are welcome! This marketplace represents the future of silver trading with AI intelligence and blockchain technology.

## 📧 Support

For issues or questions, please open an issue on GitHub.

---

**Built with ❤️ and powered by 🐓 Rooster Intelligence**
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

# Or run the interactive CLI
npm run cli
```

### Running Examples

The `examples/` directory contains several demonstration scripts:

```bash
# Basic marketplace usage
node examples/basic-usage.js

# Long-term auctions (up to 10 years)
node examples/long-term-auctions.js

# Rooster Cash transactions
node examples/rooster-cash-transactions.js

# Complete workflow demonstration
node examples/complete-workflow.js
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
