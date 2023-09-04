
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class ExpensestypesDialog extends Serenity.EntityDialog<ExpensestypesRow, any> {
        protected getFormKey() { return ExpensestypesForm.formKey; }
        protected getIdProperty() { return ExpensestypesRow.idProperty; }
        protected getLocalTextPrefix() { return ExpensestypesRow.localTextPrefix; }
        protected getNameProperty() { return ExpensestypesRow.nameProperty; }
        protected getService() { return ExpensestypesService.baseUrl; }
        protected getDeletePermission() { return ExpensestypesRow.deletePermission; }
        protected getInsertPermission() { return ExpensestypesRow.insertPermission; }
        protected getUpdatePermission() { return ExpensestypesRow.updatePermission; }

        protected form = new ExpensestypesForm(this.idPrefix);

    }
}