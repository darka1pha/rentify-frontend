import { getRequestConfig } from 'next-intl/server';
import fs from 'fs';
import path from 'path';

export default getRequestConfig(async () => {
  const locale = 'fa';

  // Get the directory path for the locale
  const dirPath = path.join(process.cwd(), `src/messages/${locale}`);

  // Read all JSON files in the locale directory
  const files = fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith('.json'));

  // Load and structure the messages based on file names
  const messages = files.reduce((acc, file) => {
    const filePath = path.join(dirPath, file);
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const key = path.basename(file, '.json');
    // const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);

    acc[key] = content;

    return acc;
  }, {} as Record<string, any>);

  return {
    locale,
    messages,
  };
});
