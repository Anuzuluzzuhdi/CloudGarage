
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetinglocationGrid extends Serenity.EntityGrid<MeetinglocationRow, any> {
        protected getColumnsKey() { return MeetinglocationColumns.columnsKey; }
        protected getDialogType() { return MeetinglocationDialog; }
        protected getIdProperty() { return MeetinglocationRow.idProperty; }
        protected getInsertPermission() { return MeetinglocationRow.insertPermission; }
        protected getLocalTextPrefix() { return MeetinglocationRow.localTextPrefix; }
        protected getService() { return MeetinglocationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}