namespace CloudGarage.Quotations {
    @Serenity.Decorators.registerEditor()
    import fld = QuotationjobitemsRow.Fields;
    @Serenity.Decorators.registerEditor("Quotations.QuotationsDetailEditor")
    export class QuotationsDetailEditor extends Serenity.Extensions.GridEditorBase<QuotationdetailsRow> {
        protected getColumnsKey() { return QuotationdetailsColumns.columnsKey; }
        protected getLocalTextPrefix() { return QuotationdetailsRow.localTextPrefix; }
        protected getDialogType() { return QuotationsDetailEditDialog; }

        constructor(container: JQuery) {
            super(container);
            this.disableAddButton();
        }
        protected getAddButtonCaption() {
            return "Products Detail";
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