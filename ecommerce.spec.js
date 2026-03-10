import { test } from '@playwright/test';
import { LoginPage } from '../../pages/ecommerce/login';
import { SearchPage } from '../../pages/ecommerce/search';
import { AddCartPage } from '../../pages/ecommerce/addCart';


test('Login → Search iPod → Add to Cart', async ({ page }) => {

  // Create objects of all pages
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);
  const addCartPage = new AddCartPage(page);

  // Step 1: Go to login page & login
  await loginPage.nav();
  await loginPage.login();
  await loginPage.loginCheck();   // verify login success

  // Step 2: Go to home page (needed before search)
  await page.goto('https://ecommerce-playground.lambdatest.io/');

  // Step 3: Search for iPod
  await searchPage.searchIpod();

  // Step 4: Add iPod to cart
  await addCartPage.addCart();
});
