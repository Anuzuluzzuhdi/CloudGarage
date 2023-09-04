
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class AgendaitemtypesGrid extends Serenity.EntityGrid<AgendaitemtypesRow, any> {
        protected getColumnsKey() { return AgendaitemtypesColumns.columnsKey; }
        protected getDialogType() { return AgendaitemtypesDialog; }
        protected getIdProperty() { return AgendaitemtypesRow.idProperty; }
        protected getInsertPermission() { return AgendaitemtypesRow.insertPermission; }
        protected getLocalTextPrefix() { return AgendaitemtypesRow.localTextPrefix; }
        protected getService() { return AgendaitemtypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}