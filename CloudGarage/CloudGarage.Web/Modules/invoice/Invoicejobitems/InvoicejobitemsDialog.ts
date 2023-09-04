
namespace CloudGarage.invoice {

    @Serenity.Decorators.registerClass()
    export class InvoicejobitemsDialog extends Serenity.EntityDialog<InvoicejobitemsRow, any> {
        protected getFormKey() { return InvoicejobitemsForm.formKey; }
        protected getIdProperty() { return InvoicejobitemsRow.idProperty; }
        protected getLocalTextPrefix() { return InvoicejobitemsRow.localTextPrefix; }
        protected getNameProperty() { return InvoicejobitemsRow.nameProperty; }
        protected getService() { return InvoicejobitemsService.baseUrl; }
        protected getDeletePermission() { return InvoicejobitemsRow.deletePermission; }
        protected getInsertPermission() { return InvoicejobitemsRow.insertPermission; }       
        protected getUpdatePermission() { return InvoicejobitemsRow.updatePermission; }

        protected form = new InvoicejobitemsForm(this.idPrefix);
                                                                                                                            
    }
}                                                                                                                                     