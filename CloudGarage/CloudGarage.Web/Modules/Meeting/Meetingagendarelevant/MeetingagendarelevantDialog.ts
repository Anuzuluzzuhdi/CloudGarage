
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetingagendarelevantDialog extends Serenity.EntityDialog<MeetingagendarelevantRow, any> {
        protected getFormKey() { return MeetingagendarelevantForm.formKey; }
        protected getIdProperty() { return MeetingagendarelevantRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingagendarelevantRow.localTextPrefix; }
        protected getService() { return MeetingagendarelevantService.baseUrl; }
        protected getDeletePermission() { return MeetingagendarelevantRow.deletePermission; }
        protected getInsertPermission() { return MeetingagendarelevantRow.insertPermission; }
        protected getUpdatePermission() { return MeetingagendarelevantRow.updatePermission; }

        protected form = new MeetingagendarelevantForm(this.idPrefix);

    }
}