import { execSync } from 'child_process';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_MANAGEMENT_TOKEN;

if (!spaceId) {
  console.error('CONTENTFUL_SPACE_ID is not set in .env file');
  process.exit(1);
}
if (!token) {
  console.error('CONTENTFUL_MANAGEMENT_TOKEN is not set in .env file');
  process.exit(1);
}

const command = `cf-content-types-generator -s ${spaceId} -t ${token} -o ./src/types/generated/contentful --v10 --response`;

try {
  execSync(command, { stdio: 'inherit' });
  console.log('Content types generated successfully');
} catch (error) {
  console.error('Error generating content types:', error);
  process.exit(1);
}
