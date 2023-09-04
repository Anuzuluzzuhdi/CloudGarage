
namespace CloudGarage.Vehicles {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class VehicleDialog extends Serenity.EntityDialog<VehicleRow, any> {
        protected getFormKey() { return VehicleForm.formKey; }
        protected getIdProperty() { return VehicleRow.idProperty; }
        protected getLocalTextPrefix() { return VehicleRow.localTextPrefix; }
        protected getNameProperty() { return VehicleRow.nameProperty; }
        protected getService() { return VehicleService.baseUrl; }
        protected getDeletePermission() { return VehicleRow.deletePermission; }
        protected getInsertPermission() { return VehicleRow.insertPermission; }
        protected getUpdatePermission() { return VehicleRow.updatePermission; }

        protected form = new VehicleForm(this.idPrefix);

        private inspectionsGrid: VehicleInspectionsGrid;
        private loadedState: string;

        constructor() {
            super();

            this.inspectionsGrid = new VehicleInspectionsGrid(this.byId('inspectionsGrid'));
            // force order dialog to open in Dialog mode instead of Panel mode
            // which is set as default on OrderDialog with @panelAttribute
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
        } A

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        loadEntity(entity: VehicleRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Inspections', this.isNewOrDeleted());

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
        <li><a href="#~_inspectionsGrid"><span>${Q.text("Inspections")}</span></a></li>
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
    <div id="~_TabInspections" class="tab-pane s-TabInspections">
        <div id="~_inspectionsGrid">
        </div>
    </div>
</div>`;
        }
    }
}