
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    export class GoodsissuedetailsGrid extends Serenity.EntityGrid<GoodsissuedetailsRow, any> {
        protected getColumnsKey() { return GoodsissuedetailsColumns.columnsKey; }
        protected getDialogType() { return GoodsissuedetailsDialog; }
        protected getIdProperty() { return GoodsissuedetailsRow.idProperty; }
        protected getInsertPermission() { return GoodsissuedetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return GoodsissuedetailsRow.localTextPrefix; }
        protected getService() { return GoodsissuedetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}