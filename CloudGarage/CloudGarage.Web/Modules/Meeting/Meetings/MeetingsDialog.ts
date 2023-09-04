
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetingsDialog extends Serenity.EntityDialog<MeetingsRow, any> {
        protected getFormKey() { return MeetingsForm.formKey; }
        protected getIdProperty() { return MeetingsRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingsRow.localTextPrefix; }
        protected getNameProperty() { return MeetingsRow.nameProperty; }
        protected getService() { return MeetingsService.baseUrl; }
        protected getDeletePermission() { return MeetingsRow.deletePermission; }
        protected getInsertPermission() { return MeetingsRow.insertPermission; }
        protected getUpdatePermission() { return MeetingsRow.updatePermission; }

        protected form = new MeetingsForm(this.idPrefix);

    }
}