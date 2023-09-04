
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class MeetingtypesGrid extends Serenity.EntityGrid<MeetingtypesRow, any> {
        protected getColumnsKey() { return MeetingtypesColumns.columnsKey; }
        protected getDialogType() { return MeetingtypesDialog; }
        protected getIdProperty() { return MeetingtypesRow.idProperty; }
        protected getInsertPermission() { return MeetingtypesRow.insertPermission; }
        protected getLocalTextPrefix() { return MeetingtypesRow.localTextPrefix; }
        protected getService() { return MeetingtypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}