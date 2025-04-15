# Fabrica Docs

Padrões de Documentação dos Projetos da Fábrica de Software

Este repositório contém os padrões de documentação dos projetos da Fábrica de Software. O objetivo é padronizar a documentação dos projetos, facilitando a leitura e compreensão por parte de todos os membros da equipe.

---

## 🛠 Modelos:

- 🚀 **BackEnd**: [Backend](BACKEND/BACKEND.md)
- 🎨 **FrontEnd**: [FrontEnd](FRONTEND/FRONTEND.md)
- 📄 **Docs**: [Docs](DOCS/DOCS.md)

## 🎨 FrontEnd:

> Onde irá o modelo

## 🚀 BackEnd:

> Onde irá o modelo


## 📄 Docs:

> Onde irá o modelo

<details>
  <summary>Padrão de Branch</summary>
    
  - **ESCOPO:** Deve refletir a funcionalidade ou tela que está sendo trabalhada.
  - **NUMERODATAREFA:** O número da tarefa ou issue correspondente.
  - **TIPO:** Tipo de tarefa (Feat, Fix, Chore).
    
  ### Exemplos de branches:
    Tarefa: Tela de Login(#1)
    Nome da Branch: FEAT(Login)-1

    Tarefa: Tela de Cadastro (#3)
    Nome da Branch: FEAT(Register)-3
    
</details>

---

<details>
  <summary>Padrão de Commit</summary>
    
  - **ESCOPO:** Deve refletir a funcionalidade ou tela que está sendo trabalhada.
  - **NUMERODATAREFA:** O número da tarefa ou issue correspondente.
  - **TIPO:** Tipo de tarefa (Feat, Fix, Chore).
    
  ### Exemplos de branches:
    Tarefa: Tela de Login(#1)
    Nome da Branch: FEAT(Login): Fiz a tela de logn [Refs: #3]

    Tarefa: Tela de Cadastro (#3)
    Nome da Branch: FEAT(Register): Fiz a tela de registro [Refs: #3]
    
</details>

---

<details>
  <summary>Padrão de Roteiro de Pull Request</summary>
    
 ### Test Plan for **Nome Da Task**

#### Required Tests:
1. <<Fazer ação x>>
2. <<Fazer ação y>>

#### Actions Taken:
- <<Ação Realizada 1>>
- <<Ação Realizada 2>>


#### Tested Browsers:
- [x] Chrome
- [x] Edge
- [x] Firefox
- [ ] Safari
- [ ] Opera

#### Notes:
- <<Notas/Observações>>

#### Closing Keywords:
- Resolves #<<Número da Issue>>
</details>

---