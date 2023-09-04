
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    export class UnitsGrid extends Serenity.EntityGrid<UnitsRow, any> {
        protected getColumnsKey() { return UnitsColumns.columnsKey; }
        protected getDialogType() { return UnitsDialog; }
        protected getIdProperty() { return UnitsRow.idProperty; }
        protected getInsertPermission() { return UnitsRow.insertPermission; }
        protected getLocalTextPrefix() { return UnitsRow.localTextPrefix; }
        protected getService() { return UnitsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}