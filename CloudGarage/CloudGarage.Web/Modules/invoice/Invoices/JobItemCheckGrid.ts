namespace CloudGarage.invoice {
    export interface ProductPickerOptions {
        hideProducts?: number[];
    }

    @Serenity.Decorators.registerClass()
    export class JobItemCheckGrid extends Serenity.EntityGrid<Masters.JobtypesRow, ProductPickerOptions> {

        protected getColumnsKey() { return Masters.JobtypesColumns.columnsKey; }
        protected getDialogType() { return <any>Masters.JobtypesDialog; }
        protected getIdProperty() { return Masters.JobtypesRow.idProperty; }
        protected getLocalTextPrefix() { return invoice.InvoicejobitemsRow.localTextPrefix; }
        protected getService() { return Masters.JobtypesService.baseUrl; }

        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery, options: ProductPickerOptions) {
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

                    [[invoice.InvoicejobitemsRow.Fields.Id], 'not in', [this.options.hideProducts]]);

            return true;
        }
    }
}
