using FluentMigrator;
using System;

namespace GestaoEquipamentos.Migrations.DefaultDB
{
    [Migration(20180928120000)]
    public class DefaultDB_20180928_120000: AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Empresa")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("Nome").AsString(255).Nullable()
                .WithColumn("CNPJ").AsString(255).Nullable()
                .WithColumn("Longradouro").AsString(255).Nullable()
                .WithColumn("Número").AsString(255).Nullable()
                .WithColumn("Complemento").AsString(255).Nullable()
                .WithColumn("Bairro").AsString(255).Nullable()
                .WithColumn("Cidade").AsString(255).Nullable()
                .WithColumn("CEP").AsString(255).Nullable()
                .WithColumn("UF").AsString(255).Nullable()
                .WithColumn("Ativa").AsBoolean().NotNullable().WithDefaultValue(false);

            Create.Table("Pessoa")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("Nome").AsString(255).Nullable()
                .WithColumn("CPF").AsString(255).Nullable()
                .WithColumn("RG").AsString(255).Nullable()
                .WithColumn("Longradouro").AsString(255).Nullable()
                .WithColumn("Numero").AsString(255).Nullable()
                .WithColumn("Complemento").AsString(255).Nullable()
                .WithColumn("Bairro").AsString(255).Nullable()
                .WithColumn("Cidade").AsString(255).Nullable()
                .WithColumn("CEP").AsString(255).Nullable()
                .WithColumn("UF").AsString(255).Nullable();

            Create.Table("Material")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("Nome").AsString(255).Nullable();

            Create.Table("Marca")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("Nome").AsString(255).Nullable();

            Create.Table("Modelo")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("Nome").AsString(255).Nullable();

            Create.Table("Status")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("Nome").AsString(255).Nullable();

            Create.Table("TipoEmprestimo")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("Nome").AsString(255).Nullable();

            Create.Table("Acessorio")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("Nome").AsString(255).Nullable();

            Create.Table("Equipamento")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("Material").AsInt32().NotNullable()
                    .ForeignKey("Fk_Equipamento_Material", "Material", "Id")
                .WithColumn("Marca").AsInt32().NotNullable()
                    .ForeignKey("Fk_Equipamento_Marca", "Marca", "Id")
                .WithColumn("Modelo").AsInt32().NotNullable()
                    .ForeignKey("Fk_Equipamento_Modelo", "Modelo", "Id")
                .WithColumn("Serial").AsString(255).Nullable()
                .WithColumn("IMEI1").AsString(255).Nullable()
                .WithColumn("IMEI2").AsString(255).Nullable()
                .WithColumn("CompraData").AsDate().Nullable()
                .WithColumn("CompraNotaFiscal").AsString(255).Nullable()
                .WithColumn("CompraValor").AsDecimal().Nullable()
                .WithColumn("Status").AsInt32().Nullable()
                    .ForeignKey("Fk_Equipamento_Status", "Status", "Id");

            Create.Table("Emprestimo")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("Tipo").AsInt32().NotNullable()
                    .ForeignKey("Fk_Emprestimo_TipoEmprestimo", "TipoEmprestimo", "Id")
                .WithColumn("Empresa").AsInt32().NotNullable()
                    .ForeignKey("Fk_Emprestimo_Empresa", "Empresa", "Id")
                .WithColumn("Pessoa").AsInt32().NotNullable()
                    .ForeignKey("Fk_Emprestimo_Pessoa", "Pessoa", "Id")
                .WithColumn("Equipamento").AsInt32().NotNullable()
                    .ForeignKey("Fk_Emprestimo_Equipamento", "Equipamento", "Id")
                .WithColumn("DataEmprestimo").AsDate().Nullable()
                .WithColumn("DataDevolucao").AsDate().Nullable()
                .WithColumn("Observacao").AsString(255).Nullable();

            Create.Table("EmprestimoAcessorio")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("Emprestimo").AsInt32().NotNullable()
                    .ForeignKey("Fk_EmprestimoAcessorio_Emprestimo", "Emprestimo", "Id")
                .WithColumn("Acessorio").AsInt32().NotNullable()
                    .ForeignKey("Fk_EmprestimoAcessorio_Acessorio", "Acessorio", "Id")
                .WithColumn("Descricao").AsString(255).Nullable();
            
            Create.Table("StatusHistorico")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity()
                .WithColumn("Equipamento").AsInt32().NotNullable()
                    .ForeignKey("Fk_StatusHistorico_Equipamento", "Equipamento", "Id")
                .WithColumn("Status").AsInt32().NotNullable()
                    .ForeignKey("Fk_StatusHistorico_Status", "Status", "Id")
                .WithColumn("DataHora").AsDateTime().Nullable().WithDefaultValue(SystemMethods.CurrentDateTime)
                .WithColumn("Observacao").AsString(255).Nullable();

            Create.Table("StatusHistoricoAnexo")
                .WithColumn("Id").AsInt32().NotNullable()
                .WithColumn("StatusHistorico").AsInt32().NotNullable()
                    .ForeignKey("Fk_StatusHistoricoAnexo_StatusHistorico", "StatusHistorico", "Id")
                .WithColumn("Descricao").AsString(255).Nullable()
                .WithColumn("Anexo").AsByte().Nullable();
        }
    }
}