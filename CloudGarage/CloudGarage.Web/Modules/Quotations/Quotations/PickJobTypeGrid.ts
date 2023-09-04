
namespace CloudGarage.Quotations {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class PickJobTypeGrid extends QuotationjobitemsGrid {
        protected getDialogType() { return <any>PickJobTypeDialog; }
    }
}
