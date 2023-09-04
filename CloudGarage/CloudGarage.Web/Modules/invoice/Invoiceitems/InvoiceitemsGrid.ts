
namespace CloudGarage.invoice {

    @Serenity.Decorators.registerClass()
    export class InvoiceitemsGrid extends Serenity.EntityGrid<InvoiceitemsRow, any> {
        protected getColumnsKey() { return InvoiceitemsColumns.columnsKey; }
        protected getDialogType() { return InvoiceitemsDialog; }
        protected getIdProperty() { return InvoiceitemsRow.idProperty; }
        protected getInsertPermission() { return InvoiceitemsRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoiceitemsRow.localTextPrefix; }
        protected getService() { return InvoiceitemsService.baseUrl; }
                                                                                          
        constructor(container: JQuery) {
            super(container);
        }
    }
}                                                                                                                 