
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    export class TransferdetailsGrid extends Serenity.EntityGrid<TransferdetailsRow, any> {
        protected getColumnsKey() { return TransferdetailsColumns.columnsKey; }
        protected getDialogType() { return TransferdetailsDialog; }
        protected getIdProperty() { return TransferdetailsRow.idProperty; }
        protected getInsertPermission() { return TransferdetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return TransferdetailsRow.localTextPrefix; }
        protected getService() { return TransferdetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}