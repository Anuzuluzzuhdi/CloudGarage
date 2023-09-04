
namespace CloudGarage.invoice {

    @Serenity.Decorators.registerClass()
    export class InvoicejobitemsGrid extends Serenity.EntityGrid<InvoicejobitemsRow, any> {
        protected getColumnsKey() { return InvoicejobitemsColumns.columnsKey; }
        protected getDialogType() { return InvoicejobitemsDialog; }
        protected getIdProperty() { return InvoicejobitemsRow.idProperty; }
        protected getInsertPermission() { return InvoicejobitemsRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoicejobitemsRow.localTextPrefix; }
        protected getService() { return InvoicejobitemsService.baseUrl; }     

        constructor(container: JQuery) {
            super(container);
        }                                                                                           
    }
}                                                                                                                                                    