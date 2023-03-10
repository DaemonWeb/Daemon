# supabase-strapi-next
An starter template that includes Supabase, Strapi, NextJS and TailwindCSS

If you replace the supabase anon and service role keys, you need to also update backend/supabase/volumes/api/kong.yml

### Start the backend
```
cd backend
cp .env.example .env
docker compose up
```

### Use Strapi in Next
Generate STRAPI_API_TOKEN_PUBLIC in Strapi Admin Portal and add it to your `.env` file.