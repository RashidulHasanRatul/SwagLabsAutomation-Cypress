class ProductPage {
  inventoryItem() {
    return cy.get(":nth-child(1) > .inventory_item_description");
  }
}
export default ProductPage;
