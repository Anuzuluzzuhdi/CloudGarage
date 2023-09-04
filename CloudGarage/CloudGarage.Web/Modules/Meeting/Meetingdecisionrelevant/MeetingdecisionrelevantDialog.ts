
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetingdecisionrelevantDialog extends Serenity.EntityDialog<MeetingdecisionrelevantRow, any> {
        protected getFormKey() { return MeetingdecisionrelevantForm.formKey; }
        protected getIdProperty() { return MeetingdecisionrelevantRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingdecisionrelevantRow.localTextPrefix; }
        protected getService() { return MeetingdecisionrelevantService.baseUrl; }
        protected getDeletePermission() { return MeetingdecisionrelevantRow.deletePermission; }
        protected getInsertPermission() { return MeetingdecisionrelevantRow.insertPermission; }
        protected getUpdatePermission() { return MeetingdecisionrelevantRow.updatePermission; }

        protected form = new MeetingdecisionrelevantForm(this.idPrefix);

    }
}