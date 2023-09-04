
namespace CloudGarage.Inspections {

    @Serenity.Decorators.registerClass()
    export class InspectionjobtypesDialog extends Serenity.EntityDialog<InspectionjobtypesRow, any> {
        protected getFormKey() { return InspectionjobtypesForm.formKey; }
        protected getIdProperty() { return InspectionjobtypesRow.idProperty; }
        protected getLocalTextPrefix() { return InspectionjobtypesRow.localTextPrefix; }
        protected getService() { return InspectionjobtypesService.baseUrl; }
        protected getDeletePermission() { return InspectionjobtypesRow.deletePermission; }
        protected getInsertPermission() { return InspectionjobtypesRow.insertPermission; }
        protected getUpdatePermission() { return InspectionjobtypesRow.updatePermission; }

        protected form = new InspectionjobtypesForm(this.idPrefix);

    }
}