import { Subcategory } from "src/modules/subcategory/entities/subcategory.entity";
import { subcategorySeedData } from "../nonprod/subCategory.seed";


export const seedSubcategory = async (db): Promise<void> => {
    const seedData = subcategorySeedData;
    const count = seedData.length;
    if (!count) {
      return;
    }
    console.log('\x1b[33m%s\x1b[0m', `Seeding subcategory (${count} items)`,seedData);
    // const subcategoryRepository = db.getRepository(Subcategory);
    // await Promise.all(
    //   seedData.map(async (data) => {
    //     let subcategory = await subcategoryRepository.findOne({ where: { id: data.id } });
    //     console.log('===', data);
    //     if (!subcategory) {
    //       subcategory = new (Subcategory);
    //     }
    //     // seedSubCategory = Object.assign(data);
        
    //   }),
    // );
  }