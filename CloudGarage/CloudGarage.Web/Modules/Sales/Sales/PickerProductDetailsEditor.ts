    namespace CloudGarage.Sales {

        @Serenity.Decorators.registerEditor('CloudGarage.Sales.PickerProductDetailsEditor')
        export class PickOrderDetailsEditor extends Serenity.Extensions.GridEditorBase<SaledetailsRow> {
            protected getColumnsKey() { return SaledetailsColumns.columnsKey; }
            protected getDialogType() { return SaledetailsDialog; }
            protected getLocalTextPrefix() { return SaledetailsRow.localTextPrefix; }

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
                    var dlg = new ProductPickDialog({
                        hideProducts: this.view.getItems().map(x => x.ProductId)
                    });
                    dlg.onSuccess = (selected) => {
                        // filter already existing products
                        selected = selected.filter(x => !Q.any(this.view.getItems(), y => y.Id == x.Id));

                        for (var sel of selected) {
                            var item = <SaledetailsRow>{
                                ProductId: sel.Id,
                                ProductName: sel.ProductName,
                                Description: sel.UnitDescription,
                                UnitId: sel.UnitId,
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