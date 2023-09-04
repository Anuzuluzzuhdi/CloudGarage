
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetingGrid extends Serenity.EntityGrid<MeetingRow, any> {
        protected getColumnsKey() { return MeetingColumns.columnsKey; }
        protected getDialogType() { return MeetingDialog; }
        protected getIdProperty() { return MeetingRow.idProperty; }
        protected getInsertPermission() { return MeetingRow.insertPermission; }
        protected getLocalTextPrefix() { return MeetingRow.localTextPrefix; }
        protected getService() { return MeetingService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}