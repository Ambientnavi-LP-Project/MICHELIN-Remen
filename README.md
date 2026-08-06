# King Wagyu Ramen（ミシュラン監修・ハラール）— 店舗ページ

Eleventy(11ty)製の静的サイト。テンプレート1枚 + 店舗データから、全店舗ページを自動生成する。

ドメイン: `michelin-ramen.halal-food-wagyu.com`
GTMコンテナID: `GTM-5DGT9H6L`（GA4への送信はGTM側で設定）

---

## ディレクトリ

| ファイル / フォルダ | 役割 |
|---|---|
| `src/_data/stores.js` | **店舗データ。基本ここだけ編集すればOK**（3店舗） |
| `src/_data/stores.source.json` | 元データ。`stores.js` を組み立てるための素材 |
| `src/store.njk` | 店舗ページのひな型（全店舗で共通） |
| `assets/` | 写真。そのまま `_site/assets/` にコピーされる |
| `eleventy.config.js` | ページ生成の設定 |
| `vercel.json` | 公開設定・ドメインごとのリライト |
| `index.html`（リポジトリ直下） | Eleventy の入力は `src/` のため、**このファイルは公開されない**（作業時の参考用） |

`store.njk` は1枚しかない。**店舗が増えてもページを作る必要はなく、`stores.js` にデータを足すだけ**。
逆に言うと、`store.njk` を1か所直すと**全店舗のページが同時に変わる**。

生成されるページ:

| 店舗 | URL |
|---|---|
| 難波（King Wagyu Ramen） | `/osaka/namba/` |
| 先斗町1（King Wagyu Ramen） | `/kyoto/ponto1/` |
| 先斗町2（King Wagyu Burger） | `/kyoto/ponto2/` |

## ローカルで動かす

```bash
npm install       # 初回のみ
npx @11ty/eleventy --serve   # → http://localhost:8080/osaka/namba/
npx @11ty/eleventy           # 本番ビルド → _site/
```

本番は Vercel が `main` への push を検知して自動ビルド・配信する。

---

## 計測イベント一覧

このLPで実際に実装しているイベント。
計測は **GTM コンテナ `GTM-5DGT9H6L`** 1本に集約している。

| イベント名 | 発火する場所 | 実装 |
|---|---|---|
| `reserve_click` | ヘッダー「Reserve」／ヒーローCTA／予約セクション／下部固定バー／右下の追従ボタン（計5か所。**`tablecheck_url` を入れた店舗でのみ**） | `data-ga-event="{{ resEvent }}"` |
| `tel_click` | 店舗情報の電話番号リンク。加えて、`tablecheck_url` が空の店舗では上記の予約CTA5か所も電話リンクになるため `tel_click` として計測される | `data-ga-event="tel_click"` / `{{ resEvent }}` |
| `map_click` | 店舗情報の住所リンク／地図下のボタン（Googleマップへの外部リンク） | `data-ga-event="map_click"` |
| `scroll_depth` | ページのスクロール到達率 | GTM組み込みトリガー（コード実装なし） |

### 仕組み

計測方式は **1つだけ**。計測したい要素に `data-ga-event="イベント名"` を付けると、
ページ末尾の委譲リスナー1本が `dataLayer` に push する。

```js
window.dataLayer.push({ event: el.getAttribute('data-ga-event') });
```

店舗名・エリアなどの**パラメータはコード側で組み立てない**。
GTM 側で URL（ホスト名／パス）から解決する。
そのため `stores.js` に店舗を追加しても、計測用の設定を書き足す必要はない。

予約CTAだけはイベント名が動的（`resEvent`）になっている。
`tablecheck_url` が入っていれば `reserve_click`、空で電話リンクにフォールバックしたときは
`tel_click` を送る。予約サイトへの遷移と電話発信を取り違えないための切り替え。

### 実装していないもの

- **地図の埋め込み（iframe）**は計測対象外。ブラウザの仕様上、iframe 内部のクリックは
  親ページの JavaScript では検知できない。地図の反応は住所リンクと地図下のボタンで見る。
- `outbound_click` は外部SNSリンク用だが、このLPには Instagram 等のリンクがない。
- `reservation_form_submit` / `final_check_view` は自社予約フォームを使うLP用。
  このLPは TableCheck への外部遷移のみのため対象外。
- `course_select` はコース選択UIがあるLP用。このLPのコース欄は一覧表示のみで選択操作がない。

---

## 店舗データ（`src/_data/stores.js`）

| フィールド | 内容 |
|---|---|
| `slug` / `region` | ページのURLになる（`/{region}/{slug}/`） |
| `reserve_system` | 予約導線の種類（`"tablecheck"` / `"form"`） |
| `tablecheck_url` | TableCheckの予約URL。空なら予約ボタンが電話リンクになる |
| `tel_display` / `tel_raw` | 表示用の電話番号 / タップ発信用（`+` 抜きの `81…` 形式。njk側で `tel:+` を付ける） |
| `maps_link` | Googleマップの共有URL（`https://maps.app.goo.gl/...`） |
| `maps_embed` | 地図の埋め込みURL（`<iframe>` の `src=` の中身だけ。タグごと貼らない） |

`brand` に GA4 測定ID（`ga4_id`）は持たない。GA4への送信は GTM 側で設定する。
