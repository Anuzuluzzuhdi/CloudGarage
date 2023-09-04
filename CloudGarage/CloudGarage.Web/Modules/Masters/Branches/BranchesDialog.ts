
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class BranchesDialog extends Serenity.EntityDialog<BranchesRow, any> {
        protected getFormKey() { return BranchesForm.formKey; }
        protected getIdProperty() { return BranchesRow.idProperty; }
        protected getLocalTextPrefix() { return BranchesRow.localTextPrefix; }
        protected getNameProperty() { return BranchesRow.nameProperty; }
        protected getService() { return BranchesService.baseUrl; }
        protected getDeletePermission() { return BranchesRow.deletePermission; }
        protected getInsertPermission() { return BranchesRow.insertPermission; }
        protected getUpdatePermission() { return BranchesRow.updatePermission; }

        protected form = new BranchesForm(this.idPrefix);

    }
}