
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetingdecisionrelevantGrid extends Serenity.EntityGrid<MeetingdecisionrelevantRow, any> {
        protected getColumnsKey() { return MeetingdecisionrelevantColumns.columnsKey; }
        protected getDialogType() { return MeetingdecisionrelevantDialog; }
        protected getIdProperty() { return MeetingdecisionrelevantRow.idProperty; }
        protected getInsertPermission() { return MeetingdecisionrelevantRow.insertPermission; }
        protected getLocalTextPrefix() { return MeetingdecisionrelevantRow.localTextPrefix; }
        protected getService() { return MeetingdecisionrelevantService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}