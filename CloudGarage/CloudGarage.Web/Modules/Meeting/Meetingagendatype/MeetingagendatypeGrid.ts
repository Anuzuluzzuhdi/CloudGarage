
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetingagendatypeGrid extends Serenity.EntityGrid<MeetingagendatypeRow, any> {
        protected getColumnsKey() { return MeetingagendatypeColumns.columnsKey; }
        protected getDialogType() { return MeetingagendatypeDialog; }
        protected getIdProperty() { return MeetingagendatypeRow.idProperty; }
        protected getInsertPermission() { return MeetingagendatypeRow.insertPermission; }
        protected getLocalTextPrefix() { return MeetingagendatypeRow.localTextPrefix; }
        protected getService() { return MeetingagendatypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}