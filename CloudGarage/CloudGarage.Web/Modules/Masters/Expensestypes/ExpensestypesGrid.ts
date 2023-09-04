
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class ExpensestypesGrid extends Serenity.EntityGrid<ExpensestypesRow, any> {
        protected getColumnsKey() { return ExpensestypesColumns.columnsKey; }
        protected getDialogType() { return ExpensestypesDialog; }
        protected getIdProperty() { return ExpensestypesRow.idProperty; }
        protected getInsertPermission() { return ExpensestypesRow.insertPermission; }
        protected getLocalTextPrefix() { return ExpensestypesRow.localTextPrefix; }
        protected getService() { return ExpensestypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}