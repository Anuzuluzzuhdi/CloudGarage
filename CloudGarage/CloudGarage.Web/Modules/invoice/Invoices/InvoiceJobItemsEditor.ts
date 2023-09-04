namespace CloudGarage.invoice {

    @Serenity.Decorators.registerEditor()
    import fld = InvoicejobitemsRow.Fields;
    @Serenity.Decorators.registerEditor("invoice.InvoiceJobItemsEditor")
    export class InvoiceJobItemsEditor extends Serenity.Extensions.GridEditorBase<InvoicejobitemsRow> {
        protected getColumnsKey() { return InvoicejobitemsColumns.columnsKey; }
        protected getLocalTextPrefix() { return InvoicejobitemsRow.localTextPrefix; }
        protected getDialogType() { return InvoiceJobItemsEditDialog; }

        constructor(container: JQuery) {
            super(container);
            this.disableAddButton();
        }
        protected getAddButtonCaption() {
            return "Jobs List";
        }

        public disableAddButton() {
            this.toolbar.findButton('column-picker-button').hide();
        }

        protected onViewProcessData(response) {
            return super.onViewProcessData(response);
        }

        protected getColumns() {
            var columns = super.getColumns();

            columns.unshift({
                field: 'Remove CheckList',
                name: '',
                format: ctx => '<a class="inline-action delete-row" title="delete">' +
                    '<i class="fa fa-times text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('delete-row')) {
                    var items = this.getItems();
                    items.splice(row, 1);
                    this.setItems(items);
                }
            }
        }
    }
}