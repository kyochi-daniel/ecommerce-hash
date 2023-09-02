import { renderCatalog } from "./cardProduct";
import { startCart, renderProductCart, updatePriceCart } from "./cartMenu";

import { startFilter } from "./filtersCatalog";

renderCatalog();
startCart();
renderProductCart();
updatePriceCart();
startFilter();
