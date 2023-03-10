import path from "path";

const artifactPath = path.resolve('./artifacts');

export default ({ env }) => ({
    // enable a plugin that doesn't require any configuration
    i18n: true,
    graphql: {
        enabled: true,
        config: {
            artifacts: {
                schema: path.join(artifactPath, "schema.graphql"),
                typegen: path.join(artifactPath, "types.d.ts"),
            },
            endpoint: '/graphql',
            generateArtifacts: true,
            shadowCRUD: true,
            playgroundAlways: false,
            depthLimit: 7,
            amountLimit: 100,
            apolloServer: {
                tracing: true,
            },
        },
    },
    upload: {
      config: {
        provider: 'strapi-provider-upload-supabase-storage',
        providerOptions: {
          apiKey: env('SUPABASE_API_KEY'),
          apiUrl: env('SUPABASE_API_URL'),
          apiInternalDomain: env('SUPABASE_INTERNAL_API_DOMAIN'),
        },
      },
    },
});