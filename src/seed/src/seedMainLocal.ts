import { MainLocal } from "src/modules/main-local/entities/main-local.entity";
import { mainLocalSeedData } from "../nonprod/mainLocal.seed";


export const seedMainLocal = async (db): Promise<void> => {
    const seedData = mainLocalSeedData;
    const count = seedData.length;
    if (!count) {
      return;
    }
    console.log('\x1b[33m%s\x1b[0m', `Seeding main local (${count} items)`,seedData);
    // const mainLocalRepository = db.getRepository(MainLocal);
    // await Promise.all(
    //   seedData.map(async (data) => {
    //     let mainLocal = await mainLocalRepository.findOne({ where: { id: data.id } });
    //     console.log('===', data);
    //     if (!mainLocal) {
    //       mainLocal = new (MainLocal);
    //     }
    //     // mainLocalItem = Object.assign(data);
        
    //   }),
    // );
  }