
namespace CloudGarage.JobCards {

    @Serenity.Decorators.registerClass()
    export class GatepassesDialog extends Serenity.EntityDialog<GatepassesRow, any> {
        protected getFormKey() { return GatepassesForm.formKey; }
        protected getIdProperty() { return GatepassesRow.idProperty; }
        protected getLocalTextPrefix() { return GatepassesRow.localTextPrefix; }
        protected getService() { return GatepassesService.baseUrl; }
        protected getDeletePermission() { return GatepassesRow.deletePermission; }
        protected getInsertPermission() { return GatepassesRow.insertPermission; }
        protected getUpdatePermission() { return GatepassesRow.updatePermission; }

        protected form = new GatepassesForm(this.idPrefix);
        constructor() {
            super();
            this.form = new GatepassesForm(this.idPrefix);

            this.form.JobCard.changeSelect2(e => {
                var jobCardID = Q.toId(this.form.JobCard.value);
                if (jobCardID != null) {
                    this.form.Customer.value = JobcardsRow.getLookup().itemById[jobCardID].Customer.toString();
                    this.form.Vehicle.value = JobcardsRow.getLookup().itemById[jobCardID].Vehicle.toString();

                }
            });
        }
    }
}