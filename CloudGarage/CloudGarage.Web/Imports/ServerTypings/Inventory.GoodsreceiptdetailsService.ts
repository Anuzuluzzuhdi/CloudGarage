namespace CloudGarage.Inventory {
    export namespace GoodsreceiptdetailsService {
        export const baseUrl = 'Inventory/Goodsreceiptdetails';

        export declare function Create(request: Serenity.SaveRequest<GoodsreceiptdetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<GoodsreceiptdetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GoodsreceiptdetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GoodsreceiptdetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inventory/Goodsreceiptdetails/Create",
            Update = "Inventory/Goodsreceiptdetails/Update",
            Delete = "Inventory/Goodsreceiptdetails/Delete",
            Retrieve = "Inventory/Goodsreceiptdetails/Retrieve",
            List = "Inventory/Goodsreceiptdetails/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>GoodsreceiptdetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
