using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace CloudGarage.Administration
{
    [ConnectionKey("Default"), Module("Administration"), TableName("Users")]
    [DisplayName("Users"), InstanceName("User")]
    [ReadPermission(PermissionKeys.Security)]
    [ModifyPermission(PermissionKeys.Security)]
    [LookupScript(Permission = PermissionKeys.Security)]
    public sealed class UserRow : Serenity.Extensions.Entities.LoggingRow<UserRow.RowFields>, IIdRow, INameRow, IIsActiveRow
    {
        [DisplayName("User Id"), Identity, IdProperty]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("Username"), Size(100), NotNull, QuickSearch, LookupInclude, NameProperty]
        public String Username
        {
            get => fields.Username[this];
            set => fields.Username[this] = value;
        }

        [DisplayName("Source"), Size(4), NotNull, Insertable(false), Updatable(false), DefaultValue("site")]
        public String Source
        {
            get => fields.Source[this];
            set => fields.Source[this] = value;
        }

        [DisplayName("Password Hash"), Size(86), NotNull, Insertable(false), Updatable(false), MinSelectLevel(SelectLevel.Never)]
        public String PasswordHash
        {
            get => fields.PasswordHash[this];
            set => fields.PasswordHash[this] = value;
        }

        [DisplayName("Password Salt"), Size(10), NotNull, Insertable(false), Updatable(false), MinSelectLevel(SelectLevel.Never)]
        public String PasswordSalt
        {
            get => fields.PasswordSalt[this];
            set => fields.PasswordSalt[this] = value;
        }

        [DisplayName("Display Name"), Size(100), NotNull, LookupInclude]
        public String DisplayName
        {
            get => fields.DisplayName[this];
            set => fields.DisplayName[this] = value;
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
        }

        [DisplayName("Mobile Phone Number"), Size(20)]
        public String MobilePhoneNumber
        {
            get => fields.MobilePhoneNumber[this];
            set => fields.MobilePhoneNumber[this] = value;
        }

        [DisplayName("Mobile Phone Verified"), NotNull, DefaultValue(false)]
        public Boolean? MobilePhoneVerified
        {
            get => fields.MobilePhoneVerified[this];
            set => fields.MobilePhoneVerified[this] = value;
        }

        [DisplayName("Two-Factor Authentication")]
        public TwoFactorAuthType? TwoFactorAuth
        {
            get { return (TwoFactorAuthType?)Fields.TwoFactorAuth[this]; }
            set => fields.TwoFactorAuth[this] = (Int32?)value;
        }

        [DisplayName("User Image"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "UserImage/~", CopyToHistory = true)]
        public String UserImage
        {
            get => fields.UserImage[this];
            set => fields.UserImage[this] = value;
        }

        [DisplayName("Password"), Size(50), NotMapped]
        public String Password
        {
            get => fields.Password[this];
            set => fields.Password[this] = value;
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get => fields.IsActive[this];
            set => fields.IsActive[this] = value;
        }

        [DisplayName("Confirm Password"), Size(50), NotMapped]
        public String PasswordConfirm
        {
            get => fields.PasswordConfirm[this];
            set => fields.PasswordConfirm[this] = value;
        }

        [DisplayName("Last Directory Update"), Insertable(false), Updatable(false)]
        public DateTime? LastDirectoryUpdate
        {
            get => fields.LastDirectoryUpdate[this];
            set => fields.LastDirectoryUpdate[this] = value;
        }

        [NotMapped, MinSelectLevel(SelectLevel.Explicit), ReadPermission("ImpersonateAs")]
        public String ImpersonationToken
        {
            get => fields.ImpersonationToken[this];
            set => fields.ImpersonationToken[this] = value;
        }

        [DisplayName("Branch"), ForeignKey("Branches", "Id"), LeftJoin("brn")]
        [LookupEditor(typeof(Masters.BranchesRow))]
        public Int64? BranchId
        {
            get { return Fields.BranchId[this]; }
            set { Fields.BranchId[this] = value; }
        }

        [DisplayName("Branche"), Expression("brn.Name")]
        public String BrancheName
        {
            get { return Fields.BrancheName[this]; }
            set { Fields.BrancheName[this] = value; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get => fields.IsActive;
        }

        public UserRow()
        {
        }

        public UserRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : Serenity.Extensions.Entities.LoggingRowFields
        {
            public Int32Field UserId;
            public StringField Username;
            public StringField Source;
            public StringField PasswordHash;
            public StringField PasswordSalt;
            public StringField DisplayName;
            public StringField Email;
            public StringField MobilePhoneNumber;
            public BooleanField MobilePhoneVerified;
            public Int32Field TwoFactorAuth;
            public StringField UserImage;
            public DateTimeField LastDirectoryUpdate;
            public Int16Field IsActive;

            public StringField Password;
            public StringField PasswordConfirm;

            public StringField ImpersonationToken;

            public Int64Field BranchId;
            public StringField BrancheName;
        }
    }
}