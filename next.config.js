/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  env: {
    WEB3_STORAGE_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDYyQzZFN2I1NmYyOGMzOTRkQTRFRjk4MkI4RjNmQWJCZjExNjc5NTAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzcwODgxNjE5MjAsIm5hbWUiOiJ0ZXN0aW5nIn0.JXZmby_zisnw4PgvpQ1XZ7UMlflXHkcdU4vr_mRLqcc",
    SERVER_URL: "http://127.0.0.1:5001"
  },
}

module.exports = nextConfig
