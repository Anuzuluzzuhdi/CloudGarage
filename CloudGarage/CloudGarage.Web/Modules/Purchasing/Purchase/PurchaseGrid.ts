namespace CloudGarage.Purchasing {

    import fld = PurchaseRow.Fields;

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class PurchaseGrid extends Serenity.EntityGrid<PurchaseRow, any> {
        protected getColumnsKey() { return PurchaseColumns.columnsKey; }
        protected getDialogType() { return PurchaseDialog; }
        protected getIdProperty() { return PurchaseRow.idProperty; }
        protected getInsertPermission() { return PurchaseRow.insertPermission; }
        protected getLocalTextPrefix() { return PurchaseRow.localTextPrefix; }
        protected getService() { return PurchaseService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getPersistanceStorage(): Serenity.SettingStorage {
            return window.localStorage;
        }

        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(1, 0, {
                field: 'Print Bill',
                name: '',
                format: ctx => '<a class="inline-action print-bill" title="Download Quotation">' +
                    '<i class="fa fa-file-pdf-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(1, 0, {
                field: 'View Bill',
                name: '',
                format: ctx => '<a class="inline-action view-bill" title="View Quotation">' +
                    '<i class="fa fa-eye text-blue"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            Q.first(columns, x => x.field == fld.SupplierCompanyName).format =
                ctx =>`<a href="javascript:;" class="inline-action suppliers-link" > ${ Q.htmlEncode(ctx.value) } </a>`;
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

                if (target.hasClass('print-bill')) {
                    window.location.href = Q.resolveUrl(`~/Reports/Print/Purchase/Print?PurchaseId=${item.Id}`)

                }
                if (target.hasClass('view-bill')) {
                    window.location.href = Q.resolveUrl(`~/Reports/Print/Purchase/View/Print?PurchaseId=${item.Id}`)
                }
                else if (target.hasClass("suppliers-link")) {

                    var suppliers = Q.first(CloudGarage.BusinessPartners.SuppliersRow.getLookup().items,
                        x => x.Id == item.SupplierId);

                    new BusinessPartners.SuppliersDialog().loadByIdAndOpenDialog(suppliers.Id);
                }
            }
        }
    }
}