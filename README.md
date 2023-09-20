[![platform](https://img.shields.io/badge/platform-Node--RED-red)](https://nodered.org)
[![npm](https://img.shields.io/npm/v/node-red-contrib-simple-chatgpt-instruct.svg)](https://www.npmjs.com/package/node-red-contrib-simple-chatgpt-instruct)
[![downloads](https://img.shields.io/npm/dt/node-red-contrib-simple-chatgpt-instruct.svg)](https://www.npmjs.com/package/node-red-contrib-simple-chatgpt-instruct)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/HaroldPetersInskipp/node-red-contrib-chatgpt/blob/main/LICENSE)

## 概要
ChatGPTのgpt-3.5-turbo-instructで余計な会話をせず、一発回答できるモデルを使用したやり取りが可能です。
メリットとしては、プロンプトの言う事をより聞いてくれるようになります。

## インストール

```
npm i node-red-contrib-simple-chatgpt-instruct
```

or

AdminタブからInstall

## 使い方
### 入力項目

|項目|説明|
|--|--|
|payload|プロンプトを指定します。文章の最後に句読点をしっかりつけることがポイントです。|
|OpenAI API Key|OpenAPIのAPIキーを設定します。|
|Model|モデル名を設定します。省略すると`gpt-3.5-turbo-instruct`が使われます。|
|MaxLength|返答トークンの最大値を設定します。デフォルトは256です。4096まで設定可能。|

### 出力項目

|項目|説明|
|--|--|
|payload|プロンプト実行結果が返ってきます。|


## LINK

* [NodeRED](https://flows.nodered.org/node/node-red-contrib-simple-chatgpt-instruct)
* [Libraries.io](https://libraries.io/npm/node-red-contrib-simple-chatgpt-instruct)
* [npm](https://www.npmjs.com/package/node-red-contrib-simple-chatgpt-instruct)

## release

* 2023/09/20: 初回リリース（v1.0.0）

