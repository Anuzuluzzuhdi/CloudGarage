
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    export class MeetinglocationDialog extends Serenity.EntityDialog<MeetinglocationRow, any> {
        protected getFormKey() { return MeetinglocationForm.formKey; }
        protected getIdProperty() { return MeetinglocationRow.idProperty; }
        protected getLocalTextPrefix() { return MeetinglocationRow.localTextPrefix; }
        protected getNameProperty() { return MeetinglocationRow.nameProperty; }
        protected getService() { return MeetinglocationService.baseUrl; }
        protected getDeletePermission() { return MeetinglocationRow.deletePermission; }
        protected getInsertPermission() { return MeetinglocationRow.insertPermission; }
        protected getUpdatePermission() { return MeetinglocationRow.updatePermission; }

        protected form = new MeetinglocationForm(this.idPrefix);

    }
}