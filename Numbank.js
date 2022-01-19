var grGroupRoles = new GlideRecord('sys_group_has_role');
grGroupRoles.addEncodedQuery('group.u_oracle_idISNOTEMPTY^group.nameNOT LIKEServiceNow Admin^group.sys_created_byLIKEAoop');
grGroupRoles.query();

var log = [];
while (grGroupRoles.next()) {
    var deleted = grGroupRoles.deleteRecord();

    log.push({
        group: grGroupRoles.group.getDisplayValue(),
        role: grGroupRoles.role.getDisplayValue(),
        deleted: deleted,
    });
}

gs.info(JSON.stringify(log));

/*Este é para limpar o relacionamento das roles com os grupos
18h50
Check list: -
Export da tabela de relacionamento grupo e roles
Script de limpeza da tabela de relacionamento grupo e roles -
limpar todos os relacionamentos para os grupos com OracleID is not empty ou created by "Aoop*                         
                        QUERY: group.u_oracle_idISNOTEMPTY^ORgroup.sys_created_byLIKEAoop
                      Só teria que tirar dessa query o grupo ServiceNow_Admin, mas se não de para tirar depois é só incluir  a role "admin" de novo
3. Script para incluir os grupos novos para os usuários de acordo com as novas regras. = à BR do item 4
4. BR para aplicar as novas regras de inclusão dos usuários aos grupos novos. (Tem alguns pontos que preciso validar ainda)
       a. insert ou update na tabela sys_user:
               se o chapter =  "Risk Management" incluir o grupo "Risk Management 2LoD"
               se o chapter = "Product Manager" or chapter = "Business Architect" or (usuário existe no (select distinct manager from sys-user) incluir o grupo "All licenced users"
              se o usuário estiver no grupo Oracle/departamento (Platforms for Regulatory Compliance, Regulatory Compliance, Ethics & Compliance ou Compliance) incluir o grupo "Compliance 2LoD"
             se o chapter = (Product Manager, Business Architect, Risk Management, Controllership, Public Policy, Tax, Compliance, Regulatory Operations, Legal) or (usuário existe no (select distinct manager from sys-user) incluir o grupo "NPF_users"
Para os grupos Entity Admin e System Admin não teremos regras automáticas, apenas os usuários específicos que forem passdos.
Para o System Admin, precisamos ter o critétio de só incluir pessoas que vão fazer a sustentação ou desenvolvimento no serviceNow (edited)*/
