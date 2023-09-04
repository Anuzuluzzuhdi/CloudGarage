
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetingagendatypeDialog extends Serenity.EntityDialog<MeetingagendatypeRow, any> {
        protected getFormKey() { return MeetingagendatypeForm.formKey; }
        protected getIdProperty() { return MeetingagendatypeRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingagendatypeRow.localTextPrefix; }
        protected getNameProperty() { return MeetingagendatypeRow.nameProperty; }
        protected getService() { return MeetingagendatypeService.baseUrl; }
        protected getDeletePermission() { return MeetingagendatypeRow.deletePermission; }
        protected getInsertPermission() { return MeetingagendatypeRow.insertPermission; }
        protected getUpdatePermission() { return MeetingagendatypeRow.updatePermission; }

        protected form = new MeetingagendatypeForm(this.idPrefix);

    }
}