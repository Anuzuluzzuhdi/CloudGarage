
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    export class StocksGrid extends Serenity.EntityGrid<StocksRow, any> {
        protected getColumnsKey() { return StocksColumns.columnsKey; }
        protected getDialogType() { return StocksDialog; }
        protected getIdProperty() { return StocksRow.idProperty; }
        protected getInsertPermission() { return StocksRow.insertPermission; }
        protected getLocalTextPrefix() { return StocksRow.localTextPrefix; }
        protected getService() { return StocksService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}