import { productData } from '../nonprod/product.seed';
import { dailyOfferData } from '../nonprod/dailyOffer.seed';
import { paymentData } from '../nonprod/payment.seed';
import { categoryData } from '../nonprod/category.seed';
import { userData } from '../nonprod/user.seed';
import { mainLocalData } from '../nonprod/mainLocal.seed';
import { roleData } from '../nonprod/role.seed';

export default {
  User: {
    data: userData.user,
    overwrite: false,
  },
  Product: {
    data: productData.product,
    overwrite: true,
  },
 Payment: {
    data: paymentData.payment,
    overwrite: false,
  },
  Category: {
    data: categoryData.category,
    overwrite: true,
  },
  DailyOffer: {
    data: dailyOfferData.dailyOffer,
    overwrite: true,
  },
  MainLocal: {
    data: mainLocalData.mainLocal,
    overwrite: true,
  },
  Role: {
    data: roleData.role,
    overwrite: true,
  }
};