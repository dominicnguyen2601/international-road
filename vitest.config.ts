import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Allows you to use globals like `describe`, `it`, `expect`
    environment: 'jsdom', // Use jsdom to simulate a browser environment
    transformMode: {
      web: [/\.[jt]sx$/], // Enable JSX/TSX support
    },
    coverage: {
      provider: 'c8', // Or 'istanbul' if you prefer
    },
  },
});
