
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetingdecisionDialog extends Serenity.EntityDialog<MeetingdecisionRow, any> {
        protected getFormKey() { return MeetingdecisionForm.formKey; }
        protected getIdProperty() { return MeetingdecisionRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingdecisionRow.localTextPrefix; }
        protected getService() { return MeetingdecisionService.baseUrl; }
        protected getDeletePermission() { return MeetingdecisionRow.deletePermission; }
        protected getInsertPermission() { return MeetingdecisionRow.insertPermission; }
        protected getUpdatePermission() { return MeetingdecisionRow.updatePermission; }

        protected form = new MeetingdecisionForm(this.idPrefix);

    }
}