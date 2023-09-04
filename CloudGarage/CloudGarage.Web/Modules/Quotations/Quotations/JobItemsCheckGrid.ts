namespace CloudGarage.Quotations {
    export interface ProductPickOptions {
        hideProducts?: number[];
    }

    @Serenity.Decorators.registerClass()
    export class JobItemsCheckGrid extends Serenity.EntityGrid<QuotationjobitemsRow, ProductPickOptions> {

        protected getColumnsKey() { return QuotationjobitemsColumns.columnsKey; }
        protected getDialogType() { return <any>QuotationjobitemsDialog; }
        protected getIdProperty() { return QuotationjobitemsRow.idProperty; }
        protected getLocalTextPrefix() { return QuotationjobitemsRow.localTextPrefix; }
        protected getService() { return QuotationjobitemsService.baseUrl; }

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

                    [[QuotationjobitemsRow.Fields.Id], 'not in', [this.options.hideProducts]]);

            return true;
        }
    }
}
