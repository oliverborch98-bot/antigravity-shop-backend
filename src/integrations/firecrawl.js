import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const FIRECRAWL_API_URL = 'https://api.firecrawl.dev/v0';

/**
 * Udfører en simpel crawl af en URL for at hente tekstdata og metadata.
 * @param {string} url 
 */
export const crawlUrl = async (url) => {
  try {
    const response = await axios.post(`${FIRECRAWL_API_URL}/crawl`, {
      url: url,
      limit: 10,
      scrapeOptions: {
        pageSelection: 'main_content',
      }
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.FIRECRAWL_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Fejl ved Firecrawl scraping:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * Tjekker status på et igangværende crawl job.
 * @param {string} jobId 
 */
export const getCrawlStatus = async (jobId) => {
  try {
    const response = await axios.get(`${FIRECRAWL_API_URL}/crawl/${jobId}`, {
      headers: {
        'Authorization': `Bearer ${process.env.FIRECRAWL_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Fejl ved hentning af crawl status:', error.message);
    throw error;
  }
};
