# Copilot Instructions

This repository uses the MCP servers configured in `.vscode/mcp.json` for Jira, Figma, and Playwright.

## Jira + Figma workflow

When the user provides a Jira issue URL:

1. Open the Jira URL using the Jira MCP integration.
2. Scan the Jira issue description and understand the requirement properly first  and then find any Figma URL(s).
3. If a Figma URL is found, open it using Figma MCP.
4. Use Figma MCP to inspect the referenced design and match the spacing, positions, layout, and visual structure as closely as possible when implementing or updating the app.
5. Prefer matching exact spacing, position, and layout details from the Figma design, especially for UI screens and components.

### Priority actions

- If Jira contains a Figma link, open that Figma file first.
- Extract the design details and compare them with the code implementation.
- Update code to align with the Figma design where feasible.

## Playwright test workflow

When the user asks to run Playwright tests:

1. Run the appropriate Playwright test command for this repo.
   - Example: `npx playwright test` or `npx @playwright/mcp@latest test`
2. Ensure tests are executed against the local application server.
3. Open or use the localhost URL where the app is served for Playwright testing.
   - The default local URL is typically `http://localhost:3000/`.
4. If the app is not running, start the local development server before running Playwright.

## Notes

alsways do the playwright tests when prompted not before that

- Use the configured MCP servers rather than manual browser-only workflows when possible.
- Always keep code changes aligned with the Figma design and Playwright verification steps.
- If there is any ambiguity about which local URL to use, confirm the development server and port with the user.
