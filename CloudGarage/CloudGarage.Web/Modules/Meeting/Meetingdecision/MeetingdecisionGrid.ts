
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetingdecisionGrid extends Serenity.EntityGrid<MeetingdecisionRow, any> {
        protected getColumnsKey() { return MeetingdecisionColumns.columnsKey; }
        protected getDialogType() { return MeetingdecisionDialog; }
        protected getIdProperty() { return MeetingdecisionRow.idProperty; }
        protected getInsertPermission() { return MeetingdecisionRow.insertPermission; }
        protected getLocalTextPrefix() { return MeetingdecisionRow.localTextPrefix; }
        protected getService() { return MeetingdecisionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}