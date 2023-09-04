namespace CloudGarage.Purchasing {
    export interface ProductPickOptions {
        hideProducts?: number[];
    }

    @Serenity.Decorators.registerClass()
    export class ProductsCheckGrid extends Serenity.EntityGrid<Inventory.ProductsRow, ProductPickOptions> {

        protected getColumnsKey() { return Inventory.ProductsColumns.columnsKey; }
        protected getDialogType() { return <any>Inventory.ProductsDialog; }
        protected getIdProperty() { return Inventory.ProductsRow.idProperty; }
        protected getLocalTextPrefix() { return Inventory.ProductsRow.localTextPrefix; }
        protected getService() { return Inventory.ProductsService.baseUrl; }

        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery, options: ProductPickOptions) {
            super(container, options);

            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            return columns;
        }

        protected usePager() {
            return false;
        }

        protected getInitialTitle() {
            return null;
        }

        protected getButtons() {
            var buttons = super.getButtons();
            buttons = buttons.filter(x => x.cssClass != 'add-button');
            return buttons;
        }

        get selectedItems() {
            return this.rowSelection.getSelectedAsInt32().map(x => this.view.getItemById(x));
        }

        onViewSubmit() {
            if (!super.onViewSubmit())
                return false;

            var request = this.view.params as Serenity.ListRequest;
            if (this.options.hideProducts && this.options.hideProducts.length)
                request.Criteria = Serenity.Criteria.and(request.Criteria,

                    [[Inventory.ProductsRow.Fields.Id], 'not in', [this.options.hideProducts]]);

            return true;
        }
    }
}
