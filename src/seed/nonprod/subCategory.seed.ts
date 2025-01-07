import { SubcatergoryName } from "src/common/types/subcategory.types";

export const subCategorySeedData = [
  {
    id: "00000000-0000-2000-a000-000000000001",
    name: SubcatergoryName.Kafa,
    mainLocals: [
      {
        mainlocalId: "00000000-0000-3000-a000-000000000001",
      },
      {
        mainlocalId: "00000000-0000-3000-a000-000000000002",
      },
    ],
  },
  {
    id: "00000000-0000-2000-a000-000000000002",
    name: SubcatergoryName.Nargila,
    mainLocals: [
      {
        mainlocalId: "00000000-0000-3000-a000-000000000008",
      },
      {
        mainlocalId: "00000000-0000-3000-a000-000000000006",
      },
      {
        mainlocalId: "00000000-0000-3000-a000-000000000003",
      },
    ],
  },
  {
    id: "00000000-0000-2000-a000-000000000003",
    name: SubcatergoryName.FastFood,
    mainLocals: [
      {
        mainlocalId: "00000000-0000-3000-a000-000000000007",
      },
    ],
  },
  {
    id: "00000000-0000-2000-a000-000000000004",
    name: SubcatergoryName.NocniKlub,
    mainLocals: [
      {
        mainlocalId: "00000000-0000-3000-a000-000000000005",
      },
    ],
  },
  {
    id: "00000000-0000-2000-a000-000000000005",
    name: SubcatergoryName.Restoran,
    mainLocals: [
      {
        mainlocalId: "00000000-0000-3000-a000-000000000004",
      },
    ],
  },
];

export type subcategorySeedData = (typeof subCategorySeedData)[0];
