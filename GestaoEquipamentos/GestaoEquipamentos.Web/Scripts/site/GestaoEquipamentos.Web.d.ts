/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace GestaoEquipamentos.Administration {
}
declare namespace GestaoEquipamentos.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GestaoEquipamentos.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace GestaoEquipamentos.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace GestaoEquipamentos.Administration {
}
declare namespace GestaoEquipamentos.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GestaoEquipamentos.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace GestaoEquipamentos.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace GestaoEquipamentos.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace GestaoEquipamentos.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace GestaoEquipamentos.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace GestaoEquipamentos.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace GestaoEquipamentos.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace GestaoEquipamentos.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace GestaoEquipamentos.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace GestaoEquipamentos.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace GestaoEquipamentos.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace GestaoEquipamentos.Administration {
}
declare namespace GestaoEquipamentos.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GestaoEquipamentos.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace GestaoEquipamentos.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace GestaoEquipamentos.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace GestaoEquipamentos.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace GestaoEquipamentos.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace GestaoEquipamentos.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace GestaoEquipamentos.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace GestaoEquipamentos.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace GestaoEquipamentos.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace GestaoEquipamentos.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace GestaoEquipamentos.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace GestaoEquipamentos.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace GestaoEquipamentos.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace GestaoEquipamentos.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace GestaoEquipamentos.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace GestaoEquipamentos.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace GestaoEquipamentos.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace GestaoEquipamentos.Default {
    class AcessorioForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AcessorioForm {
        Nome: Serenity.StringEditor;
    }
}
declare namespace GestaoEquipamentos.Default {
    interface AcessorioRow {
        Id?: number;
        Nome?: string;
    }
    namespace AcessorioRow {
        const idProperty = "Id";
        const nameProperty = "Nome";
        const localTextPrefix = "Default.Acessorio";
        namespace Fields {
            const Id: any;
            const Nome: any;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    namespace AcessorioService {
        const baseUrl = "Default/Acessorio";
        function Create(request: Serenity.SaveRequest<AcessorioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AcessorioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AcessorioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AcessorioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    class EmpresaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EmpresaForm {
        Nome: Serenity.StringEditor;
        Cnpj: Serenity.StringEditor;
        Longradouro: Serenity.StringEditor;
        Número: Serenity.StringEditor;
        Complemento: Serenity.StringEditor;
        Bairro: Serenity.StringEditor;
        Cidade: Serenity.StringEditor;
        Cep: Serenity.StringEditor;
        Uf: Serenity.StringEditor;
        Ativa: Serenity.BooleanEditor;
    }
}
declare namespace GestaoEquipamentos.Default {
    interface EmpresaRow {
        Id?: number;
        Nome?: string;
        Cnpj?: string;
        Longradouro?: string;
        Número?: string;
        Complemento?: string;
        Bairro?: string;
        Cidade?: string;
        Cep?: string;
        Uf?: string;
        Ativa?: boolean;
    }
    namespace EmpresaRow {
        const idProperty = "Id";
        const nameProperty = "Nome";
        const localTextPrefix = "Default.Empresa";
        namespace Fields {
            const Id: any;
            const Nome: any;
            const Cnpj: any;
            const Longradouro: any;
            const Número: any;
            const Complemento: any;
            const Bairro: any;
            const Cidade: any;
            const Cep: any;
            const Uf: any;
            const Ativa: any;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    namespace EmpresaService {
        const baseUrl = "Default/Empresa";
        function Create(request: Serenity.SaveRequest<EmpresaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmpresaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmpresaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmpresaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    class EmprestimoAcessorioForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EmprestimoAcessorioForm {
        Emprestimo: Serenity.IntegerEditor;
        Acessorio: Serenity.IntegerEditor;
        Descricao: Serenity.StringEditor;
    }
}
declare namespace GestaoEquipamentos.Default {
    interface EmprestimoAcessorioRow {
        Id?: number;
        Emprestimo?: number;
        Acessorio?: number;
        Descricao?: string;
        EmprestimoTipo?: number;
        EmprestimoEmpresa?: number;
        EmprestimoPessoa?: number;
        EmprestimoEquipamento?: number;
        EmprestimoDataEmprestimo?: string;
        EmprestimoDataDevolucao?: string;
        EmprestimoObservacao?: string;
        AcessorioNome?: string;
    }
    namespace EmprestimoAcessorioRow {
        const idProperty = "Id";
        const nameProperty = "Descricao";
        const localTextPrefix = "Default.EmprestimoAcessorio";
        namespace Fields {
            const Id: any;
            const Emprestimo: any;
            const Acessorio: any;
            const Descricao: any;
            const EmprestimoTipo: any;
            const EmprestimoEmpresa: any;
            const EmprestimoPessoa: any;
            const EmprestimoEquipamento: any;
            const EmprestimoDataEmprestimo: any;
            const EmprestimoDataDevolucao: any;
            const EmprestimoObservacao: any;
            const AcessorioNome: any;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    namespace EmprestimoAcessorioService {
        const baseUrl = "Default/EmprestimoAcessorio";
        function Create(request: Serenity.SaveRequest<EmprestimoAcessorioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmprestimoAcessorioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmprestimoAcessorioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmprestimoAcessorioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    class EmprestimoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EmprestimoForm {
        Tipo: Serenity.IntegerEditor;
        Empresa: Serenity.IntegerEditor;
        Pessoa: Serenity.IntegerEditor;
        Equipamento: Serenity.IntegerEditor;
        DataEmprestimo: Serenity.DateEditor;
        DataDevolucao: Serenity.DateEditor;
        Observacao: Serenity.StringEditor;
    }
}
declare namespace GestaoEquipamentos.Default {
    interface EmprestimoRow {
        Id?: number;
        Tipo?: number;
        Empresa?: number;
        Pessoa?: number;
        Equipamento?: number;
        DataEmprestimo?: string;
        DataDevolucao?: string;
        Observacao?: string;
        TipoNome?: string;
        EmpresaNome?: string;
        EmpresaCnpj?: string;
        EmpresaLongradouro?: string;
        EmpresaNúmero?: string;
        EmpresaComplemento?: string;
        EmpresaBairro?: string;
        EmpresaCidade?: string;
        EmpresaCep?: string;
        EmpresaUf?: string;
        EmpresaAtiva?: boolean;
        PessoaNome?: string;
        PessoaCpf?: string;
        PessoaRg?: string;
        PessoaLongradouro?: string;
        PessoaNumero?: string;
        PessoaComplemento?: string;
        PessoaBairro?: string;
        PessoaCidade?: string;
        PessoaCep?: string;
        PessoaUf?: string;
        EquipamentoMaterial?: number;
        EquipamentoMarca?: number;
        EquipamentoModelo?: number;
        EquipamentoSerial?: string;
        EquipamentoImei1?: string;
        EquipamentoImei2?: string;
        EquipamentoCompraData?: string;
        EquipamentoCompraNotaFiscal?: string;
        EquipamentoCompraValor?: number;
        EquipamentoStatus?: number;
    }
    namespace EmprestimoRow {
        const idProperty = "Id";
        const nameProperty = "Observacao";
        const localTextPrefix = "Default.Emprestimo";
        namespace Fields {
            const Id: any;
            const Tipo: any;
            const Empresa: any;
            const Pessoa: any;
            const Equipamento: any;
            const DataEmprestimo: any;
            const DataDevolucao: any;
            const Observacao: any;
            const TipoNome: any;
            const EmpresaNome: any;
            const EmpresaCnpj: any;
            const EmpresaLongradouro: any;
            const EmpresaNúmero: any;
            const EmpresaComplemento: any;
            const EmpresaBairro: any;
            const EmpresaCidade: any;
            const EmpresaCep: any;
            const EmpresaUf: any;
            const EmpresaAtiva: any;
            const PessoaNome: any;
            const PessoaCpf: any;
            const PessoaRg: any;
            const PessoaLongradouro: any;
            const PessoaNumero: any;
            const PessoaComplemento: any;
            const PessoaBairro: any;
            const PessoaCidade: any;
            const PessoaCep: any;
            const PessoaUf: any;
            const EquipamentoMaterial: any;
            const EquipamentoMarca: any;
            const EquipamentoModelo: any;
            const EquipamentoSerial: any;
            const EquipamentoImei1: any;
            const EquipamentoImei2: any;
            const EquipamentoCompraData: any;
            const EquipamentoCompraNotaFiscal: any;
            const EquipamentoCompraValor: any;
            const EquipamentoStatus: any;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    namespace EmprestimoService {
        const baseUrl = "Default/Emprestimo";
        function Create(request: Serenity.SaveRequest<EmprestimoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmprestimoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmprestimoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmprestimoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    class EquipamentoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EquipamentoForm {
        Material: Serenity.IntegerEditor;
        Marca: Serenity.IntegerEditor;
        Modelo: Serenity.IntegerEditor;
        Serial: Serenity.StringEditor;
        Imei1: Serenity.StringEditor;
        Imei2: Serenity.StringEditor;
        CompraData: Serenity.DateEditor;
        CompraNotaFiscal: Serenity.StringEditor;
        CompraValor: Serenity.DecimalEditor;
        Status: Serenity.IntegerEditor;
    }
}
declare namespace GestaoEquipamentos.Default {
    interface EquipamentoRow {
        Id?: number;
        Material?: number;
        Marca?: number;
        Modelo?: number;
        Serial?: string;
        Imei1?: string;
        Imei2?: string;
        CompraData?: string;
        CompraNotaFiscal?: string;
        CompraValor?: number;
        Status?: number;
        MaterialNome?: string;
        MarcaNome?: string;
        ModeloNome?: string;
        StatusNome?: string;
    }
    namespace EquipamentoRow {
        const idProperty = "Id";
        const nameProperty = "Serial";
        const localTextPrefix = "Default.Equipamento";
        namespace Fields {
            const Id: any;
            const Material: any;
            const Marca: any;
            const Modelo: any;
            const Serial: any;
            const Imei1: any;
            const Imei2: any;
            const CompraData: any;
            const CompraNotaFiscal: any;
            const CompraValor: any;
            const Status: any;
            const MaterialNome: any;
            const MarcaNome: any;
            const ModeloNome: any;
            const StatusNome: any;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    namespace EquipamentoService {
        const baseUrl = "Default/Equipamento";
        function Create(request: Serenity.SaveRequest<EquipamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EquipamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EquipamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EquipamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    class MarcaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MarcaForm {
        Nome: Serenity.StringEditor;
    }
}
declare namespace GestaoEquipamentos.Default {
    interface MarcaRow {
        Id?: number;
        Nome?: string;
    }
    namespace MarcaRow {
        const idProperty = "Id";
        const nameProperty = "Nome";
        const localTextPrefix = "Default.Marca";
        namespace Fields {
            const Id: any;
            const Nome: any;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    namespace MarcaService {
        const baseUrl = "Default/Marca";
        function Create(request: Serenity.SaveRequest<MarcaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MarcaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MarcaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MarcaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    class MaterialForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MaterialForm {
        Nome: Serenity.StringEditor;
    }
}
declare namespace GestaoEquipamentos.Default {
    interface MaterialRow {
        Id?: number;
        Nome?: string;
    }
    namespace MaterialRow {
        const idProperty = "Id";
        const nameProperty = "Nome";
        const localTextPrefix = "Default.Material";
        namespace Fields {
            const Id: any;
            const Nome: any;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    namespace MaterialService {
        const baseUrl = "Default/Material";
        function Create(request: Serenity.SaveRequest<MaterialRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaterialRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaterialRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaterialRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    class ModeloForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ModeloForm {
        Nome: Serenity.StringEditor;
    }
}
declare namespace GestaoEquipamentos.Default {
    interface ModeloRow {
        Id?: number;
        Nome?: string;
    }
    namespace ModeloRow {
        const idProperty = "Id";
        const nameProperty = "Nome";
        const localTextPrefix = "Default.Modelo";
        namespace Fields {
            const Id: any;
            const Nome: any;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    namespace ModeloService {
        const baseUrl = "Default/Modelo";
        function Create(request: Serenity.SaveRequest<ModeloRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ModeloRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ModeloRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ModeloRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    class PessoaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PessoaForm {
        Nome: Serenity.StringEditor;
        Cpf: Serenity.StringEditor;
        Rg: Serenity.StringEditor;
        Longradouro: Serenity.StringEditor;
        Numero: Serenity.StringEditor;
        Complemento: Serenity.StringEditor;
        Bairro: Serenity.StringEditor;
        Cidade: Serenity.StringEditor;
        Cep: Serenity.StringEditor;
        Uf: Serenity.StringEditor;
    }
}
declare namespace GestaoEquipamentos.Default {
    interface PessoaRow {
        Id?: number;
        Nome?: string;
        Cpf?: string;
        Rg?: string;
        Longradouro?: string;
        Numero?: string;
        Complemento?: string;
        Bairro?: string;
        Cidade?: string;
        Cep?: string;
        Uf?: string;
    }
    namespace PessoaRow {
        const idProperty = "Id";
        const nameProperty = "Nome";
        const localTextPrefix = "Default.Pessoa";
        namespace Fields {
            const Id: any;
            const Nome: any;
            const Cpf: any;
            const Rg: any;
            const Longradouro: any;
            const Numero: any;
            const Complemento: any;
            const Bairro: any;
            const Cidade: any;
            const Cep: any;
            const Uf: any;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    namespace PessoaService {
        const baseUrl = "Default/Pessoa";
        function Create(request: Serenity.SaveRequest<PessoaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PessoaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PessoaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PessoaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    class StatusForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface StatusForm {
        Nome: Serenity.StringEditor;
    }
}
declare namespace GestaoEquipamentos.Default {
    class StatusHistoricoAnexoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface StatusHistoricoAnexoForm {
        StatusHistorico: Serenity.IntegerEditor;
        Descricao: Serenity.StringEditor;
        Anexo: Serenity.IntegerEditor;
    }
}
declare namespace GestaoEquipamentos.Default {
    interface StatusHistoricoAnexoRow {
        Id?: number;
        StatusHistorico?: number;
        Descricao?: string;
        Anexo?: number;
        StatusHistoricoEquipamento?: number;
        StatusHistoricoStatus?: number;
        StatusHistoricoDataHora?: string;
        StatusHistoricoObservacao?: string;
    }
    namespace StatusHistoricoAnexoRow {
        const idProperty = "Id";
        const nameProperty = "Descricao";
        const localTextPrefix = "Default.StatusHistoricoAnexo";
        namespace Fields {
            const Id: any;
            const StatusHistorico: any;
            const Descricao: any;
            const Anexo: any;
            const StatusHistoricoEquipamento: any;
            const StatusHistoricoStatus: any;
            const StatusHistoricoDataHora: any;
            const StatusHistoricoObservacao: any;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    namespace StatusHistoricoAnexoService {
        const baseUrl = "Default/StatusHistoricoAnexo";
        function Create(request: Serenity.SaveRequest<StatusHistoricoAnexoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StatusHistoricoAnexoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StatusHistoricoAnexoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StatusHistoricoAnexoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    class StatusHistoricoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface StatusHistoricoForm {
        Equipamento: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        DataHora: Serenity.DateEditor;
        Observacao: Serenity.StringEditor;
    }
}
declare namespace GestaoEquipamentos.Default {
    interface StatusHistoricoRow {
        Id?: number;
        Equipamento?: number;
        Status?: number;
        DataHora?: string;
        Observacao?: string;
        EquipamentoMaterial?: number;
        EquipamentoMarca?: number;
        EquipamentoModelo?: number;
        EquipamentoSerial?: string;
        EquipamentoImei1?: string;
        EquipamentoImei2?: string;
        EquipamentoCompraData?: string;
        EquipamentoCompraNotaFiscal?: string;
        EquipamentoCompraValor?: number;
        EquipamentoStatus?: number;
        StatusNome?: string;
    }
    namespace StatusHistoricoRow {
        const idProperty = "Id";
        const nameProperty = "Observacao";
        const localTextPrefix = "Default.StatusHistorico";
        namespace Fields {
            const Id: any;
            const Equipamento: any;
            const Status: any;
            const DataHora: any;
            const Observacao: any;
            const EquipamentoMaterial: any;
            const EquipamentoMarca: any;
            const EquipamentoModelo: any;
            const EquipamentoSerial: any;
            const EquipamentoImei1: any;
            const EquipamentoImei2: any;
            const EquipamentoCompraData: any;
            const EquipamentoCompraNotaFiscal: any;
            const EquipamentoCompraValor: any;
            const EquipamentoStatus: any;
            const StatusNome: any;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    namespace StatusHistoricoService {
        const baseUrl = "Default/StatusHistorico";
        function Create(request: Serenity.SaveRequest<StatusHistoricoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StatusHistoricoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StatusHistoricoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StatusHistoricoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    interface StatusRow {
        Id?: number;
        Nome?: string;
    }
    namespace StatusRow {
        const idProperty = "Id";
        const nameProperty = "Nome";
        const localTextPrefix = "Default.Status";
        namespace Fields {
            const Id: any;
            const Nome: any;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    namespace StatusService {
        const baseUrl = "Default/Status";
        function Create(request: Serenity.SaveRequest<StatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    class TipoEmprestimoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TipoEmprestimoForm {
        Nome: Serenity.StringEditor;
    }
}
declare namespace GestaoEquipamentos.Default {
    interface TipoEmprestimoRow {
        Id?: number;
        Nome?: string;
    }
    namespace TipoEmprestimoRow {
        const idProperty = "Id";
        const nameProperty = "Nome";
        const localTextPrefix = "Default.TipoEmprestimo";
        namespace Fields {
            const Id: any;
            const Nome: any;
        }
    }
}
declare namespace GestaoEquipamentos.Default {
    namespace TipoEmprestimoService {
        const baseUrl = "Default/TipoEmprestimo";
        function Create(request: Serenity.SaveRequest<TipoEmprestimoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TipoEmprestimoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TipoEmprestimoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TipoEmprestimoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace GestaoEquipamentos {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace GestaoEquipamentos {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace GestaoEquipamentos {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace GestaoEquipamentos {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace GestaoEquipamentos.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GestaoEquipamentos.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace GestaoEquipamentos.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GestaoEquipamentos.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace GestaoEquipamentos.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GestaoEquipamentos.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace GestaoEquipamentos.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GestaoEquipamentos.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace GestaoEquipamentos.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace GestaoEquipamentos.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace GestaoEquipamentos {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace GestaoEquipamentos.LanguageList {
    function getValue(): string[][];
}
declare namespace GestaoEquipamentos.ScriptInitialization {
}
declare namespace GestaoEquipamentos.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace GestaoEquipamentos.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace GestaoEquipamentos.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace GestaoEquipamentos.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace GestaoEquipamentos.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace GestaoEquipamentos.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace GestaoEquipamentos.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace GestaoEquipamentos.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace GestaoEquipamentos.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace GestaoEquipamentos.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace GestaoEquipamentos.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace GestaoEquipamentos.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace GestaoEquipamentos {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace GestaoEquipamentos.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace GestaoEquipamentos.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace GestaoEquipamentos.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace GestaoEquipamentos.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace GestaoEquipamentos.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace GestaoEquipamentos.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace GestaoEquipamentos {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace GestaoEquipamentos.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace GestaoEquipamentos.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace GestaoEquipamentos.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace GestaoEquipamentos.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace GestaoEquipamentos.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace GestaoEquipamentos.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace GestaoEquipamentos.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace GestaoEquipamentos.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace GestaoEquipamentos.Default {
    class AcessorioDialog extends Serenity.EntityDialog<AcessorioRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AcessorioForm;
    }
}
declare namespace GestaoEquipamentos.Default {
    class AcessorioGrid extends Serenity.EntityGrid<AcessorioRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AcessorioDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestaoEquipamentos.Default {
    class EmpresaDialog extends Serenity.EntityDialog<EmpresaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EmpresaForm;
    }
}
declare namespace GestaoEquipamentos.Default {
    class EmpresaGrid extends Serenity.EntityGrid<EmpresaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmpresaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestaoEquipamentos.Default {
    class EmprestimoDialog extends Serenity.EntityDialog<EmprestimoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EmprestimoForm;
    }
}
declare namespace GestaoEquipamentos.Default {
    class EmprestimoGrid extends Serenity.EntityGrid<EmprestimoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmprestimoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestaoEquipamentos.Default {
    class EmprestimoAcessorioDialog extends Serenity.EntityDialog<EmprestimoAcessorioRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EmprestimoAcessorioForm;
    }
}
declare namespace GestaoEquipamentos.Default {
    class EmprestimoAcessorioGrid extends Serenity.EntityGrid<EmprestimoAcessorioRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmprestimoAcessorioDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestaoEquipamentos.Default {
    class EquipamentoDialog extends Serenity.EntityDialog<EquipamentoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EquipamentoForm;
    }
}
declare namespace GestaoEquipamentos.Default {
    class EquipamentoGrid extends Serenity.EntityGrid<EquipamentoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EquipamentoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestaoEquipamentos.Default {
    class MarcaDialog extends Serenity.EntityDialog<MarcaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MarcaForm;
    }
}
declare namespace GestaoEquipamentos.Default {
    class MarcaGrid extends Serenity.EntityGrid<MarcaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MarcaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestaoEquipamentos.Default {
    class MaterialDialog extends Serenity.EntityDialog<MaterialRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MaterialForm;
    }
}
declare namespace GestaoEquipamentos.Default {
    class MaterialGrid extends Serenity.EntityGrid<MaterialRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaterialDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestaoEquipamentos.Default {
    class ModeloDialog extends Serenity.EntityDialog<ModeloRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ModeloForm;
    }
}
declare namespace GestaoEquipamentos.Default {
    class ModeloGrid extends Serenity.EntityGrid<ModeloRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ModeloDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestaoEquipamentos.Default {
    class PessoaDialog extends Serenity.EntityDialog<PessoaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PessoaForm;
    }
}
declare namespace GestaoEquipamentos.Default {
    class PessoaGrid extends Serenity.EntityGrid<PessoaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PessoaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestaoEquipamentos.Default {
    class StatusDialog extends Serenity.EntityDialog<StatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StatusForm;
    }
}
declare namespace GestaoEquipamentos.Default {
    class StatusGrid extends Serenity.EntityGrid<StatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestaoEquipamentos.Default {
    class StatusHistoricoDialog extends Serenity.EntityDialog<StatusHistoricoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StatusHistoricoForm;
    }
}
declare namespace GestaoEquipamentos.Default {
    class StatusHistoricoGrid extends Serenity.EntityGrid<StatusHistoricoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StatusHistoricoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestaoEquipamentos.Default {
    class StatusHistoricoAnexoDialog extends Serenity.EntityDialog<StatusHistoricoAnexoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StatusHistoricoAnexoForm;
    }
}
declare namespace GestaoEquipamentos.Default {
    class StatusHistoricoAnexoGrid extends Serenity.EntityGrid<StatusHistoricoAnexoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StatusHistoricoAnexoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestaoEquipamentos.Default {
    class TipoEmprestimoDialog extends Serenity.EntityDialog<TipoEmprestimoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TipoEmprestimoForm;
    }
}
declare namespace GestaoEquipamentos.Default {
    class TipoEmprestimoGrid extends Serenity.EntityGrid<TipoEmprestimoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TipoEmprestimoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace GestaoEquipamentos.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace GestaoEquipamentos.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GestaoEquipamentos.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GestaoEquipamentos.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace GestaoEquipamentos.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
