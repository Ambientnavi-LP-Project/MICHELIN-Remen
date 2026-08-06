/**
 * 店舗データ定義
 * 新しい店舗を追加するときは、この配列に store オブジェクトを追加するだけ。
 * Eleventy が自動で /{region}/{slug}/index.html を生成します。
 */
module.exports = {
  brand: {
    // 業態(サブドメイン)レベルの共通設定
    domain: "michelin-ramen.halal-food-wagyu.com",
    // GA4への送信はGTMコンテナ(GTM-5DGT9H6L)側で行うため、ここに測定IDは持たない
    brand_name: "Michelin Ramen",
    brand_slug: "michelin-ramen"
  },
  stores: [
    {
      // ===== URL / 識別 =====
      region: "osaka",
      slug: "namba",
      pref: "Osaka",
      // ===== 店名 =====
      name_full_en: "King Wagyu Ramen Michelin Chef Supervised Halal Dotonbori Restaurant 米其林厨师监督和牛拉面",
      name_short: "King Wagyu Ramen",
      name_cn: "米其林厨师监督和牛拉面",
      name_meta: "King Wagyu Ramen · Dotonbori · Halal",
      // ===== 立地 =====
      city: "Dotonbori",
      station_en: "Namba Station",
      station_jp: "難波駅",
      address_en: "Parkland Building 1F, 2-1-3 Dotonbori, Chuo-ku, Osaka-shi, Osaka",
      address_postal: "542-0071",
      // ===== 連絡先 =====
      tel_display: "070-2388-4392",
      tel_raw: "817023884392",
      email: "",
      // ===== 営業 =====
      hours: "10:00 – 23:00",
      hours_short: "10–23",
      hours_note: "",
      hours_special: "",
      // ===== 席・施設 =====
      seats: "31 seats",
      seats_note: "",
      facilities_main: "Halal-friendly menu · Takeout available · Free Wi-Fi",
      facilities_sub: "Child-friendly · Stroller accessible · Non-smoking · Cashless only",
      payment_note: "Cashless only — credit cards and mobile payments accepted",
      // ===== 予約・SNS =====
      reserve_system: "tablecheck",  // "tablecheck" | "form"
      tablecheck_url: "https://www.tablecheck.com/shops/halal-wagyu-namba/reserve",
      instagram_url: "",
      instagram_handle: "",
      // ===== 評価 =====
      rating: "",
      rating_count: "",
      // ===== Maps =====
      maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3913.8017817583786!2d135.4956783!3d34.6688229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e7b16b2c66cf%3A0x545100087d563061!2zV2FneXUgKEhhbGFsKSBSYW1lbiBOb29kbGUgRG90b25ib3JpIE5hbWJhIFJlc3RhdXJhbnQg5ZKM54mbIOmBk-mhv-WggCDmi4npnaIg6aSQ5Y6F!5e1!3m2!1sja!2sjp!4v1779956693320!5m2!1sja!2sjp",
      maps_link: "https://maps.app.goo.gl/Sp9i9PtFMNCSGmK66",
      // ===== Hero image =====
      hero_image: "/assets/ramen1.jpg",
      // ===== Menu (course-only) =====
      courses: [
        {
          name: "Gold",
          kanji: "金",
          items: [
            "Three appetisers",
            "Salmon &amp; avocado, instant-smoked",
            "Seared wagyu belly with caviar",
            "Wagyu bone broth ramen — Shio",
            "Dessert"
          ]
        },
        {
          name: "Platinum",
          kanji: "白 金",
          items: [
            "Three appetisers",
            "Salmon &amp; avocado, instant-smoked",
            "Seared wagyu belly with caviar",
            "Wagyu bone broth ramen (choice of two: Shio / Spicy)",
            "Dessert"
          ]
        }
      ]
    },
    {
      // ===== 先斗町 1F ラーメン =====
      region: "kyoto",
      slug: "ponto1",
      pref: "Kyoto",
      name_full_en: "Michelin Chef Supervised King Wagyu Ramen Halal kawaramachi Restaurant 米其林厨师和牛拉面",
      name_short: "King Wagyu Ramen",
      name_cn: "米其林厨师和牛拉面",
      name_meta: "King Wagyu Ramen · Kawaramachi · Halal",
      city: "Kawaramachi",
      station_en: "Kyoto-Kawaramachi Station",
      station_jp: "京都河原町駅",
      address_en: "1F, 191-6 Shimokoroginocho, Nakagyo-ku, Kyoto-shi, Kyoto",
      address_postal: "604-8016",
      tel_display: "080-6295-0185",
      tel_raw: "818062950185",
      email: "",
      hours: "11:00 – 23:00",
      hours_short: "11–23",
      hours_note: "",
      hours_special: "",
      seats: "26 seats",
      seats_note: "",
      facilities_main: "Halal-friendly menu · Takeout available · Free Wi-Fi",
      facilities_sub: "Child-friendly · Stroller accessible · Non-smoking · Cashless only",
      payment_note: "Cashless only — credit cards and mobile payments accepted",
      reserve_system: "tablecheck",  // "tablecheck" | "form"
      tablecheck_url: "https://tablecheck.com/halal-wagyu-kyoto-ponto",
      instagram_url: "",
      instagram_handle: "",
      rating: "",
      rating_count: "",
      maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d258.76986886319463!2d135.7708999!3d35.0067013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600109c9039961c7%3A0x743dd3d5c9a19407!2zV2FneXUgUmFtZW4gTm9vZGxlIEhhbGFsIFBvbnRvIFJlc3RhdXJhbnQg5Lqs6YO9IOWFiOaWl-eUuiDlkozniZsg5ouJ6Z2iIOmkkOWOhQ!5e1!3m2!1sja!2sjp!4v1782965175740!5m2!1sja!2sjp",
      maps_link: "https://maps.app.goo.gl/vp98uvqiAwSErjKa8",
      hero_image: "/assets/ramen1.jpg",
      courses: [
        {
          name: "Gold",
          kanji: "金",
          items: [
            "Three appetisers",
            "Salmon &amp; avocado, instant-smoked",
            "Seared wagyu belly with caviar",
            "Wagyu bone broth ramen — Shio",
            "Dessert"
          ]
        },
        {
          name: "Platinum",
          kanji: "白 金",
          items: [
            "Three appetisers",
            "Salmon &amp; avocado, instant-smoked",
            "Seared wagyu belly with caviar",
            "Wagyu bone broth ramen (choice of two: Shio / Spicy)",
            "Dessert"
          ]
        }
      ]
    },
    {
      // ===== 先斗町 2F バーガー =====
      region: "kyoto",
      slug: "ponto2",
      pref: "Kyoto",
      name_full_en: "King Wagyu Burger Michelin Chef Supervised Halal Kyoto Restaurant 米其林厨师监督和牛汉堡",
      name_short: "King Wagyu Burger",
      name_cn: "米其林厨师监督和牛汉堡",
      name_meta: "King Wagyu Burger · Kyoto · Halal",
      city: "Kyoto",
      station_en: "Kyoto-Kawaramachi Station",
      station_jp: "京都河原町駅",
      address_en: "2F, 191-6 Shimokoroginocho, Nakagyo-ku, Kyoto-shi, Kyoto",
      address_postal: "604-8016",
      tel_display: "080-6295-0185",
      tel_raw: "818062950185",
      email: "",
      hours: "11:00 – 23:00",
      hours_short: "11–23",
      hours_note: "",
      hours_special: "",
      seats: "26 seats",
      seats_note: "",
      facilities_main: "Halal-friendly menu · Takeout available · Free Wi-Fi",
      facilities_sub: "Child-friendly · Stroller accessible · Non-smoking · Cashless only",
      payment_note: "Cashless only — credit cards and mobile payments accepted",
      reserve_system: "tablecheck",  // "tablecheck" | "form"
      tablecheck_url: "https://tablecheck.com/halal-wagyu-kyoto-ponto",
      instagram_url: "",
      instagram_handle: "",
      rating: "",
      rating_count: "",
      maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8280.634467488455!2d135.7710374!3d35.00671450000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600109f8ec8e546d%3A0xb4bace007b0c3c15!2zV2FneXUgSGFsYWwgSGFtYnVyZ2VyICYgU3RlYWsgUG9udG8gUmVzdGF1cmFudCDkuqzpg70g5YWI5paX55S6IOWSjOeJmyDppJDljoU!5e1!3m2!1sja!2sjp!4v1782965146512!5m2!1sja!2sjp",
      maps_link: "https://maps.app.goo.gl/1epzSeQYAjDMo73y9",
      hero_image: "/assets/burger-shoyu.jpg",
      gallery_images: [
        { img: "/assets/burger-teriyaki.jpg", label: "Teriyaki aurora" },
        { img: "/assets/burger-shoyu.jpg", label: "Burnt soy" }
      ],
      courses: [
        {
          name: "Gold",
          kanji: "金",
          items: [
            "Three appetisers",
            "Salmon &amp; avocado, instant-smoked",
            "Seared wagyu belly with caviar",
            "Wagyu burger — Teriyaki aurora sauce",
            "Dessert"
          ]
        },
        {
          name: "Platinum",
          kanji: "白 金",
          items: [
            "Three appetisers",
            "Salmon &amp; avocado, instant-smoked",
            "Seared wagyu belly with caviar",
            "Wagyu burger (choice of two: Teriyaki aurora / Burnt soy)",
            "Dessert"
          ]
        }
      ]
    }
  ]
};
