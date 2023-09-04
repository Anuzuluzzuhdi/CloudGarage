
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class AssemblytypesGrid extends Serenity.EntityGrid<AssemblytypesRow, any> {
        protected getColumnsKey() { return AssemblytypesColumns.columnsKey; }
        protected getDialogType() { return AssemblytypesDialog; }
        protected getIdProperty() { return AssemblytypesRow.idProperty; }
        protected getInsertPermission() { return AssemblytypesRow.insertPermission; }
        protected getLocalTextPrefix() { return AssemblytypesRow.localTextPrefix; }
        protected getService() { return AssemblytypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}