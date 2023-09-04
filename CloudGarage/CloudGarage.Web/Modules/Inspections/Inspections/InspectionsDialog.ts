
namespace CloudGarage.Inspections {

    @Serenity.Decorators.registerClass()
    export class InspectionsDialog extends Serenity.EntityDialog<InspectionsRow, any> {
        protected getFormKey() { return InspectionsForm.formKey; }
        protected getIdProperty() { return InspectionsRow.idProperty; }
        protected getLocalTextPrefix() { return InspectionsRow.localTextPrefix; }
        protected getNameProperty() { return InspectionsRow.nameProperty; }
        protected getService() { return InspectionsService.baseUrl; }
        protected getDeletePermission() { return InspectionsRow.deletePermission; }
        protected getInsertPermission() { return InspectionsRow.insertPermission; }
        protected getUpdatePermission() { return InspectionsRow.updatePermission; }

        protected form = new InspectionsForm(this.idPrefix);

    }
}