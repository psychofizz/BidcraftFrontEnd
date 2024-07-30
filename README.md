# BidCraft Auction Platform

## Overview

BidCraft is an upcoming Honduran web-based auction platform that allows users to create, view, and participate in auctions. The platform is built using modern-ish web technologies and is designed to be responsive and user-friendly, it's also designed to fill the gap that has been left my many platforms on the market.

## Features

- **Create Auctions**: Users can create auctions by providing details such as item name, description, starting bid, and end date.
- **View Auctions**: Users can browse through a list of active auctions, filter by categories, and search for specific items using tags.
- **Bid on Auctions**: Registered and verified users can place bids on auctions.
- **Responsive Design**: The platform is optimized for both desktop and mobile devices.

## Technology Stack

- **Frontend**: React, Tailwind
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/psychofizz/BidcraftFrontEnd.git
   cd BidcraftFrontend
   ```

2. **Install dependencies:**
   ```bash
   npm i
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```
   REACT_APP_API_URL=http://127.0.0.1:8000
   ```
   This will be available as a web hosted backend later or as the locally based django 

4. **Run the development server:**
   ```bash
   npm start
   ```
   The frontend and backend will start, and the app will be accessible at `http://localhost:3000` 

## Deployment

The staging environment is deployed on [bidcraft.netlify.com](https://bidcraft.netlify.com). Any changes pushed to the `staging` branch will automatically trigger a deployment.

### Steps for Deployment

1. **Do a Pull Request of what is in develop into staging**
2. **Have the changed approved**
3. **Netlify Deployment:**
   Github Actions will detect the changes in the `staging` branch and automatically build and deploy the updated site.


## License

This project is licensed under some license, gplv3 ... idk, just use Linux.

## Contact

For any questions or feedback, please contact [psychofizz@pm.me](mailto:psychofizz@pm.me).

---
