
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    export class GoodsreceiptdetailsGrid extends Serenity.EntityGrid<GoodsreceiptdetailsRow, any> {
        protected getColumnsKey() { return GoodsreceiptdetailsColumns.columnsKey; }
        protected getDialogType() { return GoodsreceiptdetailsDialog; }
        protected getIdProperty() { return GoodsreceiptdetailsRow.idProperty; }
        protected getInsertPermission() { return GoodsreceiptdetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return GoodsreceiptdetailsRow.localTextPrefix; }
        protected getService() { return GoodsreceiptdetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }                                                                     
}