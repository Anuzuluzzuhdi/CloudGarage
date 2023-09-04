
namespace CloudGarage.Purchasing {

    @Serenity.Decorators.registerClass()
    export class PurchasedetailsGrid extends Serenity.EntityGrid<PurchasedetailsRow, any> {
        protected getColumnsKey() { return PurchasedetailsColumns.columnsKey; }
        protected getDialogType() { return PurchasedetailsDialog; }
        protected getIdProperty() { return PurchasedetailsRow.idProperty; }
        protected getInsertPermission() { return PurchasedetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return PurchasedetailsRow.localTextPrefix; }
        protected getService() { return PurchasedetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}