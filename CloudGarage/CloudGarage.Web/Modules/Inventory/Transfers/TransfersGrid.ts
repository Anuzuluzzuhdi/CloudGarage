
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    export class TransfersGrid extends Serenity.EntityGrid<TransfersRow, any> {
        protected getColumnsKey() { return TransfersColumns.columnsKey; }
        protected getDialogType() { return TransfersDialog; }
        protected getIdProperty() { return TransfersRow.idProperty; }
        protected getInsertPermission() { return TransfersRow.insertPermission; }
        protected getLocalTextPrefix() { return TransfersRow.localTextPrefix; }
        protected getService() { return TransfersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}