import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    version: "0.0.1",
    author: {
      email: "jaiswalsiddhant2001@gmail.com",
    },
    permissions: ['storage'],
    browser_specific_settings: {
      gecko: {
        id: '{e84d9c91-ca86-4572-9f30-aaf6de990704}',
        strict_min_version: '109.0',
        // @ts-ignore - this is mandatory in firefox new extensions
        data_collection_permissions: {
          required: ["none"]
        }
      },
    },
  },
});
