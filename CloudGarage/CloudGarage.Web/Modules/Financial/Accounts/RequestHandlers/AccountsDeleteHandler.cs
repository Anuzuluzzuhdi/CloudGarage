using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Financial.AccountsRow;

namespace CloudGarage.Financial
{
    public interface IAccountsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AccountsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAccountsDeleteHandler
    {
        private ITextLocalizer Localizer { get; }
        public AccountsDeleteHandler(IRequestContext context, ITextLocalizer localizer)
             : base(context)
        {
            Localizer = localizer;
        }
        protected override void ExecuteDelete()
        {
            try
            {
                base.ExecuteDelete();
            }
            catch (Exception e)
            {
                SqlExceptionHelper.HandleDeleteForeignKeyException(e, Localizer);
                throw;
            }
        }
    }
}