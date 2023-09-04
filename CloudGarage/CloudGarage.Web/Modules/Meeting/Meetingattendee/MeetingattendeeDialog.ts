
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetingattendeeDialog extends Serenity.EntityDialog<MeetingattendeeRow, any> {
        protected getFormKey() { return MeetingattendeeForm.formKey; }
        protected getIdProperty() { return MeetingattendeeRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingattendeeRow.localTextPrefix; }
        protected getService() { return MeetingattendeeService.baseUrl; }
        protected getDeletePermission() { return MeetingattendeeRow.deletePermission; }
        protected getInsertPermission() { return MeetingattendeeRow.insertPermission; }
        protected getUpdatePermission() { return MeetingattendeeRow.updatePermission; }

        protected form = new MeetingattendeeForm(this.idPrefix);

    }
}