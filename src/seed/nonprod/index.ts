import { categorySeedData } from "./category.seed";
import { mainLocalSeedData } from "./mainLocal.seed";
import { productSeedData } from "./product.seed";
import { roleSeedData } from "./role.seed";
import { subCategorySeedData } from "./subCategory.seed";
import { userSeedData } from "./user.seed";

export default {
  User: {
    data: userSeedData,
    overwrite: true,
  },
  Product: {
    data: productSeedData,
    overwrite: true,
  },
  MainLocal: {
    data: mainLocalSeedData,
    overwrite: true,
  },
  Category: {
    data: categorySeedData,
    overwrite: true,
  },
  Role: {
    data: roleSeedData,
    overwrite: true,
  },
  SubCategory: {
    data: subCategorySeedData,
    overwrite: true,
  },
};
