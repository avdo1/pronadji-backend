import { Category } from "src/modules/category/entities/category.entity";
import { categorySeedData } from "../nonprod/category.seed";

export const seedCategory = async (db): Promise<void> => {
  const seedData = categorySeedData;
  const count = seedData.length;
  if (!count) {
    return;
  }
  console.log("\x1b[33m%s\x1b[0m", `Seeding category (${count} items)`);
  const categoryRepository = db.getRepository(Category);
  await Promise.all(
    seedData.map(async data => {
      let category = await categoryRepository.findOne({ where: { categoryName: data.categoryName } });
      if (!category) {
        category = new Category();
      }
      let categoryItem = Object.assign(data);
      return categoryRepository.save(categoryItem);
    }),
  );
};
