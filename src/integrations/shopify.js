import { shopifyApi, LATEST_API_VERSION } from '@shopify/shopify-api';
import '@shopify/shopify-api/adapters/node';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Konfigurerer Shopify API klienten.
 * Bemærk: Vi bruger en Custom App (Admin API) til denne integration.
 */
const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET,
  adminApiAccessToken: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
  hostName: process.env.SHOPIFY_STORE_URL,
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: false,
});

/**
 * Henter butiksdata for at bekræfte forbindelsen.
 */
export const checkShopifyConnection = async () => {
  const session = shopify.session.customAppSession(process.env.SHOPIFY_STORE_URL);
  const client = new shopify.clients.Rest({ session });
  
  try {
    const response = await client.get({ path: 'shop' });
    return response.body.shop;
  } catch (error) {
    console.error('Fejl ved Shopify forbindelse:', error.message);
    throw error;
  }
};

/**
 * Eksempel på produkt-hentning.
 */
export const getProducts = async () => {
  const session = shopify.session.customAppSession(process.env.SHOPIFY_STORE_URL);
  const client = new shopify.clients.Rest({ session });
  
  try {
    const response = await client.get({ path: 'products' });
    return response.body.products;
  } catch (error) {
    console.error('Fejl ved hentning af produkter:', error.message);
    throw error;
  }
};
