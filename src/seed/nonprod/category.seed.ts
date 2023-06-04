import { CategoryName } from "src/common/types/catergory.types";

export const categorySeedData = [
    {
      id: '00000000-0000-2000-a000-000000000001',
      categoryName: CategoryName.Kafic,
      descriprion: 'Kafic'
    },
    {
      id: '00000000-0000-2000-a000-000000000002',
      categoryName: CategoryName.NargilaBar,
      descriprion: 'Nargila bar'
    },
    {
      id: '00000000-0000-2000-a000-000000000003',
      categoryName: CategoryName.Fastfood,
      descriprion: 'FastFood'
    },
    {
        id: '00000000-0000-2000-a000-000000000004',
        categoryName: CategoryName.NocniKlub,
        descriprion:'Nocni klub'
    },
    {
        id: '00000000-0000-2000-a000-000000000005',
        categoryName: CategoryName.Restoran,
        descriprion:'Restoran'
    }
    
  ];
  
  export type CategorySeedData = (typeof categorySeedData)[0];
  