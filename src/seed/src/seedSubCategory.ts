import { Subcategory } from "src/modules/subcategory/entities/subcategory.entity";
import { subCategorySeedData } from "../nonprod/subCategory.seed";

export const seedSubcategory = async (db): Promise<void> => {
  const seedData = subCategorySeedData;
  const count = seedData.length;
  if (!count) {
    return;
  }
  console.log("\x1b[33m%s\x1b[0m", `Seeding subcategory (${count} items)`);
  const subcategoryRepository = db.getRepository(Subcategory);
  await Promise.all(
    seedData.map(async data => {
      let subcategory = await subcategoryRepository.findOne({ where: { name: data.name } });
      if (!subcategory) {
        subcategory = new Subcategory();
      }
      Object.assign(subcategory, data);
      return subcategoryRepository.save(subcategory);
    }),
  );
};
