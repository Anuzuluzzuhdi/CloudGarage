namespace CloudGarage.Quotations {

    import fld = QuotationsRow.Fields;

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class QuotationsGrid extends Serenity.EntityGrid<QuotationsRow, any> {
        protected getColumnsKey() { return QuotationsColumns.columnsKey; }
        protected getDialogType() { return QuotationsDialog; }
        protected getIdProperty() { return QuotationsRow.idProperty; }
        protected getInsertPermission() { return QuotationsRow.insertPermission; }
        protected getLocalTextPrefix() { return QuotationsRow.localTextPrefix; }
        protected getService() { return QuotationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getPersistanceStorage(): Serenity.SettingStorage {
            return window.localStorage;
        }

        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(1, 0, {
                field: 'Print Quotation',
                name: '',
                format: ctx => '<a class="inline-action print-quotation" title="Download Quotation">' +
                    '<i class="fa fa-file-pdf-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(1, 0, {
                field: 'View Quotation',
                name: '',
                format: ctx => '<a class="inline-action view-quotation" title="View Quotation">' +
                    '<i class="fa fa-eye text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            Q.first(columns, x => x.field == fld.CustomerName).format =
                ctx => `<a href="javascript:;" class="inline-action customer-link" > ${ Q.htmlEncode(ctx.value) } </a>`;
            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('print-quotation')) {
                    window.location.href = Q.resolveUrl(`~/Reports/Print/Quoatition/Print?QuotationsId=${item.Id}`)

                }
                if (target.hasClass('view-quotation')) {
                    window.location.href = Q.resolveUrl(`~/Reports/Print/Quoatition/View/Print?QuotationsId=${item.Id}`)
                }
                else if (target.hasClass("customer-link")) {

                    var customers = Q.first(CloudGarage.BusinessPartners.CustomersRow.getLookup().items,
                        x => x.Id == item.CustomerId);

                    new BusinessPartners.CustomersDialog().loadByIdAndOpenDialog(customers.Id);
                }
            }
        }
    }
}