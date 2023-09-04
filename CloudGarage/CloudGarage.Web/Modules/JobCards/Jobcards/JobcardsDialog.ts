
namespace CloudGarage.JobCards {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class JobcardsDialog extends Serenity.EntityDialog<JobcardsRow, any> {
        protected getFormKey() { return JobcardsForm.formKey; }
        protected getIdProperty() { return JobcardsRow.idProperty; }
        protected getLocalTextPrefix() { return JobcardsRow.localTextPrefix; }
        protected getNameProperty() { return JobcardsRow.nameProperty; }
        protected getService() { return JobcardsService.baseUrl; }
        protected getDeletePermission() { return JobcardsRow.deletePermission; }
        protected getInsertPermission() { return JobcardsRow.insertPermission; }
        protected getUpdatePermission() { return JobcardsRow.updatePermission; }

        protected form = new JobcardsForm(this.idPrefix);

        constructor() {
            super();

            this.form.WorkOrderNo.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.WorkOrderNo.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'WON/').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                CloudGarage.JobCards.JobcardsService.GetNextNumber({
                    Prefix: prefix,
                    Length: 9 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.WorkOrderNo.value = response.Serial;

                    // this is to mark numerical part after prefix
                    (this.form.WorkOrderNo.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }


            this.form = new JobcardsForm(this.idPrefix);
            this.form.Customer.change(e => {
                var cutomer = BusinessPartners.CustomersRow.getLookup().itemById[this.form.Customer.value];
                if (cutomer) {
                    this.form.Address.value = cutomer.Address;
                    this.form.Phone.value = cutomer.Phone;
                    //this.form.Mobile.value = cutomer.;
                    this.form.Website.value = cutomer.Website;

                }
            });


        }
    }
}