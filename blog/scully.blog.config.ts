import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "blog",
  outDir: './dist/static',
  routes: {
    '/post/:id': {
      type: 'contentFolder',
      id: {
        folder: "./markdown"
      }
    },
  }
};