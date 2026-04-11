import { Client } from '@notionhq/client';
import dotenv from 'dotenv';

dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

/**
 * Henter indhold fra en Notion side eller database relateret til Jack Roberts.
 * @param {string} pageId 
 */
export const getJackRobertsIntel = async (pageId) => {
  try {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
  } catch (error) {
    console.error('Fejl ved hentning af Notion data:', error.message);
    throw error;
  }
};

/**
 * Henter alle blokke fra en side for at få det fulde tekstindhold.
 * @param {string} blockId 
 */
export const getPageContent = async (blockId) => {
  try {
    const response = await notion.blocks.children.list({ block_id: blockId });
    return response.results;
  } catch (error) {
    console.error('Fejl ved hentning af sideindhold:', error.message);
    throw error;
  }
};
