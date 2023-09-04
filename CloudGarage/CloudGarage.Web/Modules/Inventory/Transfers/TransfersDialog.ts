
namespace CloudGarage.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class TransfersDialog extends Serenity.EntityDialog<TransfersRow, any> {
        protected getFormKey() { return TransfersForm.formKey; }
        protected getIdProperty() { return TransfersRow.idProperty; }
        protected getLocalTextPrefix() { return TransfersRow.localTextPrefix; }
        protected getService() { return TransfersService.baseUrl; }
        protected getDeletePermission() { return TransfersRow.deletePermission; }
        protected getInsertPermission() { return TransfersRow.insertPermission; }
        protected getUpdatePermission() { return TransfersRow.updatePermission; }

        protected form = new TransfersForm(this.idPrefix);
        constructor() {
            super();

            this.form = new TransfersForm(this.idPrefix);
            (this.form.LineItems.view as any).onRowCountChanged.subscribe(() => {
                this.doCalculation();
                // Q.notifySuccess(total.toString());
            });

        }
        public dialogOpen(asPanel?: boolean): void {
            super.dialogOpen(asPanel)

            //this.updateExpiryDate();
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.doCalculation();
        }
        private doCalculation() {
            var total = 0;
            for (var k of this.form.LineItems.getItems()) {
                total += k.Quantity || 0;
            }
            this.form.TotalQuantity.value = total;

        }
        protected beforeLoadEntity(entity: TransfersRow) {
            super.beforeLoadEntity(entity);
            console.log(branchId);
            var branchId = CloudGarage.Inventory.ProductsRow.getLookup().items[0].BranchId;
            this.form.FromBranchId.element.val(branchId);
            this.form.FromBranchId.element.trigger("change");
            if (!Q.Authorization.hasPermission("Administration:Branches")) {
                // this.form.FromBranchId.readOnly = true;
            }
        }

    }
}