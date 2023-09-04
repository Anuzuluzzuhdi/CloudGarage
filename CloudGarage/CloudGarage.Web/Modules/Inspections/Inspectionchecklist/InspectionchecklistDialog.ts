
namespace CloudGarage.Inspections {

    @Serenity.Decorators.registerClass()
    export class InspectionchecklistDialog extends Serenity.EntityDialog<InspectionchecklistRow, any> {
        protected getFormKey() { return InspectionchecklistForm.formKey; }
        protected getIdProperty() { return InspectionchecklistRow.idProperty; }
        protected getLocalTextPrefix() { return InspectionchecklistRow.localTextPrefix; }
        protected getService() { return InspectionchecklistService.baseUrl; }
        protected getDeletePermission() { return InspectionchecklistRow.deletePermission; }
        protected getInsertPermission() { return InspectionchecklistRow.insertPermission; }
        protected getUpdatePermission() { return InspectionchecklistRow.updatePermission; }

        protected form = new InspectionchecklistForm(this.idPrefix);

    }
}