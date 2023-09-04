
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetingagendarelevantGrid extends Serenity.EntityGrid<MeetingagendarelevantRow, any> {
        protected getColumnsKey() { return MeetingagendarelevantColumns.columnsKey; }
        protected getDialogType() { return MeetingagendarelevantDialog; }
        protected getIdProperty() { return MeetingagendarelevantRow.idProperty; }
        protected getInsertPermission() { return MeetingagendarelevantRow.insertPermission; }
        protected getLocalTextPrefix() { return MeetingagendarelevantRow.localTextPrefix; }
        protected getService() { return MeetingagendarelevantService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}