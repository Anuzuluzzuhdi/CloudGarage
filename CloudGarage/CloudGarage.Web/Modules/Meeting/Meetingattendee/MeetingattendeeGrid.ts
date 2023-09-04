
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetingattendeeGrid extends Serenity.EntityGrid<MeetingattendeeRow, any> {
        protected getColumnsKey() { return MeetingattendeeColumns.columnsKey; }
        protected getDialogType() { return MeetingattendeeDialog; }
        protected getIdProperty() { return MeetingattendeeRow.idProperty; }
        protected getInsertPermission() { return MeetingattendeeRow.insertPermission; }
        protected getLocalTextPrefix() { return MeetingattendeeRow.localTextPrefix; }
        protected getService() { return MeetingattendeeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}