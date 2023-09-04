
namespace CloudGarage.Sales {

    @Serenity.Decorators.registerClass()
    export class SaledetailsGrid extends Serenity.EntityGrid<SaledetailsRow, any> {
        protected getColumnsKey() { return SaledetailsColumns.columnsKey; }
        protected getDialogType() { return SaledetailsDialog; }
        protected getIdProperty() { return SaledetailsRow.idProperty; }
        protected getInsertPermission() { return SaledetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return SaledetailsRow.localTextPrefix; }
        protected getService() { return SaledetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}