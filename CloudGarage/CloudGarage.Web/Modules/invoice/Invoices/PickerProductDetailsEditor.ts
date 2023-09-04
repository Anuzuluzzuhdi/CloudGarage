namespace CloudGarage.invoice {

    @Serenity.Decorators.registerEditor('CloudGarage.invoice.PickerProductDetailsEditor')
    export class PickerProductDetailEditor extends Serenity.Extensions.GridEditorBase<InvoiceitemsRow> {
        protected getColumnsKey() { return InvoiceitemsColumns.columnsKey; }
        protected getDialogType() { return InvoiceitemsDialog; }
        protected getLocalTextPrefix() { return InvoiceitemsRow.localTextPrefix; }

            constructor(container: JQuery) {
                super(container);
            }

            validateEntity(row, id) {
                row.ProductId = Q.toId(row.ProductId);

                var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductId === row.ProductId);
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }

                row.ProductName = Inventory.ProductsRow.getLookup().itemById[row.ProductId].ProductName;
                row.Total = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            }

            protected getButtons(): Serenity.ToolButton[] {
                var buttons = super.getButtons();
                buttons.push({
                    title: "Pick Products",
                    cssClass: "add-button",
                    onClick: () => {
                        var dlg = new ProductPickerDialog({
                            hideProducts: this.view.getItems().map(x => x.ProductId)
                        });
                        dlg.onSuccess = (selected) => {
                            // filter already existing products
                            selected = selected.filter(x => !Q.any(this.view.getItems(), y => y.Id == x.Id));

                            for (var sel of selected) {
                                var item = <InvoiceitemsRow>{
                                    ProductID: sel.Id,
                                    ProductProductName: sel.ProductName,
                                    Description: sel.CategoryDescription,
                                    UnitName: sel.UnitName,
                                    UnitPrice: sel.UnitPrice,
                                    Quantity: 1,
                                    Discount: 0,
                                    Total: sel.UnitPrice
                                };

                                var id = this.getNextId();
                                item[this.getIdProperty()] = id;
                                this.view.addItem(item);
                            }

                            return true;
                        };
                        dlg.dialogOpen();
                    }
                });

                return buttons;
            }
        }
}