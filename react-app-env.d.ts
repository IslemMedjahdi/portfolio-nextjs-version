/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
    NEXT_PUBLIC_SERVICE_ID: string;
    NEXT_PUBLIC_TEMPLATE_ID: string;
    NEXT_PUBLIC_USER_ID: string;
  }
}
