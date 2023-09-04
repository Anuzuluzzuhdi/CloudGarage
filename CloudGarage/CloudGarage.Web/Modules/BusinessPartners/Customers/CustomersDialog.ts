
namespace CloudGarage.BusinessPartners {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CustomersDialog extends Serenity.EntityDialog<CustomersRow, any> {
        protected getFormKey() { return CustomersForm.formKey; }
        protected getIdProperty() { return CustomersRow.idProperty; }
        protected getLocalTextPrefix() { return CustomersRow.localTextPrefix; }
        protected getNameProperty() { return CustomersRow.nameProperty; }
        protected getService() { return CustomersService.baseUrl; }                                                                                      
        protected getDeletePermission() { return CustomersRow.deletePermission; }
        protected getInsertPermission() { return CustomersRow.insertPermission; }
        protected getUpdatePermission() { return CustomersRow.updatePermission; }

        protected form = new CustomersForm(this.idPrefix);

        private transactionsGrid: CustomerOrdersGrid;                                                                                       
        private vehicleGrid: CustomerVehicleGrid;
        private inspectionsGrid: CustomerInspectionsGrid;
        private loadedState: string;

        constructor() {
            super();

            this.transactionsGrid = new CustomerOrdersGrid(this.byId('transactionsGrid'));                                                                                 
            this.vehicleGrid = new CustomerVehicleGrid(this.byId('vehicleGrid'));
            this.inspectionsGrid = new CustomerInspectionsGrid(this.byId('inspectionsGrid'));
            // force order dialog to open in Dialog mode instead of Panel mode
            // which is set as default on OrderDialog with @panelAttribute
            this.transactionsGrid.openDialogsAsPanel = true;
            this.vehicleGrid.openDialogsAsPanel = true;
            this.inspectionsGrid.openDialogsAsPanel = true;

            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
            Serenity.Extensions.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }A

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        loadEntity(entity: CustomersRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Booking', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Vehicles', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Inspection', this.isNewOrDeleted());

            this.transactionsGrid.CustomerId = entity.Id;
            this.vehicleGrid.CustomerId = entity.Id;
            this.inspectionsGrid.CustomerId = entity.Id;
        }

        onSaveSuccess(response) {
            super.onSaveSuccess(response);

            Q.reloadLookup('BusinessPartners.Customers');
        }

        getTemplate() {
            return `<div id="~_Tabs" class="s-DialogContent">
    <ul>
        <li><a href="#~_TabInfo"><span>${Q.text("Customer")}</span></a></li>
        <li><a href="#~_vehicleGrid"><span>${Q.text("Vehicle")}</span></a></li>
        <li><a href="#~_inspectionsGrid"><span>${Q.text("Inspection")}</span></a></li>
        <li><a href="#~_transactionsGrid"><span>${Q.text("Booking")}</span></a></li>
        <li><a href="#~_TabNotes"><span>${Q.text("Notes")}</span></a></li>    
    </ul>
    <div id="~_TabInfo" class="tab-pane s-TabInfo">
        <div id="~_Toolbar" class="s-DialogToolbar">
        </div>
        <div class="s-Form">
            <form id="~_Form" action="">
                <div class="fieldset ui-widget ui-widget-content ui-corner-all">
                    <div id="~_PropertyGrid"></div>
                    <div class="clear"></div>
                </div>
            </form>
        </div>
    </div>
    <div id="~_TabNotes" class="tab-pane s-TabNotes">
    </div>
    <div id="~_TabSales" class="tab-pane s-TabSales">
        <div id="~_transactionsGrid">
        </div>
    <div id="~_TabVehicle" class="tab-pane s-TabVehicle">
        <div id="~_vehicleGrid">
        </div>
    <div id="~_TabInspections" class="tab-pane s-TabInspections">
        <div id="~_inspectionsGrid">
        </div>
    </div>
</div>`;
        }
    }
}