This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## setup

```sh
npm install
```

### node

```sh
nvm install 22.14.0
nvm use 22.14.0
```

もしくは下記を`~/.zshrc`に追加。<br>
ディレクトリ移動を行うと`.nvmrc`を読み込んでnodeのバージョンを自動で切り替え可能になる。

```sh
enter_directory() {
	if [[ $PWD == $PREV_PWD ]]; then
		return
	fi
	PREV_PWD=$PWD
	if [[ -f ".nvmrc" ]]; then
		current_node_ver=`cat .nvmrc`
		if ! nvm use $current_node_ver 2>/dev/null; then
			echo "Installing node version $current_node_ver..."
			nvm install $current_node_ver
			nvm use $current_node_ver
		fi
	fi
}
```

### vscode plugins

- [Prettier - Code formatter](https://marketplace.cursorapi.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.cursorapi.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig for VS Code](https://marketplace.cursorapi.com/items?itemName=EditorConfig.EditorConfig)
- [Tailwind CSS IntelliSense](https://marketplace.cursorapi.com/items?itemName=bradlc.vscode-tailwindcss)
- [Stylelint](https://marketplace.cursorapi.com/items?itemName=stylelint.vscode-stylelint)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## version

node: v22.14.0

```


```
