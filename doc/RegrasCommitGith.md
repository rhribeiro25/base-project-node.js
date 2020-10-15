# Dado um número de versão MAJOR.MINOR.PATCH, incremente a:

versão Maior (MAJOR): quando fizer mudanças incompatíveis na API,
versão Menor (MINOR): quando adicionar funcionalidades mantendo compatibilidade, e
versão de Correção (PATCH): quando corrigir falhas mantendo compatibilidade.
Rótulos adicionais para pré-lançamento (pre-release) e metadados de construção (build) estão disponíveis como extensão ao formato 

## MAJOR.MINOR.PATCH.

### fix: 
  um commit do tipo fix soluciona um problema na sua base de código (isso se correlaciona com PATCH do versionamento semântico).
  EX: git commit -m "fix: Meu commit fix"

### feat: 
  um commit do tipo feat inclui um novo recurso na sua base de código (isso se correlaciona com MINOR do versionamento semântico).
  EX: git commit -m "feat: Meu commit feat "

### BREAKING CHANGE: 
  um commit que contém o texto BREAKING CHANGE:, no começo do texto do corpo opcional ou do rodapé opcional, inclui uma modificação que quebra a compatibilidade da API (isso se correlaciona com MAJOR do versionamento semântico). Uma BREAKING CHANGE pode fazer parte de commits de qualquer tipo.
  EX: git commit -m "BREAKING CHANGE: Meu commit breaking"

# The most common commit conventions follow this pattern:
type(scope?): subject
body?
footer?
