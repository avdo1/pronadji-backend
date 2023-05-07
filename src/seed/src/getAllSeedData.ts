import _ from 'lodash';
import base from '../base';
import nonprod from '../nonprod';
import prod from '../nonprod';
import { isProd } from './utils';

let data;

export const getAllSeedData = (): Record<string, unknown[]> => {
  if (_.isUndefined(data)) {
    const env = isProd() ? prod : nonprod;
    const keys = new Set(Object.keys(base));
    Object.keys(env).forEach((key) => keys.add(key));

    data = Array.from(keys).reduce((cfg, key) => {
      const baseData = base[key]?.data || [];
      const envData = env[key]?.data || [];
      let data = baseData;
      if (env[key]?.overwrite) {
        data = envData;
      } else {
        data = data.concat(envData);
      }
      cfg[key] = data;

      return cfg;
    }, {});
  }

  return data;
};

export const getSeedData = (key: string): unknown[] => {
  const data = getAllSeedData();
  return data[key] ?? [];
};