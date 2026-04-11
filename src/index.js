import express from 'express';
import dotenv from 'dotenv';
import { checkShopifyConnection } from './integrations/shopify.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Grundlæggende status-endpoint
app.get('/status', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Jack Roberts Backend'
  });
});

// Test endpoint for Shopify forbindelse
app.get('/test/shopify', async (req, res) => {
  try {
    const shopData = await checkShopifyConnection();
    res.json({ success: true, shop: shopData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Jack Roberts Backend kører på http://localhost:${PORT}`);
});
