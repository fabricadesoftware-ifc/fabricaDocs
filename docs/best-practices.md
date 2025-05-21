### **Padrão de Issues, Branches e Pull Requests**

#### **Padrão de Issues**

> As issues servem como **tarefa rastreável**, devem ser claras, atômicas e bem descritas.

**Título da issue:**  
`[Tipo] Breve descrição do que será feito`  
Exemplo:  
`[Feature] Criar endpoint de listagem de projetos`  
`[Bug] Corrigir erro no formulário de login`

**Descrição (modelo):**

```markdown
## Descrição

Explicação breve do que será feito e o contexto.

## Critérios de aceitação

- [ ] Deve listar todos os projetos ativos
- [ ] Deve utilizar paginação
- [ ] Deve estar testado

## Relacionamentos

- Relacionada à Issue #XX
- Requer #YY
```

**Tipos comuns:**

- `[Feature]`: Nova funcionalidade
- `[Bug]`: Correção de erro
- `[Refactor]`: Refatoração de código
- `[Docs]`: Atualização de documentação
- `[Chore]`: Tarefas administrativas ou técnicas

---

#### **Padrão de Branches**

> As branches devem refletir a feature que está sendo desenvolvida. Use nomes curtos, descritivos e com prefixo.

**Padrão:**  
`tipo/nome-curto`  
Exemplos:

- `feature/listar-projetos`
- `bug/fix-login`
- `refactor/melhorar-paginacao`
- `docs/atualizar-readme`

---

#### **Padrão de Pull Requests (PR)**

<!-- TODO: Acrescentar o uso de PR integradas ao GitHub Projects -->

> Um PR deve referenciar claramente a issue que resolve, estar bem descrito e pronto para revisão.

**Título:**  
`[tipo] Breve descrição da funcionalidade`

**Descrição (modelo):**

```markdown
## O que foi feito?

Descreva de forma clara e objetiva o que foi desenvolvido ou alterado.

## Como testar?

Passos para reproduzir o funcionamento da PR localmente.

## Issues relacionadas

Closes #XX
```

**Boas práticas:**

- Faça PRs pequenos e específicos
- Nunca envie código não testado
- Use a aba "Files changed" para revisar seu próprio código antes de solicitar revisão
- Marque o revisor adequado no GitHub

---

### **Padrão de documentação de projeto**

> A documentação do projeto deve ser clara, acessível e versionada junto com o repositório.

**Recomendações:**

Usar `README.md` como ponto de entrada principal com:

- Visão geral do projeto
- Tecnologias utilizadas
- Instruções de instalação e execução
- Como contribuir:
  Crie uma pasta `/docs` para conteúdos mais extensos (ex: diagramas, decisões técnicas, guias de estilo);
  Mantenha o conteúdo atualizado a cada mudança relevante;
  Utilize Markdown padrão, com títulos organizados e listas sempre que possível.

---
