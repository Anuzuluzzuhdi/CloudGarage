namespace CloudGarage.Meeting {
    @Serenity.Decorators.registerEditor('Meeting.MeetingAgendaEditor')
    export class MeetingAgendaEditor extends Serenity.Select2Editor<any, MeetingagendaRow> {

        constructor(hidden: JQuery) {
            super(hidden);
        }

        private _meetingId: number;

        get meetingId() {
            return this._meetingId;
        }

        set meetingId(value: number) {
            if (this._meetingId !== value) {
                this._meetingId = value;
                this.updateItems();
            }
        }

        protected updateItems() {
            this.clearItems();

            if (this._meetingId != null) {
                MeetingagendaService.List(
                    {
                        EqualityFilter: {
                            MeetingId: this._meetingId,
                        },
                        Sort: ["AgendaNumber"],
                        ColumnSelection: Serenity.ColumnSelection.KeyOnly,
                        IncludeColumns: [
                            MeetingagendaRow.Fields.AgendaId,
                            MeetingagendaRow.Fields.AgendaNumber,
                            MeetingagendaRow.Fields.Title
                        ]
                    },
                    response => {
                        for (var item of response.Entities)
                            this.addOption(item.AgendaId.toString(), item.AgendaNumber + " - " + item.Title, item);
                    },
                    {
                        async: false
                    });
            }
        }
    }
}