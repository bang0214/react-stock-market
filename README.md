This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

````
react-stock-market
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 18
│  │  │  └─ 2cd5e1b7b0f624758c8b796521d0e5584cecbe
│  │  ├─ 1a
│  │  │  └─ 69fd2a450afc3bf47e08b22c149190df0ffdb4
│  │  ├─ 33
│  │  │  └─ 14e4780a0c8785366fdc3b8499668d163e33f8
│  │  ├─ 46
│  │  │  └─ 78774e6d606704bce1897a5dab960cd798bf66
│  │  ├─ 4b
│  │  │  └─ d61458d0b479868e35620c7363331785eb8c70
│  │  ├─ 51
│  │  │  └─ 74b28c565c285e3e312ec5178be64fbeca8398
│  │  ├─ 57
│  │  │  └─ 05d4ea0457360a7c779a3ec1951f44a4d66175
│  │  ├─ 71
│  │  │  └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  ├─ 7e
│  │  │  └─ 4bd91a03437328466a264489ce47e107635565
│  │  ├─ 87
│  │  │  └─ 5c01e819b90038f0c3e4aee2a4dcc2086b0e14
│  │  ├─ bf
│  │  │  └─ fb357a7122523ec94045523758c4b825b448ef
│  │  ├─ c4
│  │  │  └─ 033664f80d3cb9cb687fb5facbc82aedb302f6
│  │  ├─ cf
│  │  │  └─ a723636f2e0bf6c339e9980b48fb62fe616244
│  │  ├─ d2
│  │  │  └─ f84222734f27b623d1c80dda3561b04d1284af
│  │  ├─ d6
│  │  │  └─ 06ecbbc03636f86a2ea3e08dab67d15284ba20
│  │  ├─ e7
│  │  │  └─ ff90fd2767199e09b281bfa87e08a90f33270e
│  │  ├─ f4
│  │  │  └─ 4a670803b15a4db5b1ac54366c60f887dedd6d
│  │  ├─ fd
│  │  │  └─ 3dbb571a12a1c3baf000db049e141c888d05a8
│  │  ├─ ff
│  │  │  └─ 080cbcc821298d68b8520add30471be36c1bd4
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ app
│  ├─ dashboard
│  │  ├─ holdings
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ transactions
│  │  │  └─ page.tsx
│  │  └─ typeDefinitions
│  │     └─ columns.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ login
│  │  └─ page.tsx
│  └─ page.tsx
├─ components
│  ├─ header.tsx
│  └─ ui
│     ├─ avatar.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ data-table.tsx
│     ├─ dropdown-menu.tsx
│     ├─ input.tsx
│     ├─ label.tsx
│     ├─ navigation-menu.tsx
│     ├─ sheet.tsx
│     ├─ table.tsx
│     └─ tabs.tsx
├─ components.json
├─ lib
│  ├─ api
│  │  └─ request.ts
│  └─ utils.ts
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ next.svg
│  └─ vercel.svg
├─ README.md
├─ tailwind.config.ts
├─ tsconfig.json
└─ 初始价格.txt

```# react-stock-market

````

react-stock-market
├─ .eslintrc.json
├─ .git
│ ├─ COMMIT_EDITMSG
│ ├─ config
│ ├─ description
│ ├─ FETCH_HEAD
│ ├─ HEAD
│ ├─ hooks
│ │ ├─ applypatch-msg.sample
│ │ ├─ commit-msg.sample
│ │ ├─ fsmonitor-watchman.sample
│ │ ├─ post-update.sample
│ │ ├─ pre-applypatch.sample
│ │ ├─ pre-commit.sample
│ │ ├─ pre-merge-commit.sample
│ │ ├─ pre-push.sample
│ │ ├─ pre-rebase.sample
│ │ ├─ pre-receive.sample
│ │ ├─ prepare-commit-msg.sample
│ │ ├─ push-to-checkout.sample
│ │ ├─ sendemail-validate.sample
│ │ └─ update.sample
│ ├─ index
│ ├─ info
│ │ └─ exclude
│ ├─ logs
│ │ ├─ HEAD
│ │ └─ refs
│ │ ├─ heads
│ │ │ └─ main
│ │ └─ remotes
│ │ └─ origin
│ │ └─ main
│ ├─ objects
│ │ ├─ 00
│ │ │ └─ 18dcb9f4b106584d219f77dd81ed728e450c75
│ │ ├─ 03
│ │ │ └─ fd74ad664b86bc79cdc7d862ab27e6477454c4
│ │ ├─ 07
│ │ │ └─ d3ab90d10b12d6de8b2e30ef8686f297b662c8
│ │ ├─ 0a
│ │ │ ├─ 5507e55405b4664b5778a5897c9defaec06ce6
│ │ │ └─ acfa65bff6960919ab2d9b71d8e6d8c76ac37e
│ │ ├─ 0b
│ │ │ └─ a4277355fadde682ecc8399ee656838dc74049
│ │ ├─ 0c
│ │ │ └─ 25e42e55c45c23a78bb5214e77179edaae0e39
│ │ ├─ 0e
│ │ │ └─ c43843e9b6c00f394047fdc95ab1eca233e582
│ │ ├─ 14
│ │ │ ├─ 19f56695be517ec78fe8ad26a6f7da3a7d53b2
│ │ │ └─ ea260351a9e91bc4a14f147dad105a11937b1f
│ │ ├─ 15
│ │ │ └─ f2b0250c61fc602e22d6c2493b893fe91b1027
│ │ ├─ 18
│ │ │ └─ 2cd5e1b7b0f624758c8b796521d0e5584cecbe
│ │ ├─ 1a
│ │ │ └─ 69fd2a450afc3bf47e08b22c149190df0ffdb4
│ │ ├─ 1d
│ │ │ └─ 90796e86130672d1b1f0717f965c23a9876052
│ │ ├─ 23
│ │ │ └─ e5c127d5f6f90a4532479092cbf97085802ac6
│ │ ├─ 26
│ │ │ └─ eb109120e2ee43feddb68900f353a119976c41
│ │ ├─ 27
│ │ │ └─ 128b5a4cc7f3627599219965f4ba8c2342bb9a
│ │ ├─ 2e
│ │ │ └─ e43045dd0623eb749cb8b523e74e7c15062cff
│ │ ├─ 33
│ │ │ ├─ 14e4780a0c8785366fdc3b8499668d163e33f8
│ │ │ └─ 781eb359d31605628e85a405e71d3aed601330
│ │ ├─ 36
│ │ │ └─ 91b25a722e8ded5109ccd517c03edee8d287ea
│ │ ├─ 3b
│ │ │ └─ 9257ca63e996d1165cb608f23499276231ec78
│ │ ├─ 41
│ │ │ └─ fa7e0561a3fdb5f986c1213a35e563de740e96
│ │ ├─ 43
│ │ │ └─ fb6e1478f5f908a338b362d415700071926608
│ │ ├─ 46
│ │ │ └─ 78774e6d606704bce1897a5dab960cd798bf66
│ │ ├─ 47
│ │ │ └─ 31563943708e6e43ac60a3a7fb723c164a415a
│ │ ├─ 51
│ │ │ ├─ 74b28c565c285e3e312ec5178be64fbeca8398
│ │ │ └─ e507ba9d08bcdbb1fb630498f1cbdf2bf50093
│ │ ├─ 53
│ │ │ └─ 4182176bf87f9308355514adc884d2b69750a5
│ │ ├─ 67
│ │ │ └─ 7d05fd6c1c88366e8d0cdcdc9dcdea723a2ebb
│ │ ├─ 70
│ │ │ └─ 46901b714a892114a6191404fb1235fd3d2cf5
│ │ ├─ 71
│ │ │ └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│ │ ├─ 77
│ │ │ ├─ 045a008ea25ea039af4baedc5ba1d5ed09c78d
│ │ │ └─ f2869fc3d5e8a1fcf409884cc8580e679af13c
│ │ ├─ 7b
│ │ │ └─ 1dc6eece48405c7f89e50d3b1701225628cdf5
│ │ ├─ 7e
│ │ │ └─ 8eab72f08ccc5a40f9627281594666e15730ea
│ │ ├─ 7f
│ │ │ ├─ 3502f8b2820be1d6f0aa4c1ffaa351799c1ed3
│ │ │ └─ b21447ffc7616ec1b775d082c1a9db1472ed84
│ │ ├─ 80
│ │ │ └─ 9f7ab9c24e4248beaff0cb6f0c73c1bbfd6b07
│ │ ├─ 84
│ │ │ └─ 287e82fba61c09193cc9959b08dfa00277293f
│ │ ├─ 8a
│ │ │ └─ bdb15c94582e7a8da6e43bca3aa4a1f51d82e7
│ │ ├─ 90
│ │ │ ├─ 426418cf990c00a70199799c18fe2c7ef2f05e
│ │ │ └─ e6880769ddb30285ef6f8268d72613f2f8b0d7
│ │ ├─ a2
│ │ │ └─ 77b7ebac9c1acacd8852f7c926662e9b4f40b5
│ │ ├─ a3
│ │ │ └─ 7f17ba04055c1c174bd439d58aa3b5b2857cc9
│ │ ├─ a6
│ │ │ └─ c7d224bd2afc382d5cfc4847435d53dc5cda37
│ │ ├─ a8
│ │ │ └─ fa0aeb245130ab33c6fb2e76631fc99bde53bb
│ │ ├─ af
│ │ │ ├─ 92ba9078c5c63ad6a4381bf064be1a2f29020f
│ │ │ └─ a13ecfa3bd0f4a553a510b856c5800382e139b
│ │ ├─ b2
│ │ │ └─ b96d9c63803bea9d059dee85437b65bb269ec1
│ │ ├─ b4
│ │ │ └─ 6fcea24e3cf1a2e066fe2ea72f0156546c6d0d
│ │ ├─ b5
│ │ │ └─ 2340a0e515f6840883e4d7ea6d0ae548110d5f
│ │ ├─ ba
│ │ │ └─ f19c80dac94378128924c5931bc648adc3b4e6
│ │ ├─ bb
│ │ │ └─ 3ab0226c5a88c011a018e7ced3ec86cff4f075
│ │ ├─ bd
│ │ │ └─ e568712118eef76a342d309e56c392d73ae8ef
│ │ ├─ c6
│ │ │ └─ 0ec823b9fed794aa07ba83a5cf603cab2095d4
│ │ ├─ c9
│ │ │ └─ 860cac9538dd883669c4f862374fdd0943fadc
│ │ ├─ cd
│ │ │ └─ 3fb226d65db36c4b3109249e46b6fd8c535dac
│ │ ├─ ce
│ │ │ └─ 89f37888d485a7e34a38b4c32560ee0d457dc8
│ │ ├─ d0
│ │ │ └─ 56ccedf9acb7588659789c3da26ab6a07b079a
│ │ ├─ d2
│ │ │ └─ f84222734f27b623d1c80dda3561b04d1284af
│ │ ├─ d5
│ │ │ └─ 2efc73e00940e23e56a62284676cef376c06ab
│ │ ├─ d8
│ │ │ └─ def6de3ce395dda508041fed2308e1ecd284d5
│ │ ├─ de
│ │ │ └─ ffce533ac0a696e9322d673e9312d5f07e654e
│ │ ├─ e4
│ │ │ └─ 26da401e69f15df2c8691b2a3fff3c193d4a05
│ │ ├─ e5
│ │ │ └─ 0d8ec36c0a12807a3f0f3bb38d0baea51c7ec5
│ │ ├─ e7
│ │ │ ├─ 378e2f0e5b7e01ed4b643e9d0004ffcffdf69b
│ │ │ └─ ff90fd2767199e09b281bfa87e08a90f33270e
│ │ ├─ f6
│ │ │ └─ 9a0d64caf3410a473465e6f4ff003de4b68946
│ │ ├─ fc
│ │ │ └─ b7dd5adfb5594a5f81428a82e7b2fba7f3d237
│ │ ├─ fd
│ │ │ └─ 3dbb571a12a1c3baf000db049e141c888d05a8
│ │ ├─ info
│ │ └─ pack
│ ├─ ORIG_HEAD
│ └─ refs
│ ├─ heads
│ │ └─ main
│ ├─ remotes
│ │ └─ origin
│ │ └─ main
│ └─ tags
├─ .gitignore
├─ app
│ ├─ dashboard
│ │ ├─ detail
│ │ │ └─ [code]
│ │ │ └─ page.tsx
│ │ ├─ holdings
│ │ │ └─ page.tsx
│ │ ├─ layout.tsx
│ │ ├─ page.tsx
│ │ ├─ transactions
│ │ │ └─ page.tsx
│ │ └─ typeDefinitions
│ │ └─ columns.tsx
│ ├─ favicon.ico
│ ├─ globals.css
│ ├─ layout.tsx
│ ├─ login
│ │ └─ page.tsx
│ ├─ page.tsx
│ └─ register
│ └─ page.tsx
├─ components
│ ├─ dashboardUI
│ ├─ header.tsx
│ ├─ sidebar.tsx
│ └─ ui
│ ├─ alert.tsx
│ ├─ avatar.tsx
│ ├─ button.tsx
│ ├─ card.tsx
│ ├─ data-table.tsx
│ ├─ dropdown-menu.tsx
│ ├─ input.tsx
│ ├─ label.tsx
│ ├─ navigation-menu.tsx
│ ├─ sheet.tsx
│ ├─ table.tsx
│ └─ tabs.tsx
├─ components.json
├─ lib
│ ├─ api
│ │ └─ request.ts
│ ├─ store
│ │ └─ useUserStore.tsx
│ └─ utils.ts
├─ middleware.ts
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│ ├─ next.svg
│ └─ vercel.svg
├─ README.md
├─ tailwind.config.ts
├─ tsconfig.json
└─ 初始价格.txt

```

```
