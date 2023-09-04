
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetingsGrid extends Serenity.EntityGrid<MeetingsRow, any> {
        protected getColumnsKey() { return MeetingsColumns.columnsKey; }
        protected getDialogType() { return MeetingsDialog; }
        protected getIdProperty() { return MeetingsRow.idProperty; }
        protected getInsertPermission() { return MeetingsRow.insertPermission; }
        protected getLocalTextPrefix() { return MeetingsRow.localTextPrefix; }
        protected getService() { return MeetingsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}