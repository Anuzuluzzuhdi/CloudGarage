
namespace CloudGarage.Note {

    @Serenity.Decorators.registerClass()
    export class NoteGrid extends Serenity.EntityGrid<NoteRow, any> {
        protected getColumnsKey() { return NoteColumns.columnsKey; }
        protected getDialogType() { return NoteDialog; }
        protected getIdProperty() { return NoteRow.idProperty; }
        protected getInsertPermission() { return NoteRow.insertPermission; }
        protected getLocalTextPrefix() { return NoteRow.localTextPrefix; }
        protected getService() { return NoteService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}