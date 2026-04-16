import { test, expect } from "@playwright/test";

test.describe("Dashboard Search and Filter", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display search input and sort dropdown", async ({ page }) => {
    await expect(page.getByPlaceholder("Search your card")).toBeVisible();
    await expect(page.locator("select")).toBeVisible();
  });

  test("should display all three feature cards by default", async ({ page }) => {
    const cards = page.locator("h3");
    await expect(cards).toHaveCount(3);
    await expect(page.getByRole("heading", { name: "Fast" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Styled" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Responsive" })).toBeVisible();
  });

  test("should filter cards by title", async ({ page }) => {
    await page.getByPlaceholder("Search your card").fill("Fast");

    await expect(page.getByRole("heading", { name: "Fast" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Styled" })).not.toBeVisible();
    await expect(page.getByRole("heading", { name: "Responsive" })).not.toBeVisible();
  });

  test("should filter cards by description", async ({ page }) => {
    await page.getByPlaceholder("Search your card").fill("Tailwind");

    await expect(page.getByRole("heading", { name: "Styled" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Fast" })).not.toBeVisible();
    await expect(page.getByRole("heading", { name: "Responsive" })).not.toBeVisible();
  });

  test("should show no cards when search has no matches", async ({ page }) => {
    await page.getByPlaceholder("Search your card").fill("nonexistentterm");

    await expect(page.locator("h3")).toHaveCount(0);
  });

  test("should restore all cards when search is cleared", async ({ page }) => {
    await page.getByPlaceholder("Search your card").fill("Fast");
    await expect(page.locator("h3")).toHaveCount(1);

    await page.getByPlaceholder("Search your card").clear();
    await expect(page.locator("h3")).toHaveCount(3);
  });

  test("should sort cards A-Z", async ({ page }) => {
    await page.locator("select").selectOption("A-Z");

    const headings = page.locator("h3");
    await expect(headings.nth(0)).toHaveText("Fast");
    await expect(headings.nth(1)).toHaveText("Responsive");
    await expect(headings.nth(2)).toHaveText("Styled");
  });

  test("should sort cards Z-A", async ({ page }) => {
    await page.locator("select").selectOption("Z-A");

    const headings = page.locator("h3");
    await expect(headings.nth(0)).toHaveText("Styled");
    await expect(headings.nth(1)).toHaveText("Responsive");
    await expect(headings.nth(2)).toHaveText("Fast");
  });

  test("should filter and sort cards together", async ({ page }) => {
    await page.getByPlaceholder("Search your card").fill("s");
    await page.locator("select").selectOption("A-Z");

    // "Fast", "Responsive", "Styled" all contain "s"
    const headings = page.locator("h3");
    await expect(headings.nth(0)).toHaveText("Fast");
    await expect(headings.nth(1)).toHaveText("Responsive");
    await expect(headings.nth(2)).toHaveText("Styled");
  });
});
