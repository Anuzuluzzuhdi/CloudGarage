
namespace CloudGarage.Quotations {

    @Serenity.Decorators.registerClass()
    export class QuotationdetailsGrid extends Serenity.EntityGrid<QuotationdetailsRow, any> {
        protected getColumnsKey() { return QuotationdetailsColumns.columnsKey; }
        protected getDialogType() { return QuotationdetailsDialog; }
        protected getIdProperty() { return QuotationdetailsRow.idProperty; }
        protected getInsertPermission() { return QuotationdetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return QuotationdetailsRow.localTextPrefix; }
        protected getService() { return QuotationdetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}    