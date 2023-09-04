
namespace CloudGarage.Masters {

    @Serenity.Decorators.registerClass()
    export class AgendaitemtypesDialog extends Serenity.EntityDialog<AgendaitemtypesRow, any> {
        protected getFormKey() { return AgendaitemtypesForm.formKey; }
        protected getIdProperty() { return AgendaitemtypesRow.idProperty; }
        protected getLocalTextPrefix() { return AgendaitemtypesRow.localTextPrefix; }
        protected getNameProperty() { return AgendaitemtypesRow.nameProperty; }
        protected getService() { return AgendaitemtypesService.baseUrl; }
        protected getDeletePermission() { return AgendaitemtypesRow.deletePermission; }
        protected getInsertPermission() { return AgendaitemtypesRow.insertPermission; }
        protected getUpdatePermission() { return AgendaitemtypesRow.updatePermission; }

        protected form = new AgendaitemtypesForm(this.idPrefix);

    }
}