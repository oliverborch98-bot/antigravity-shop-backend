import { Client } from '@notionhq/client';

const notion = new Client({
  auth: 'ntn_xv235443613aYdxrH514VTQhXSfyznMTnZpURijxQwV0IC',
});

async function main() {
  try {
    console.log('Søger efter Jack Roberts materiale i Notion...');
    const response = await notion.search({
      query: 'Jack Roberts',
      filter: {
        property: 'object',
        value: 'page',
      },
    });

    if (response.results.length === 0) {
      console.log('Ingen sider fundet mærket med "Jack Roberts".');
      console.log('Søger efter alle tilgængelige sider...');
      const allPages = await notion.search({});
      console.log('Sider fundet:', allPages.results.map(p => ({
        id: p.id,
        title: p.properties?.title?.title?.[0]?.plain_text || 'Uden titel'
      })));
    } else {
      console.log('Fandt følgende sider:');
      response.results.forEach(page => {
        console.log(`- [${page.id}] ${page.properties?.title?.title?.[0]?.plain_text || 'Side'}`);
      });
    }
  } catch (error) {
    console.error('Fejl under Notion søgning:', error.message);
  }
}

main();
