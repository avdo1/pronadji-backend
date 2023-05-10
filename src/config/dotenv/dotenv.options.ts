import * as path from 'path';
const env = process.env.NODE_ENV;
const p = path.join(process.cwd(), `${env}.env`);
const dotEnvOptions = {
  path: p,
  loadedEnv: env,
  envFile: `${env}.env`,
  envPrefix: process.env.ENV_PREFIX,
  port: process.env.PORT,
};
export { dotEnvOptions };
