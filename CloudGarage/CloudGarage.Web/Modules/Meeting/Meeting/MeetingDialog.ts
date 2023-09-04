
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class MeetingDialog extends Serenity.EntityDialog<MeetingRow, any> {
        protected getFormKey() { return MeetingForm.formKey; }
        protected getIdProperty() { return MeetingRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingRow.localTextPrefix; }
        protected getNameProperty() { return MeetingRow.nameProperty; }
        protected getService() { return MeetingService.baseUrl; }
        protected getDeletePermission() { return MeetingRow.deletePermission; }
        protected getInsertPermission() { return MeetingRow.insertPermission; }
        protected getUpdatePermission() { return MeetingRow.updatePermission; }

        protected form = new MeetingForm(this.idPrefix);

        private agendaGrid = new MeetingagendaGrid(this.byId('AgendaGrid'));
        private decisionGrid = new MeetingdecisionGrid(this.byId('DecisionGrid'));

        constructor() {
            super();

            this.form.EndDate.addValidationRule(this.uniqueName, e => {
                if (this.form.EndDate.valueAsDate != null &&
                    this.form.StartDate.valueAsDate != null &&
                    this.form.StartDate.valueAsDate > this.form.EndDate.valueAsDate) {
                    return "End Date can't be earlier than Start Date";
                }

                return null;
            });
        }

        protected arrange() {
            super.arrange();
            var attendeeGrid = this.form.AttendeeList.element.find('.grid-container');
            attendeeGrid.css('height', Math.max(150, this.element.height() - attendeeGrid.position().top - 60) + 'px')
                .triggerHandler('layout');
        }

        loadEntity(entity: MeetingRow) {
            super.loadEntity(entity);

            // add one hour to start date if in new record mode
            if (this.isNew() && this.form.StartDate.valueAsDate)
                this.form.EndDate.valueAsDate = new Date(this.form.StartDate.valueAsDate.getTime() + 60 * 60 * 1000);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Agenda', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Decision', this.isNewOrDeleted());

            this.agendaGrid.meetingId = this.entity.MeetingId;
            this.decisionGrid.meetingId = this.entity.MeetingId;
        }

        getTemplate() {
            return `<div id="~_Tabs" class="s-DialogContent">
    <ul>
        <li><a href="#~_TabInfo"><span>{{text:"Db.Serenity.Pro.Meeting.Meeting.EntitySingular"}}</span></a></li>
        <li><a href="#~_TabAgenda"><span>{{text:"Db.Serenity.Pro.Meeting.MeetingAgenda.EntityPlural"}}</span></a></li>
        <li><a href="#~_TabDecision"><span>{{text:"Db.Serenity.Pro.Meeting.MeetingDecision.EntityPlural"}}</span></a></li>
    </ul>
    <div id="~_TabInfo" class="tab-pane s-TabInfo">
        <div id="~_Toolbar" class="s-DialogToolbar">
        </div>
        <div class="s-Form">
            <form id="~_Form" action="">
                <div class="fieldset">
                    <div id="~_PropertyGrid"></div>
                </div>
            </form>
        </div>
    </div>
    <div id="~_TabAgenda" class="tab-pane s-TabAgenda"><div id="~_AgendaGrid"></div></div>
    <div id="~_TabDecision" class="tab-pane s-TabDecision"><div id="~_DecisionGrid"></div></div>
</div>`;
        }

    }
}