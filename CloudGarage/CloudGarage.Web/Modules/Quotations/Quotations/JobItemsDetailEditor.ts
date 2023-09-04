﻿namespace CloudGarage.Quotations {

    @Serenity.Decorators.registerEditor()
    export class QuotationJobItemsEditor extends Serenity.Extensions.GridEditorBase<QuotationjobitemsRow> {
        protected getColumnsKey() { return "Quotations.Quotationjobitems"; }
        protected getLocalTextPrefix() { return QuotationjobitemsRow.localTextPrefix; }
        protected getDialogType() { return JobItemsPickEditDialog; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getAddButtonCaption() {
            return "Add";
        }

        protected validateEntity(row: QuotationjobitemsRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;
            if (row.JobType) {
                row.JobTypeName = Masters.JobtypesRow.getLookup()
                    .itemById[row.JobType].Name;
            }

            row.Total = (row.UnitPrice) - (row.UnitPrice * row.Discount / 100);

            //row.UnitName = SmartERP.Products.UnitsRow.getLookup()
            //    .itemById[row.UnitId].Name;
            return true;
        }
        protected getButtons(): Serenity.ToolButton[] {

            // call base method to get list of buttons
            // by default, base entity grid adds a few buttons, 
            // add, refresh, column selection in order.
            var buttons = super.getButtons();

            // here is several methods to remove add button
            // only one is enabled, others are commented

            // METHOD 1
            // we would be able to simply return an empty button list,
            // but this would also remove all other buttons
            // return [];

            // METHOD 2
            // remove by splicing (something like delete by index)
            // here we hard code add button index (not nice!)
            // buttons.splice(0, 1);

            // METHOD 3 - recommended
            // remove by splicing, but this time find button index
            // by its css class. it is the best and safer method

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "column-picker-button"), 1);
            return buttons;
        }
    }
}   