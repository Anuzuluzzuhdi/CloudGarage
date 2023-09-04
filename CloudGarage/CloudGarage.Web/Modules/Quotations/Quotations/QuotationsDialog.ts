
namespace CloudGarage.Quotations {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class QuotationsDialog extends Serenity.EntityDialog<QuotationsRow, any> {
        protected getFormKey() { return QuotationsForm.formKey; }
        protected getIdProperty() { return QuotationsRow.idProperty; }
        protected getLocalTextPrefix() { return QuotationsRow.localTextPrefix; }
        protected getNameProperty() { return QuotationsRow.nameProperty; }
        protected getService() { return QuotationsService.baseUrl; }
        protected getDeletePermission() { return QuotationsRow.deletePermission; }
        protected getInsertPermission() { return QuotationsRow.insertPermission; }                   
        protected getUpdatePermission() { return QuotationsRow.updatePermission; }                    
                                                                                                                                  
        protected form = new QuotationsForm(this.idPrefix);
        constructor() {                                                                    
            super();


            this.form = new QuotationsForm(this.idPrefix);
            this.form.Date.change(e => {
                this.updateExpiryDate();
            });

            (this.form.LineItems.view as any).onRowCountChanged.subscribe(() => {
                this.doCalculation();
                // Q.notifySuccess(total.toString());
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
            //this.form.Payment.change(() => {
            //    this.doCalculation();
            //});
            this.form.NoTax.change(() => {
                this.doCalculation();
            });
        }

        private updateExpiryDate() {

            var NoOfMonths = 1;
            var toBeDueDate = new Date(this.form.Date.value);
            this.form.ExpiryDate.value = new Date(new Date(this.form.Date.value).setMonth(toBeDueDate.getMonth() + NoOfMonths)).toDateString();
        }
        public dialogOpen(asPanel?: boolean): void {
            super.dialogOpen(asPanel)

            this.updateExpiryDate();
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

            //this.form.Due.value = this.form.NetTotal.value - this.form.PaidAmount.value;
            //if ((this.form.PaidAmount.value - this.form.NetTotal.value) > 0) {
            //    this.form.Change.value = this.form.PaidAmount.value - this.form.NetTotal.value;
            //    this.form.Due.value = 0;
            //} else {
            //    this.form.Change.value = 0;
            //}
        }
    }
}