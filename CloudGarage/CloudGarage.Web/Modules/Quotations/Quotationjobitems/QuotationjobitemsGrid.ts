
namespace CloudGarage.Quotations {

    @Serenity.Decorators.registerClass()
    export class QuotationjobitemsGrid extends Serenity.EntityGrid<QuotationjobitemsRow, any> {
        protected getColumnsKey() { return QuotationjobitemsColumns.columnsKey; }
        protected getDialogType() { return QuotationjobitemsDialog; }
        protected getIdProperty() { return QuotationjobitemsRow.idProperty; }
        protected getInsertPermission() { return QuotationjobitemsRow.insertPermission; }
        protected getLocalTextPrefix() { return QuotationjobitemsRow.localTextPrefix; }
        protected getService() { return QuotationjobitemsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}