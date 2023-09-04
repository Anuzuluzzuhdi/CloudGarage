
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class FueltypesGrid extends Serenity.EntityGrid<FueltypesRow, any> {
        protected getColumnsKey() { return FueltypesColumns.columnsKey; }
        protected getDialogType() { return FueltypesDialog; }
        protected getIdProperty() { return FueltypesRow.idProperty; }
        protected getInsertPermission() { return FueltypesRow.insertPermission; }
        protected getLocalTextPrefix() { return FueltypesRow.localTextPrefix; }
        protected getService() { return FueltypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}