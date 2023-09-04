
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetingagendaGrid extends Serenity.EntityGrid<MeetingagendaRow, any> {
        protected getColumnsKey() { return MeetingagendaColumns.columnsKey; }
        protected getDialogType() { return MeetingagendaDialog; }
        protected getIdProperty() { return MeetingagendaRow.idProperty; }
        protected getInsertPermission() { return MeetingagendaRow.insertPermission; }
        protected getLocalTextPrefix() { return MeetingagendaRow.localTextPrefix; }
        protected getService() { return MeetingagendaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected addButtonClick() {
            this.editItem({
                MeetingId: this.meetingId
            });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.meetingId;
        }

        private _meetingId: number;

        get meetingId() {
            return this._meetingId;
        }

        set meetingId(value: number) {
            if (this._meetingId !== value) {
                this._meetingId = value;
                this.setEquality('MeetingId', value);
                this.refresh();
            }
        }
    }
}