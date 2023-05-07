export const isProd = () =>
  ['production', 'prod', 'prd', 'uat'].includes(process.env.ENV_NAME);
  