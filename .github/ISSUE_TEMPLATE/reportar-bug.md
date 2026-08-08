---
name: Reportar Bug de Teste (OrangeHRM)
about: Template oficial para reporte de defeitos identificados durante o ciclo de testes funcionais e não-funcionais.
title: '[BUG] [MODULO] - Breve descrição do problema'
labels: 'bug'
assignees: ''
---

##  Módulo Afetado
- [ ] Login
- [ ] My Info (Personal Details / Contact / Emergency)
- [ ] My Info (Dependents / Immigration)
- [ ] Recruitment (Candidates / Add Candidate)
- [ ] PIM / Dashboard / Outro

---

##  Tipo de Teste (Classification)
- [ ] **Risk-Based Testing (RBT)** — Falha em fluxo crítico ou regra de negócio principal
- [ ] **Fault Tolerance Testing** — Instabilidade de UI, falha de recuperação ou layout
- [ ] **Error Handling Testing** — Falha de validação de campo, aceitação de dados inválidos/sem sanitização

---

##  ID do Caso de Teste Relacionado
> *Informe o ID do HLTC/LLTC correspondente (ex: `TC_REC_AddCandidate_001` ou `TC_ERROR_F_MYINFO_002`)*

**ID:** `TC_...`

---

##  Descrição do Defeito
Descreva de forma clara e objetiva o comportamento incorreto observado no sistema.

---

##  Passos para Reproduzir (Steps to Reproduce)
1. Acessar o sistema com a conta `...`
2. Navegar até o módulo `...`
3. Preencher o campo `...` com o valor `...`
4. Clicar no botão `...`

---

##  Resultados Esperados vs. Obtidos

* **Resultado Esperado:** O sistema deve validar a entrada, impedir a gravação e exibir mensagem de erro amigável ao usuário.
* **Resultado Obtido (Actual Result):** O sistema aceita os dados incorretos e grava o registro no banco de dados sem qualquer aviso.

---

##  Severidade (Impacto)
- [ ] **High (Grave):** Inconsistência grave de dados pessoais, falhas de segurança ou bypass de validação crítica.
- [ ] **Medium (Média):** Falhas de formatação de nome, caracteres especiais em campos indevidos, pequenos desvios de UX.
- [ ] **Low (Baixa):** Pequenos erros visuais, textos com espaçamento incorreto, domínio de e-mail genérico.

---

##  Ambiente de Teste
* **Aplicação:** OrangeHRM OS Demo v5.8
* **Sistema Operacional:** Windows 11 / Linux (CachyOS)
* **Navegador:** Google Chrome (v124 / v149)
* **Usuário Utilizado:** `Admin`

---

##  Evidências
*(Anexe aqui capturas de tela (screenshots), gravações de tela ou logs do console do navegador)*