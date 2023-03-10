import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: ".strapi/schema.graphql",
    documents: ['pages/**/*.tsx'],
    generates: {
        './.graphql/': {
          preset: 'client',
          plugins: ["typescript"],
          presetConfig: {
            gqlTagName: 'gql',
          }
        }
      },
      ignoreNoDocuments: true,
}

export default config;