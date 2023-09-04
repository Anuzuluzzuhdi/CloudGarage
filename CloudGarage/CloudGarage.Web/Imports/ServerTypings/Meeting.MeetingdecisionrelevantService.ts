namespace CloudGarage.Meeting {
    export namespace MeetingdecisionrelevantService {
        export const baseUrl = 'Meeting/Meetingdecisionrelevant';

        export declare function Create(request: Serenity.SaveRequest<MeetingdecisionrelevantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MeetingdecisionrelevantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeetingdecisionrelevantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeetingdecisionrelevantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Meeting/Meetingdecisionrelevant/Create",
            Update = "Meeting/Meetingdecisionrelevant/Update",
            Delete = "Meeting/Meetingdecisionrelevant/Delete",
            Retrieve = "Meeting/Meetingdecisionrelevant/Retrieve",
            List = "Meeting/Meetingdecisionrelevant/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MeetingdecisionrelevantService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
