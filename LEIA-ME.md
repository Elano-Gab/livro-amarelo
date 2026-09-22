# Livro Amarelo — Guia de bolso

Este repositório publica o guia sozinho, a cada alteração:

- **Site instalável** (Android e iPhone): `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`
- **APK para Android, sempre a versão mais nova:** `https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO/releases/latest/download/livro-amarelo.apk`

## Primeira configuração (só pelo navegador)
1. Crie um repositório **público** em github.com/new (ex.: `livro-amarelo`), sem README.
2. No repositório: **Settings > Pages > Build and deployment > Source: GitHub Actions**.
3. Na página inicial do repositório, clique em **uploading an existing file** e arraste **todo o conteúdo** desta pasta, inclusive a pasta `.github` (no Mac, aperte Cmd+Shift+. no Finder para ver pastas ocultas). Clique em **Commit changes**.
4. Abra a aba **Actions** e espere os dois fluxos ficarem verdes: “Publicar site” (~1 min) e “Gerar APK” (~6–10 min na primeira vez).

Se “Publicar site” falhar porque o Pages ainda não estava ligado, entre nele em **Actions** e clique em **Re-run all jobs**.

## Como atualizar
Edite ou envie arquivos novos pelo próprio GitHub (ícone de lápis, ou **Add file > Upload files**). Cada commit na branch `main` republica o site e gera um APK novo, com número de versão maior. Quem já tem o APK instalado baixa o novo pelo mesmo link e instala por cima.

## Instalar
- **Android:** abra o link do APK no celular, baixe e toque no arquivo (permita “instalar apps desconhecidos”). Ou abra o site no Chrome > ⋮ > **Instalar app**.
- **iPhone:** abra o site no **Safari** > **Compartilhar** > **Adicionar à Tela de Início**. Funciona offline depois do primeiro acesso, sem App Store.

O próprio app tem essas instruções em **Mais > Instalar no celular**, com o botão “Baixar o APK” quando aberto pelo site do GitHub.

## O que tem aqui
- `www/` — o app (HTML, CSS, JavaScript, fontes e ícones). Os textos ficam em `www/data.js`.
- `assets/` — ícone e tela de abertura do app Android.
- `.github/workflows/` — as automações: `site.yml` (GitHub Pages) e `apk.yml` (APK).
- `ci/debug.keystore` — chave de assinatura de **teste**, fixa, para que cada APK novo instale por cima do anterior. Não use essa chave para publicar na Play Store; lá será preciso uma chave de produção guardada em segredo.
- `package.json` e `capacitor.config.json` — projeto Capacitor. O identificador do app é `br.com.livroamarelo.guia`; se for trocar, troque antes de distribuir.

## Gerar o APK no seu computador (opcional)
Com Node.js 22+ e Android Studio: `npm install`, `npx cap add android`, `npm run icones`, `npx cap sync android`, `npx cap open android` e **Build > Build APK(s)**.

## iPhone como app nativo (opcional)
Exige Mac com Xcode: `npm install @capacitor/ios`, `npx cap add ios`, `npx cap open ios`. Para distribuir a testadores sem publicar, use o TestFlight (conta Apple Developer paga).

## Identidade visual
O app usa preto, amarelo e branco, a faixa tricolor, tipografia condensada e uma estampa de onça genérica. O logotipo oficial e a mascote não estão incluídos; se houver autorização, troque os ícones em `www/icons/` e `assets/`.

Trechos marcados como “guia” (cinza) são contexto acrescentado e não fazem parte do livro.
