import { chromium } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

(async () => {
  // Open visible browser for manual login
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to login page
  await page.goto('https://www.office.com/');

  console.log('⚡ Please login manually (includes 2FA, PIN, etc).');
  console.log('⚡ After reaching the Office hub, come back here and wait.');

  // Wait for login (timeout = 3 min)
  await page.waitForURL(/office\.com/, { timeout: 180_000 }).catch(() => {});
  // Add extra time just to be safe
  await page.waitForTimeout(60_000);

  // Save cookies and localStorage to auth.json
  await context.storageState({ path: 'storage/auth.json' });

  await browser.close();
  console.log('✅ Session saved to storage/auth.json');
})();

