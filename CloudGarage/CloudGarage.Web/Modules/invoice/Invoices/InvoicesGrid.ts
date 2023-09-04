
namespace CloudGarage.invoice {

    import fld = InvoicesRow.Fields;

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class InvoicesGrid extends Serenity.EntityGrid<InvoicesRow, any> {
        protected getColumnsKey() { return InvoicesColumns.columnsKey; }
        protected getDialogType() { return InvoicesDialog; }
        protected getIdProperty() { return InvoicesRow.idProperty; }
        protected getInsertPermission() { return InvoicesRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoicesRow.localTextPrefix; }
        protected getService() { return InvoicesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns(): Slick.Column[] {
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

            Q.first(columns, x => x.field == fld.JobcardWorkOrderNo).format =
                ctx => `<a href="javascript:;" class="inline-action jobcards-link" > ${ Q.htmlEncode(ctx.value) }</a>`;

            Q.first(columns, x => x.field == fld.VehicleVehicleRegistration).format =
                ctx => `<a href="javascript:;" class="inline-action vehicle-link" > ${ Q.htmlEncode(ctx.value) }</a>`;

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
                    window.location.href = Q.resolveUrl(`~/Reports/Print/Invoices/Print?InvoicesId=${item.Id}`)

                }
                if (target.hasClass('view-invoice')) {
                    window.location.href = Q.resolveUrl(`~/Reports/Print/Invoices/View/Print?InvoicesId=${item.Id}`)
                }
                else if (target.hasClass("customer-link")) {

                    var customers = Q.first(CloudGarage.BusinessPartners.CustomersRow.getLookup().items,
                        x => x.Id == item.CustomerId);

                    new BusinessPartners.CustomersDialog().loadByIdAndOpenDialog(customers.Id);
                }
                else if (target.hasClass("jobcards-link")) {

                    var jobcards = Q.first(CloudGarage.JobCards.JobcardsRow.getLookup().items,
                        x => x.Id == item.Jobcard);

                    new JobCards.JobcardsDialog().loadByIdAndOpenDialog(jobcards.Id);

                }
                else if (target.hasClass("vehicle-link")) {

                    var vehicles = Q.first(CloudGarage.Vehicles.VehicleRow.getLookup().items,
                        x => x.Id == item.Vehicle);

                    new Vehicles.VehicleDialog().loadByIdAndOpenDialog(vehicles.Id);
                }
            }
        }
        protected getPersistanceStorage(): Serenity.SettingStorage {
            return window.localStorage;
        }
    }
}