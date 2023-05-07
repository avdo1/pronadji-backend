import { faker } from '@faker-js/faker';
import { v4 as uuid } from 'uuid';

class PaymentData {
  public educations = [];
  public generateEducations(investorsNum, num) {
    Array(investorsNum)
      .fill(0)
      .forEach((s, sIndex) => {
        Array(num)
          .fill(0)
          .forEach(() => {
            this.educations.push({
              id: uuid(),
              school: faker.company.name(),
              degree: faker.name.jobArea(),
              startYear: faker.datatype.number({ min: 2000, max: 2010 }),
              endYear: faker.datatype.number({ min: 2015, max: 2022 }),
              shortDescription: faker.lorem.paragraph(1)
            });
          });
      });
  }
}

const paymentData = new PaymentData();
export { paymentData };