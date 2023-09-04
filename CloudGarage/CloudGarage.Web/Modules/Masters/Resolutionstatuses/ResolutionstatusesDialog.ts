
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class ResolutionstatusesDialog extends Serenity.EntityDialog<ResolutionstatusesRow, any> {
        protected getFormKey() { return ResolutionstatusesForm.formKey; }
        protected getIdProperty() { return ResolutionstatusesRow.idProperty; }
        protected getLocalTextPrefix() { return ResolutionstatusesRow.localTextPrefix; }
        protected getNameProperty() { return ResolutionstatusesRow.nameProperty; }
        protected getService() { return ResolutionstatusesService.baseUrl; }
        protected getDeletePermission() { return ResolutionstatusesRow.deletePermission; }
        protected getInsertPermission() { return ResolutionstatusesRow.insertPermission; }
        protected getUpdatePermission() { return ResolutionstatusesRow.updatePermission; }

        protected form = new ResolutionstatusesForm(this.idPrefix);

    }
}