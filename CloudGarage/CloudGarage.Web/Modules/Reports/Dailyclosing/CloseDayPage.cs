namespace CloudGarage.Reports.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Data;
    using System;
    using Serenity.Abstractions;

    [PageAuthorize(typeof(DailyclosingRow))]
    [ReadPermission("Administration:General")]
    public class CloseDayController : Controller
    {
        protected ISqlConnections SqlConnections { get; }
        private IUserRetrieveService UserRetriever { get; }

        public CloseDayController(ISqlConnections sqlConnections, IUserRetrieveService userRetriever)
        {
            SqlConnections = sqlConnections;
            UserRetriever = userRetriever ?? throw new ArgumentNullException(nameof(userRetriever));

        }

        [Route("Reports/Dailyclosing1")]
        public ActionResult Index()
        {
            var data = new CloseDayData();
            var userDef = (UserDefinition)User.GetUserDefinition(UserRetriever);
            Int64 _BranchId = userDef.BranchId;
            using (var connection = SqlConnections.NewFor<DailyclosingRow>())
            {
                var o = DailyclosingRow.Fields;
                var dailyClosingRowData = connection.TryFirst<DailyclosingRow>(q => q.SelectTableFields()./*.Select(o.LastClosingAmount).Select(o.TodayCashIn).Select(o.TodayCashOut).*/Where(o.Id > 0 && o.BranchId == _BranchId)) ?? new DailyclosingRow();

                data.LastDayClosing = dailyClosingRowData.LastClosingAmount.HasValue == true ? dailyClosingRowData.LastClosingAmount.Value : 0;
                data.Receive = dailyClosingRowData.TodayCashIn.HasValue == true ? dailyClosingRowData.TodayCashIn.Value : 0;
                data.Payment = dailyClosingRowData.TodayCashOut.HasValue == true ? dailyClosingRowData.TodayCashOut.Value : 0;
                var CashInHand = data.LastDayClosing + data.Receive - data.Payment;
                data.Balance = CashInHand;
                data.Enabled = true;
                if (dailyClosingRowData.LastClosingDate.HasValue && dailyClosingRowData.LastClosingDate.Value.Date == DateTime.Now.Date)
                {
                    data.Enabled = false;
                }
            }
            return View("~/Modules/Reports/Dailyclosing/CloseDayIndex.cshtml", data);
        }
        [HttpPost]
        [Route("Reports/Dailyclosing")]
        public ActionResult CloseDay()
        {
            var data = new CloseDayData();
            var userDef = (UserDefinition)User.GetUserDefinition(UserRetriever);
            Int64 _BranchId = userDef.BranchId;
            using (var connection = SqlConnections.NewFor<DailyclosingRow>())
            {
                UserDefinition user = User.GetUserDefinition<UserDefinition>(UserRetriever);
                var o = DailyclosingRow.Fields;
                var dailyClosingRowData = connection.TryFirst<DailyclosingRow>(q => q.SelectTableFields().Select(o.LastClosingAmount).Select(o.TodayCashIn).Select(o.TodayCashOut).Where(o.Id > 0 && o.BranchId == _BranchId)) ?? new DailyclosingRow();

                data.LastDayClosing = dailyClosingRowData.LastClosingAmount.HasValue == true ? dailyClosingRowData.LastClosingAmount.Value : 0;
                data.Receive = dailyClosingRowData.TodayCashIn.HasValue == true ? dailyClosingRowData.TodayCashIn.Value : 0;
                data.Payment = dailyClosingRowData.TodayCashOut.HasValue == true ? dailyClosingRowData.TodayCashOut.Value : 0;
                var CashInHand = data.LastDayClosing + data.Receive - data.Payment;
                data.Balance = CashInHand;
                data.Enabled = true;
                if (dailyClosingRowData.LastClosingDate.HasValue && dailyClosingRowData.LastClosingDate.Value.Date == DateTime.Now.Date)
                {
                    data.Enabled = false;
                }
                if (data.Enabled == true)
                {
                    new SqlInsert(DailyclosingRow.Fields.TableName)
                       .Set(DailyclosingRow.Fields.LastDayClosing.PropertyName, data.LastDayClosing)
                       .Set(DailyclosingRow.Fields.CashIn.PropertyName, data.Receive)
                       .Set(DailyclosingRow.Fields.CashOut.PropertyName, data.Payment)
                       .Set(DailyclosingRow.Fields.Amount.PropertyName, data.Balance)
                       .Set(DailyclosingRow.Fields.Status.PropertyName, 1)
                       .Set(DailyclosingRow.Fields.Date.PropertyName, DateTime.Now)
                       .Set(DailyclosingRow.Fields.Adjustment.PropertyName, 0)
                       .Set(DailyclosingRow.Fields.InsertDate.PropertyName, DateTime.Now)
                       .Set(DailyclosingRow.Fields.InsertUserId.PropertyName, user.UserId)
                   .Execute(connection);
                }

            }
            data = new CloseDayData();

            using (var connection = SqlConnections.NewFor<DailyclosingRow>())
            {
                var o = DailyclosingRow.Fields;
                var dailyClosingRowData = connection.TryFirst<DailyclosingRow>(q => q.SelectTableFields().Select(o.LastClosingAmount).Select(o.TodayCashIn).Select(o.TodayCashOut).Where(o.Id > 0 && o.BranchId == _BranchId)) ?? new DailyclosingRow();

                data.LastDayClosing = dailyClosingRowData.LastClosingAmount.HasValue == true ? dailyClosingRowData.LastClosingAmount.Value : 0;
                data.Receive = dailyClosingRowData.TodayCashIn.HasValue == true ? dailyClosingRowData.TodayCashIn.Value : 0;
                data.Payment = dailyClosingRowData.TodayCashOut.HasValue == true ? dailyClosingRowData.TodayCashOut.Value : 0;
                var CashInHand = data.LastDayClosing + data.Receive - data.Payment;
                data.Balance = CashInHand;
                data.Enabled = true;
                if (dailyClosingRowData.LastClosingDate.HasValue && dailyClosingRowData.LastClosingDate.Value.Date == DateTime.Now.Date)
                {
                    data.Enabled = false;
                }
            }
            return View("~/Modules/Reports/Dailyclosing/CloseDayIndex.cshtml", data);
        }
    }
    public class CloseDayData
    {
        public double LastDayClosing { get; set; }
        public double Receive { get; set; }
        public double Payment { get; set; }
        public double Balance { get; set; }

        public bool Enabled { get; set; }

    }
}
