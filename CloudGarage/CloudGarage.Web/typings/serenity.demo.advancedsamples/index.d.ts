/// <reference types="serenity.corelib" />
/// <reference types="jquery" />
/// <reference types="serenity.demo.northwind" />
/// <reference types="serenity.extensions" />
/// <reference types="jqueryui" />
/// <reference types="serenity.pro.ui" />
/// <reference types="serenity.pro.extensions" />
/// <reference types="react" />
declare namespace Serenity.Demo.AdvancedSamples {
    namespace AdvancedSamplesService {
        const baseUrl = "Serenity.Demo.AdvancedSamples";
        function OrderBulkAction(request: OrderBulkActionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            OrderBulkAction = "Serenity.Demo.AdvancedSamples/OrderBulkAction"
        }
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class CustomerGrossSalesColumns {
        static columnsKey: string;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    interface CustomerGrossSalesListRequest extends Serenity.ListRequest {
        StartDate?: string;
        EndDate?: string;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    namespace CustomerGrossSalesService {
        const baseUrl = "AdvancedSamples/CustomerGrossSales";
        function List(request: CustomerGrossSalesListRequest, onSuccess?: (response: Serenity.ListResponse<Demo.Northwind.CustomerGrossSalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "AdvancedSamples/CustomerGrossSales/List"
        }
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class DragDropSampleColumns {
        static columnsKey: string;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    interface DragDropSampleForm {
        Title: StringEditor;
    }
    class DragDropSampleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    interface DragDropSampleRow {
        Id?: number;
        ParentId?: number;
        Title?: string;
    }
    namespace DragDropSampleRow {
        const idProperty = "Id";
        const nameProperty = "Title";
        const localTextPrefix = "Northwind.DragDropSample";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            Id = "Id",
            ParentId = "ParentId",
            Title = "Title"
        }
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    namespace DragDropSampleService {
        const baseUrl = "AdvancedSamples/DragDropSample";
        function Create(request: Serenity.SaveRequest<DragDropSampleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DragDropSampleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DragDropSampleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DragDropSampleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "AdvancedSamples/DragDropSample/Create",
            Update = "AdvancedSamples/DragDropSample/Update",
            Delete = "AdvancedSamples/DragDropSample/Delete",
            Retrieve = "AdvancedSamples/DragDropSample/Retrieve",
            List = "AdvancedSamples/DragDropSample/List"
        }
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    interface EnumFlagsForm {
        InputForFlags: EnumFlagsEditor;
    }
    class EnumFlagsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serenity.Demo.AdvancedSamples.Enums {
    enum EnumFlagsEnum {
        Read = 1,
        Write = 2,
        Update = 4,
        Delete = 8
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    interface InlineButtonsForm {
        SomeTextInput: StringEditor;
        InputWithButton: InlineButtonsEditor;
        ExternallyCreatedButton: IntegerEditor;
    }
    class InlineButtonsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    interface MultiDatesPickerForm {
        MultipleDates: MultiDatesPickerEditor;
        Max3Dates: MultiDatesPickerEditor;
    }
    class MultiDatesPickerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    interface OrderBulkActionRequest extends Serenity.ServiceRequest {
        OrderIDs?: number[];
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    enum OrderWizardCustomerType {
        New = 1,
        Existing = 2
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    interface OrderWizardForm {
        WelcomeMessage: Extensions.StaticTextBlock;
        CustomerType: RadioButtonEditor;
        ExistingCustomerID: Demo.Northwind.CustomerEditor;
        CustomerID: StringEditor;
        CompanyName: StringEditor;
        ContactName: StringEditor;
        ContactTitle: StringEditor;
        Representatives: LookupEditor;
        Address: StringEditor;
        Country: LookupEditor;
        City: LookupEditor;
        Region: StringEditor;
        PostalCode: StringEditor;
        Phone: StringEditor;
        Fax: StringEditor;
        OrderDate: DateEditor;
        RequiredDate: DateEditor;
        EmployeeID: LookupEditor;
        DetailList: Demo.Northwind.OrderDetailsEditor;
        ShipName: StringEditor;
        ShipAddress: StringEditor;
        ShipCity: StringEditor;
        ShipRegion: StringEditor;
        ShipPostalCode: StringEditor;
        ShipCountry: StringEditor;
    }
    class OrderWizardForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    interface PickerOrderForm {
        CustomerID: Demo.Northwind.CustomerEditor;
        OrderDate: DateEditor;
        RequiredDate: DateEditor;
        EmployeeID: LookupEditor;
        DetailList: PickerOrderDetailsEditor;
        ShippedDate: DateEditor;
        ShipVia: LookupEditor;
        Freight: DecimalEditor;
        ShipName: StringEditor;
        ShipAddress: StringEditor;
        ShipCity: StringEditor;
        ShipRegion: StringEditor;
        ShipPostalCode: StringEditor;
        ShipCountry: StringEditor;
    }
    class PickerOrderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    interface ProductExcelImportForm {
        FileName: ImageUploadEditor;
    }
    class ProductExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    namespace ProductExcelImportService {
        const baseUrl = "AdvancedSamples/ProductExcelImport";
        function ExcelImport(request: Extensions.ExcelImportRequest, onSuccess?: (response: Extensions.ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ExcelImport = "AdvancedSamples/ProductExcelImport/ExcelImport"
        }
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class EnumFlagsDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: EnumFlagsForm;
        constructor();
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    interface EnumFlagsEditorOptions {
        enumKey?: string;
    }
    /**
     * This is an editor widget for Enum Flags
     */
    class EnumFlagsEditor extends Widget<EnumFlagsEditorOptions> implements IReadOnly {
        private flagValues;
        constructor(input: JQuery, opt: EnumFlagsEditorOptions);
        protected addCheckBox(value: string, text: string): void;
        get_value(): number;
        get value(): number;
        set_value(value: number): void;
        set value(v: number);
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
        private parseFlags;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class InlineButtonsDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: InlineButtonsForm;
        constructor();
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    /**
     * This is an editor widget with inline buttons
     */
    class InlineButtonsEditor extends Serenity.StringEditor {
        constructor(container: JQuery);
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class MultiDatesPickerDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: MultiDatesPickerForm;
        constructor();
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    interface MultiDatesPickerEditorOptions {
        maxPicks: number;
        minDate: string;
        maxDate: string;
    }
    /**
     * This is a date editor with multiple date selection
     */
    class MultiDatesPickerEditor extends Serenity.StringEditor {
        constructor(container: JQuery, options?: MultiDatesPickerEditorOptions);
        get maxPicks(): number;
        set maxPicks(value: number);
        get minDate(): string;
        set minDate(value: string);
        get maxDate(): string;
        set maxDate(value: string);
        destroy(): void;
    }
}
declare namespace JQueryUI {
    interface MultiDatesPickerOptions extends JQueryUI.DatepickerOptions {
        format?: string;
        addDates?: string | Date | (string | Date)[];
        addDisabledDates?: string | Date | (string | Date)[];
        separator?: string;
        mode?: 'normal' | 'daysRange';
        maxPicks?: number;
        pickableRange?: number;
        adjustRangeToDisabled?: boolean;
        autoselectRange?: number[];
    }
}
declare interface JQuery {
    multiDatesPicker(options?: JQueryUI.MultiDatesPickerOptions): string;
    multiDatesPicker(method: 'addDates', dates: Date | string | (Date | string)[], type?: 'picked' | 'disabled'): any;
    multiDatesPicker(method: 'compareDates', date1: Date | string, date2: Date | string): number;
    multiDatesPicker(method: 'gotDate', date: Date | string, type?: 'picked' | 'disabled'): number;
    multiDatesPicker(method: 'removeIndexes', indexes: number | number[], type?: 'picked' | 'disabled'): any;
    multiDatesPicker(method: 'removeDates', dates: Date | string | (Date | string)[], type?: 'picked' | 'disabled'): any;
    multiDatesPicker(method: 'resetDates', type?: 'picked' | 'disabled'): any;
    multiDatesPicker(method: 'toggleDate', dates: Date | string | (Date | string)[], type?: 'picked' | 'disabled'): any;
    multiDatesPicker(method: 'getDates', format?: 'string' | 'object', type?: 'picked' | 'disabled'): any;
    multiDatesPicker(method: 'value'): string;
    multiDatesPicker(method: 'value', value: string): void;
    multiDatesPicker(method: 'destroy'): void;
}
declare namespace Serenity.Demo.AdvancedSamples {
    class PickerOrderDetailsEditor extends Extensions.GridEditorBase<Northwind.OrderDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Northwind.OrderDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class PickerOrderDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        constructor();
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class PickerOrderGrid extends Northwind.OrderGrid {
        protected getDialogType(): any;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    interface ProductPickerOptions {
        hideProducts?: number[];
    }
    class ProductCheckGrid extends Serenity.EntityGrid<Northwind.ProductRow, ProductPickerOptions> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery, options: ProductPickerOptions);
        protected getColumns(): Slick.Column[];
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected getButtons(): ToolButton[];
        get selectedItems(): Northwind.ProductRow[];
        onViewSubmit(): boolean;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class ProductPickerDialog extends Serenity.TemplatedDialog<ProductPickerOptions> {
        private checkGrid;
        constructor(opt: ProductPickerOptions);
        protected getTemplate(): string;
        protected getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
        get selectedItems(): Northwind.ProductRow[];
        onSuccess: (selected: Northwind.ProductRow[]) => boolean;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class EntityGridDialog extends Serenity.EntityGridDialog<Northwind.SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: Northwind.SupplierForm;
        constructor(container: JQuery);
        protected autoSaveOnSwitch(): AutoSaveOption;
        protected autoSaveOnClose(): AutoSaveOption;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    /**
     * An order wizard that extends Serenity.WizardDialog, available only in premium version
     */
    class OrderWizard extends Serenity.WizardDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: OrderWizardForm;
        constructor();
        private get isNewCustomer();
        /**
         * next method is called when user tries to go forward
         * @param toStep the step user is trying to move to, usually one step ahead
         */
        protected next(toStep: number): void;
        /**
         * back method is called when user tries to go backward
         * @param toStep the step user is trying to move to, usually one step back but can also be multiple
         */
        protected back(toStep: number): void;
        /**
         * called to reset the form, and go back to first step
         */
        protected reset(): void;
        /**
         * is called when user clicks the Finish button (next button on last step)
         */
        protected finish(): void;
        /**
         * will be called by finish method to save order with an existing customer ID,
         * or a newly created one
         * @param customerID
         */
        protected saveOrder(customerID: string): void;
    }
    enum OrderWizardSteps {
        CustomerSelection = 1,
        CustomerDetails = 2,
        OrderInfo = 3,
        OrderDetails = 4,
        Shipping = 5
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class AutoColumnWidthGrid extends Northwind.OrderGrid {
        protected createSlickGrid(): Slick.Grid;
        /** We change number of rows for demonstration purposes, its not normally needed */
        protected getViewOptions(): Slick.RemoteViewOptions;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class OrderBulkAction extends Extensions.BulkServiceAction {
        /**
         * This controls how many service requests will be used in parallel.
         * Determine this number based on how many requests your server
         * might be able to handle, and amount of wait on external resources.
         */
        protected getParallelRequests(): number;
        /**
         * These number of records IDs will be sent to your service in one
         * service call. If your service is designed to handle one record only,
         * set it to 1. But note that, if you have 5000 records, this will
         * result in 5000 service calls / requests.
         */
        protected getBatchSize(): number;
        /**
         * This is where you should call your service.
         * Batch parameter contains the selected order IDs
         * that should be processed in this service call.
         */
        protected executeForBatch(batch: any): void;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class CancellableBulkActionGrid extends Northwind.OrderGrid {
        private rowSelection;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
        protected getColumns(): Slick.Column[];
        protected getViewOptions(): Slick.RemoteViewOptions;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class CardViewGrid extends Northwind.CustomerGrid {
        protected createToolbarExtensions(): void;
        protected getIncludeColumns(include: any): void;
        protected getPersistanceStorage(): Serenity.SettingStorage;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    interface CustomerCardProps {
        item: Northwind.CustomerRow;
        editItem: (item: Northwind.CustomerRow) => void;
    }
    function CustomerCard(props: CustomerCardProps): JSX.Element;
}
declare namespace Serenity.Demo.AdvancedSamples {
    class ConditionalFormattingGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * We override getColumns() to be able to add a custom CSS class to UnitPrice
         * We could also add this class in ProductColumns.cs but didn't want to modify
         * it solely for this sample.
         */
        protected getColumns(): Slick.Column[];
        /**
         * This method is called for all rows
         * @param item Data item for current row
         * @param index Index of the row in grid
         */
        protected getItemCssClass(item: Northwind.ProductRow, index: number): string;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class CustomizableSummariesGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected createToolbarExtensions(): void;
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class DragDropGroupingGrid extends Northwind.OrderGrid {
        protected createToolbarExtensions(): void;
        protected getSlickOptions(): Slick.GridOptions;
        protected markupReady(): void;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class DragDropSampleDialog extends Serenity.EntityDialog<DragDropSampleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DragDropSampleForm;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class DragDropSampleGrid extends Serenity.EntityGrid<DragDropSampleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DragDropSampleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private dragging;
        constructor(container: JQuery);
        /**
         * This method will determine if item can be moved under a given target
         * An item can't be moved under itself, under one of its children
         */
        private canMoveUnder;
        /**
         * Gets children list of an item
         */
        private getChildren;
        /**
         * Gets all parents of an item
         */
        private getParents;
        protected getButtons(): any[];
        protected usePager(): boolean;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class ExcelStyleFiltersGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class ProductExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        protected getFormKey(): string;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class ProductExcelImportGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Northwind.ProductDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class QuickFilterCustomization extends Serenity.EntityGrid<Northwind.OrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Northwind.OrderDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * This method is called to get list of quick filters to be created for this grid.
         * By default, it returns quick filter objects corresponding to properties that
         * have a [QuickFilter] attribute at server side OrderColumns.cs
         */
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class SplitDetailGrid extends Northwind.CustomerOrdersGrid {
        constructor(container: JQuery);
        protected usePager(): boolean;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class SplitMasterDetailPane extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class SplitMasterGrid extends Northwind.CustomerGrid {
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class CustomerGrossSalesGrid extends Serenity.EntityGrid<Northwind.CustomerGrossSalesRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Northwind.SalesByCategoryRow>): ListResponse<Northwind.SalesByCategoryRow>;
        protected getButtons(): any[];
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected getViewOptions(): Slick.RemoteViewOptions;
        protected usePager(): boolean;
        protected getQuickFilters(): QuickFilter<Widget<any>, any>[];
    }
}
declare namespace Serenity.Demo.AdvancedSamples {
    class TreeGrid extends Northwind.OrderGrid {
        private treeMixin;
        constructor(container: JQuery);
        protected usePager(): boolean;
    }
}
