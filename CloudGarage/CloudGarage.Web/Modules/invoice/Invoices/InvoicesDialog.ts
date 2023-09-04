
namespace CloudGarage.invoice {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class InvoicesDialog extends Serenity.EntityDialog<InvoicesRow, any> {
        protected getFormKey() { return InvoicesForm.formKey; }
        protected getIdProperty() { return InvoicesRow.idProperty; }
        protected getLocalTextPrefix() { return InvoicesRow.localTextPrefix; }
        protected getNameProperty() { return InvoicesRow.nameProperty; }
        protected getService() { return InvoicesService.baseUrl; }
        protected getDeletePermission() { return InvoicesRow.deletePermission; }
        protected getInsertPermission() { return InvoicesRow.insertPermission; }
        protected getUpdatePermission() { return InvoicesRow.updatePermission; }

        protected form = new InvoicesForm(this.idPrefix);
        constructor() {
            super();
                                                                                                                       

            this.form = new InvoicesForm(this.idPrefix);
            this.form.Date.change(e => {

            });

            (this.form.LineItems.view as any).onRowCountChanged.subscribe(() => {
                this.doCalculation();
                                                                                                                                          
            });
            (this.form.Jobs.view as any).onRowCountChanged.subscribe(() => {
                this.doCalculation();

            });
            this.form.Discount.change(() => {
                this.doCalculation();
            });
            this.form.Vat.change(() => {
                this.doCalculation();
            });
            this.form.ShippingCost.change(() => {
                this.doCalculation();
            });
            this.form.PaidAmount.change(() => {
                this.doCalculation();
            });
            this.form.NoTax.change(() => {
                this.doCalculation();
            });
        }

        public dialogOpen(asPanel?: boolean): void {
            super.dialogOpen(asPanel)


        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.doCalculation();
        }
        private doCalculation() {
            var total = 0;
            for (var k of this.form.LineItems.getItems()) {
                total += k.Total || 0;
            }

            for (var j of this.form.Jobs.getItems()) {
                total += j.Total || 0;
            }

            this.form.GrandTotal.value = total;


            var subDiscount = 0;
            for (var k of this.form.LineItems.getItems()) {
                subDiscount += (k.Discount * k.Quantity * k.UnitPrice / 100) || 0;
            }

            this.form.TotalDiscount.value = this.form.Discount.value + subDiscount;

            var vat = 0;
            //if (SmartERP.Administration.CompaniesRow.getLookup().items.length > 0) {
            //    vat = SmartERP.Administration.CompaniesRow.getLookup().items[0].VatPercentage;
            //}
            var branchId = this.get_entity().BranchesId;
            if (this.form.NoTax.value == false) {
                if (CloudGarage.Masters.BranchesRow.getLookup().items.length > 0 && branchId != undefined) {
                    vat = CloudGarage.Masters.BranchesRow.getLookup().itemById[branchId].VatPercentage;
                }
            }
            this.form.Vat.value = (this.form.GrandTotal.value - this.form.Discount.value) * vat / 100;
            this.form.Vat.element.closest('.field').find('.caption').text('Vat (' + vat + '%)');

            this.form.NetTotal.value = this.form.GrandTotal.value - this.form.Discount.value + this.form.Vat.value + this.form.ShippingCost.value;

            this.form.Due.value = this.form.NetTotal.value - this.form.PaidAmount.value;
            if ((this.form.PaidAmount.value - this.form.NetTotal.value) > 0) {
                this.form.Change.value = this.form.PaidAmount.value - this.form.NetTotal.value;
                this.form.Due.value = 0;
            } else {
                this.form.Change.value = 0;
            }
        }
    }
}