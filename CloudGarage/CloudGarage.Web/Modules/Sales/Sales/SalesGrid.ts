namespace CloudGarage.Sales {

    import fld = SalesRow.Fields;

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class SalesGrid extends Serenity.EntityGrid<SalesRow, any> {
        protected getColumnsKey() { return SalesColumns.columnsKey; }
        protected getDialogType() { return SalesDialog; }
        protected getIdProperty() { return SalesRow.idProperty; }
        protected getInsertPermission() { return SalesRow.insertPermission; }
        protected getLocalTextPrefix() { return SalesRow.localTextPrefix; }
        protected getService() { return SalesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getPersistanceStorage(): Serenity.SettingStorage {
            return window.localStorage;
        }

        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(1, 0, {
                field: 'Print Invoice',
                name: '',
                format: ctx => '<a class="inline-action print-invoice" title="Download Invoice">' +
                    '<i class="fa fa-file-pdf-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(1, 0, {
                field: 'View Invoice',
                name: '',
                format: ctx => '<a class="inline-action view-invoice" title="View Invoice">' +
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

                if (target.hasClass('print-invoice')) {
                    window.location.href = Q.resolveUrl(`~/Reports/Print/Sale/Print?SalesId=${item.Id}`)

                }
                if (target.hasClass('view-invoice')) {
                    window.location.href = Q.resolveUrl(`~/Reports/Print/Sale/View/Print?SalesId=${item.Id}`)
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