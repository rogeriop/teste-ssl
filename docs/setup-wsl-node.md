## Instalação do Node.js com NVM no WSL

O NVM (Node Version Manager) é uma ferramenta que serve para gerenciar múltiplas versões do Node.js no mesmo sistema. Ele é especialmente útil para desenvolvedores que trabalham em projetos diferentes com requisitos de versões distintas.

🚀 Principais funções do NVM
- Instalar qualquer versão do Node.js com um simples comando:
nvm install 18
- Trocar de versão rapidamente, sem precisar reinstalar:
nvm use 16
- Definir uma versão padrão para novos terminais:
nvm alias default 18
- Testar compatibilidade de projetos com versões diferentes do Node.

🧠 Por que usar o NVM no WSL?
No WSL, o ambiente é isolado do Windows, então o NVM permite que você mantenha o Node atualizado e flexível sem interferir no sistema principal. É ideal para:
- Evitar conflitos entre projetos.
- Trabalhar com bibliotecas que exigem versões específicas.
- Manter seu ambiente limpo e controlado.

Se quiser, posso te mostrar como criar um script que instala o NVM e configura a versão padrão do Node automaticamente. Quer que eu monte isso pra você?


```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
```

```bash
rm -rf node_modules package-lock.json
npm install
```
Se ainda não funcionar, adicione manualmente ao seu shell
```bash
nano ~/.bashrc
```

Adicione estas linhas ao final:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
Salve e feche (Ctrl + O, Enter, Ctrl + X), depois recarregue:
```bash
source ~/.bashrc
```
Verifique se o NVM foi instalado
```bash
command -v nvm
```
Se retornar algo como /home/usuario/.nvm/nvm.sh, está tudo certo.


Assim, você sempre terá um guia rápido para configurar ou recuperar seu ambiente.

---

### 📒 2. **Use um app de notas sincronizado**
Se você prefere algo fora do projeto, use apps como:

- **Obsidian** (offline e poderoso para desenvolvedores)
- **Notion** (organização com tags e links)
- **OneNote** ou **Google Keep** (simples e sincronizados)

Crie uma seção chamada “WSL + Node.js” e salve tudo lá.

---

### 🧠 3. **Automatize com um script `.sh`**
Você pode criar um script chamado `setup-node.sh` com os comandos:

```bash
#!/bin/bash
echo "Instalando NVM..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
echo "Node.js instalado com sucesso!"