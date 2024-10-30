import { Product } from "src/modules/product/entities/product.entity";
import { productSeedData } from "../nonprod/product.seed";

export const seedProduct = async (db): Promise<void> => {
  const seedData = productSeedData;
  const count = seedData.length;
  if (!count) {
    return;
  }
  console.log("\x1b[33m%s\x1b[0m", `Seeding  (${count} product items)`);
  const productRepository = db.getRepository(Product);
  await Promise.all(
    seedData.map(async data => {
      let product = await productRepository.findOne({ where: { id: data.id } });
      if (!product) {
        product = new Product();
      }
      let productItem = Object.assign(data);
      return productRepository.save(productItem);
    }),
  );
};
