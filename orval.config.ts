import { defineConfig } from 'orval';

export default defineConfig({
  coucou: {
    output: {
      mode: 'tags-split',
      target: 'src/app/api/endpoints/eb.ts',
      schemas: 'src/app/models',
      client: 'angular',
    },
    input: {
      target: './swagger/api-docs.json',
    },
  },
});
