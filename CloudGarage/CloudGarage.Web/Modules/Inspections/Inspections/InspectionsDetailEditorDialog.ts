namespace CloudGarage.Inspections {

    @Serenity.Decorators.registerClass()
    export class InspectionsDetailEditorDialog extends Serenity.Extensions.GridEditorDialog<Inspections.InspectionchecklistRow> {
        protected getFormKey() { return Inspections.InspectionchecklistForm.formKey; }
        protected getLocalTextPrefix() { return Inspections.InspectionchecklistRow.localTextPrefix; }

        protected form: Inspections.InspectionchecklistForm;

        constructor() {
            super();
            this.form = new Inspections.InspectionchecklistForm(this.idPrefix);
        }
    }
}