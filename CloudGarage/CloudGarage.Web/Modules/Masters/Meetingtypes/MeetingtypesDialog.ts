
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class MeetingtypesDialog extends Serenity.EntityDialog<MeetingtypesRow, any> {
        protected getFormKey() { return MeetingtypesForm.formKey; }
        protected getIdProperty() { return MeetingtypesRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingtypesRow.localTextPrefix; }
        protected getNameProperty() { return MeetingtypesRow.nameProperty; }
        protected getService() { return MeetingtypesService.baseUrl; }
        protected getDeletePermission() { return MeetingtypesRow.deletePermission; }
        protected getInsertPermission() { return MeetingtypesRow.insertPermission; }
        protected getUpdatePermission() { return MeetingtypesRow.updatePermission; }

        protected form = new MeetingtypesForm(this.idPrefix);

    }
}