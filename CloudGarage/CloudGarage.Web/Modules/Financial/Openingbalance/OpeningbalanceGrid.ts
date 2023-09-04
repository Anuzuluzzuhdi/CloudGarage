
namespace CloudGarage.Financial {

    @Serenity.Decorators.registerClass()
    export class OpeningbalanceGrid extends Serenity.EntityGrid<OpeningbalanceRow, any> {
        protected getColumnsKey() { return OpeningbalanceColumns.columnsKey; }
        protected getDialogType() { return OpeningbalanceDialog; }
        protected getIdProperty() { return OpeningbalanceRow.idProperty; }
        protected getInsertPermission() { return OpeningbalanceRow.insertPermission; }
        protected getLocalTextPrefix() { return OpeningbalanceRow.localTextPrefix; }
        protected getService() { return OpeningbalanceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}