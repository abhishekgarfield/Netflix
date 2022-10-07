var express = require("express");
var cors = require("cors");
var app = express();
app.use(express.json());
app.use(cors());
require("dotenv").config();
var MongoClient = require("mongodb").MongoClient;
var uri = process.env.uri;
const port = process.env.Port;
console.log("in insert");

app.get("/insert", async (req, res) => {
  const client = new MongoClient(uri);
  console.log("connection made");
  try {
    await client.connect();
    const database = client.db("app-data");
    const movies = database.collection("Movies");
    const response = await movies.updateMany({show_id:2},{$set:{"video_url":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"}});
    console.log(response);
    res.send("done");
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
/* {id:23,
            show_id: 1,
            gener_id:  5,
            name: "",
            rating: "4.9",
            img_url:
              "",
            about:
              "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
            maturityrating: "U/A13+",
            duration: "2h 17m",
            generes: ["Action", "adventure"],
            cast: "Garfield,ram charan",
            "This movie is": "adrneline rush",
            Director: "Garfield",
            Writer: "Harsh",
            inner_imgurl:
              "",
            wrapper_imgurl:
              "",
          }
          */

/*
      {
        id:14,
        show_id: 1,
        gener_id:  101,
        name: "Never have i ever",
        rating: "4.9",
        img_url:
          "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZSKcLiNBNUMfcUV-zyikzqGrZ_ggmt4tg44u-wuHO6vRZ045vWFK4CR1hYh_iIfvaOFjYU8P9wPQbWPTx5QDfZs_w9pwtBTS0wHdsfRPw45ZAwgO9Hl-coMG71pHcFpvNCy.jpg?r=d94",
        about:
          "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
        maturityrating: "U/A13+",
        duration: "2h 17m",
        generes: ["Action", "adventure"],
        cast: "Garfield,ram charan",
        "This movie is": "adrneline rush",
        Director: "Garfield",
        Writer: "Harsh",
        inner_imgurl:
          "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXY85cvVdokrEJAK9ESN-gUGrnLCuHMvhEDvbQFSQqGJxr9pIK-2J_pKM4oVQuNTPhgKZa5YO0EdHT4yMy7Q2ABm5QUiJTtny6pVld0Fz7NXIov3WsZVPep4bCW3E6rFYHBgGvQAUcdbDPqEvOFzAVaFNDC5aFAEr8yDwuZ_ZQ6QLqk6MIhq.webp?r=848",
        wrapper_imgurl:
          "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd_L7KhKv-boEv-KvVaoFT3bcBwDpTm0FUNg1Gd3iMOj-2WQIqDsob8p5XUsIO0FsgpuoIXkkYFjPkC6eq9IDHRvlUFQD1IS_cqy.webp?r=ede",
      },
      {
        id:15,
        show_id: 1,
        gener_id:  101,
        name: "Mismatched",
        rating: "4.2",
        img_url:
          "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTvbC02AAdY9nBEO-VyREZUqbXhU_xj67WF63rImk1kHDtrYqugJkVIgUJOrVShDAdeRZxZvk1EGR51ZlWP1-edT8OypaoVzOHQaY15TR02OLXnBIq2FY904C_Fx5IdaCH8q.jpg?r=e20",
        about:
          "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
        maturityrating: "U/A13+",
        duration: "2h 17m",
        generes: ["Action", "adventure"],
        cast: "Garfield,ram charan",
        "This movie is": "adrneline rush",
        Director: "Garfield",
        Writer: "Harsh",
        inner_imgurl:
          "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABU0gMDKMrOxuh888THkXVrK9yD_Svt-f5rr9OMbjxPpqAlo1UNM076J9wFXtcbx4REgAWhFRuTIx8nK5J2gugF-NKIthIMhjsCZYayLMv7hKBZP7ujsYArbYjFwOoh3B-ZCgDp8swYRZkfwl1wdOyRrRsIl_yyUlSiNO60WQaYs1IqXSKlNK.webp?r=e35",
        wrapper_imgurl:
          "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeXD1suamjxGc5WEicymHkXElyvx7-RYv3w1U7jMIR4euD3eaurORn4t_veii_b4lKjhONbVFky-ThkkmCmALNIbhmvmt_bf7k7jDcZgAnqOf-6MbL3_IWW0rs8MvcevMSz7OA.jpg?r=e20",
      },
      {
        id:16,
        show_id: 1,
        gener_id:  101,
        name: "Sky is pink",
        rating: "4.9",
        img_url:
          "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXoaexPlbt5MEXVnHhqKGseu0Es6Wwt5WhWq9z9jxErXii549fBYqXpyOFb3osFtAPe68P6p8INIx0jIlrK2Ppr8-TIk4i2Z_UE.webp?r=55f",
        about:
          "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
        maturityrating: "U/A13+",
        duration: "2h 17m",
        generes: ["Action", "adventure"],
        cast: "Garfield,ram charan",
        "This movie is": "adrneline rush",
        Director: "Garfield",
        Writer: "Harsh",
        inner_imgurl:
          "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRqT4y-RJT8jvjeIMGaxfAbFN2cTd8_r0G-SiErKqL2yBpJSnv85KSg6czaZO52MbbJqrvvSoQ4-pIT7jFgBZj4OLgqrlc2jbiMnRJaGiv4.webp?r=5a9",
        wrapper_imgurl:
          "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZN2oghM_5wRyHlZ83M8-et4FE7xwOcgwEDcwTWBSqRTPcYFPs7hraaBAGQnv30b16faekl4W5uFguhb9KulhVfianVxThT5SAwU.webp?r=55f",
      },
      {
        id:17,
        show_id: 1,
        gener_id:  101,
        name: "Jogi",
        rating: "4.2",
        img_url:
          "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZtPcJREAFMKVrsEsA6GVIn1ocI_bufGBYeLXYXAueEj0iR6FdZTxwCvXRQdmKEqydapC3s3EC00Bs3Nzb4kqyDUGEwH4E43B9moRLLEteqx4BTbg-Lrv2obFgfdTFDlgegE.jpg?r=1e1",
        about:
          "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
        maturityrating: "U/A13+",
        duration: "2h 17m",
        generes: ["Action", "adventure"],
        cast: "Garfield,ram charan",
        "This movie is": "adrneline rush",
        Director: "Garfield",
        Writer: "Harsh",
        inner_imgurl:
          "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaGcBwO5HloW2G_d6OS2ioy9mBN2xoijK_xldLdkb9lKtEHvjEKv3uodzFPyNROPkqGnrT6O-MGl2_qWev-p7KFgm2ZbhYx_xpK6iU-XMd7nxUsEGJUwtxheZ3YAYIZcy6zZbh3pEBDFizq-MR-Ku-B1IWn6ZLNQAZarFf14dHUSzFOFOCHg.webp?r=b5a",
        wrapper_imgurl:
          "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfnzUg-LRHwVyR-TeYlWUF2moG_-AOTFM0fFxaFNt4Am38DSn5q0dVcSpe2_FqQb-L-VpXKUmJAYpf9bh3evVJIg1WCiX2544Dcn.webp?r=0f3",
      },
      {
        id:18,
        show_id: 1,
        gener_id:  101,
        name: "Hit",
        rating: "4.9",
        img_url:
          "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABShiZdd99lsPrvQbj8qha7xrd9lFP3bJ4pelqc6rOG5HcPsuAbxVx_Gf9o7FO7wQ4I0-7Jiw9hqv0AoTPxtjUrQfh4CdBhXMPM3hXZGoOCOmFJukt8J2iIaDueNRwJwTo2E4-Z8ELE0nCOwhyfRtfyB7OCrc6pOMv-8.webp?r=e7a",
        about:
          "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
        maturityrating: "U/A13+",
        duration: "2h 17m",
        generes: ["Action", "adventure"],
        cast: "Garfield,ram charan",
        "This movie is": "adrneline rush",
        Director: "Garfield",
        Writer: "Harsh",
        inner_imgurl:
          "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABT0XEOnycJxzyAe55qOyrv9hf4cWsIs8uWSirS1eNWZvxyGk7Uhwpfjj3RnL1ksWgEKptsGbo5ylvpPZQE3P0ojyj_7ve9CP5_FEnasjlTc.webp?r=5de",
        wrapper_imgurl:
          "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfs3BJtkWLJfYp65BxTLcxDnTijAfy8NpmHVsR8ipbQuOCPSbn5T4zKpZOp0QeV6bxF6SFx64VRCM1E6CMCMDIG2yEo5aH4eRM0hpgNqEjiJNcgPuHDYQbMsJOKc1wz7QtbDuC6HZtMB5YDwydafV_KKGAeVQcj19eNO.webp?r=e7a",
      },
      {
        id:19,
        show_id: 1,
        gener_id:  101,
        name: "Guilty",
        rating: "4.9",
        img_url:
          "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSQQIwS0hyTW96URPpcZfOukCskjwsDMp9jG_GZv7KBT0NNO1whLNKmxI-i5JiMoOeh8YPYJ1H53Laup1LnCQ_o8iC2LKCUKz4PlA6DR-ngJ2pV04XYcW8WboqNWiZ23192a.jpg?r=11d",
        about:
          "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
        maturityrating: "U/A13+",
        duration: "2h 17m",
        generes: ["Action", "adventure"],
        cast: "Garfield,ram charan",
        "This movie is": "adrneline rush",
        Director: "Garfield",
        Writer: "Harsh",
        inner_imgurl:
          "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYOHiUC0XG7MLY8DBNmHTNSlTnbmJZU8Y9nV-hesjD98suRNe6l7ddl5fHLQ406pa8gtv3EFmGCrojrwUEfOCRVyvcyfvts1VIO0Kb0KJAfBGDW6bntoyb58D1KcjCBaFFrf0xfSZOFFu4Ro8XMACCuyL4PcLZ6WNM8NfUM7H6XnpLxxPXjX.webp?r=eda",
        wrapper_imgurl:
          "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdYKpe5Dvif2u4YFp2hWEbLoxoDBMHpV4ypwsMkM9cFNHVpvVzdEVdWbXujMArMHAYlmrggAAKMyt_vRFvHcRaTuICeMzQre936UTrUwdNlQd0Eu2arpidaMl-SpuQRebNo3NQ.jpg?r=11d",
      },
      {
        id:20,
        show_id: 1,
        gener_id:  101,
        name: "Dear zindgi",
        rating: "4.9",
        img_url:
          "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbiOvWevQMh5Oe2ZUeqqCtLrXyMQ-iHE5SnKOwtHx1RNT6ONJSFqctOh2ShJEqlRU99mqmw5geKNiG_jVhkuCxRtsKAnA8ugGxM.webp?r=b77",
        about:
          "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
        maturityrating: "U/A13+",
        duration: "2h 17m",
        generes: ["Action", "adventure"],
        cast: "Garfield,ram charan",
        "This movie is": "adrneline rush",
        Director: "Garfield",
        Writer: "Harsh",
        inner_imgurl:
          "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXnw77ioIgZHqbtCu2X9TUdySgPLrJ5RqhPYNtps69_3S8jjB7iGAbK99QiBP8uV4UoEFbm2Bmkr1VW-GHlsi7ioTjmE-R5FDnMn19G-qtU.webp?r=76b",
        wrapper_imgurl:
          "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQ03CqjbvjUQ5zB9LSQgnoFhwz1qEuVIzQxMYnEn8cJnHepQW7jdkDGpnetAbU3ncj6wNaGFnz_oTRFvYPL38lE7H1KgKHHGF6QB.webp?r=e24",
      }
      */
/* {
          id:23,
          show_id: 1,
          gener_id:  5,
          name: "Plan A",
          rating: "4.9",
          img_url:
            "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcSyJRXPnIBnr8oJe1U9dzvC6y2e3AfbAppf_7i3Y5LjCjxX7100ryAe06ZEe9uIUR1OuTLEBimlypgcFEykVwq9EghEQTLyqHbiFCey_vJn9ZF1QHJ8i9EIPDx1kZEjRb_z8ZdHI7vKKbxn_wVCUGg92Q5ScSQSDjCUMguNlANnIVAdHDtPJwsf8LORmWE.jpg?r=963",
          about:
            "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
          maturityrating: "U/A13+",
          duration: "2h 17m",
          generes: ["Comedy", "adventure"],
          cast: "Garfield,ram charan",
          "This movie is": "adrneline rush",
          Director: "Garfield",
          Writer: "Harsh",
          inner_imgurl:
            "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUh9Hp3TPSIiKcNFtn-LipkI2cEnh9j59_oSzQhkU3KsSVuqHhPRvjqmYC4IHoOgppP9NbKKOztpoMvqDeqKuw2ES9uOvCyjpOJQ2pgWII1Em4E1Ac7CbxNa6Uduw7qqDgACHTQkaU6rPwzL3I4dXhkBNQc8aAzfsq6THIJKIN0ix2N0QmwK.webp?r=bcf",
          wrapper_imgurl:
            "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABa3oXcR0xH6P0S5nVpfNQapA_F6zw8A6kstl0xUO7WBtOoBy4_5Ji1SMWtBDwOCHyXEdTcNHv1_vgVmM9A4cMwvmqt85j3MRZrmy.webp?r=5fa",
        },
        {
            id:24,
            show_id: 1,
            gener_id:  5,
            name: "jamatra",
            rating: "4.9",
            img_url:
              "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVbv6ZLCHnjRbqIZBSNt634880qvNkR0niR2BGqvLuoePCwhIVDd3xInQkGefxyJXemQQuPNg2Y8X9mNlt37HophytdyQJx8NUKYK2X-pMDbItCC70w-hxfWQFGXwSDe4_rEzVnZ66cKPauOa6sVY30J4dEJOiaY9K2Bz0H1phHSh40wVznPo_CdxDTC4VBiUr6ZuB8Qvh6o3J6EOOwOKfgZoiOMdy4WVML75wyYxxeLCSGoEkGsM2L4meG5gGvQO4RkFmGe13FtimAIzvPDLi699BeZQ5NxR33PmwkEV8KHIxqR1gbockqGgH9yHUSQLBCE-50dMeLLpIC8kwI.jpg?r=221",
            about:
              "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
            maturityrating: "U/A13+",
            duration: "2h 17m",
            generes: ["Comedy", "adventure"],
            cast: "Garfield,ram charan",
            "This movie is": "adrneline rush",
            Director: "Garfield",
            Writer: "Harsh",
            inner_imgurl:
              "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbWKDPgOYuQOgWq5AeCMpashEW-SKpbg8uxYw5HVCcqhIZdMb2ZU-8YVjlWnHAAmsoDs-EsLumLtxzcnL3Rx2I7PoHSkSL6DJ3dXoUpkRfRWyiReh9j4c8LDXs6B1jwzLNtOrsRlXrt_yY0xuC5_5H7nzg3c52JLPDzAeOR9JiaOh68_5_Zd.webp?r=8a6",
            wrapper_imgurl:
              "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSZ55YSFLKRK-kSuPWXS9OEuN7Zxlo264AopG273yWkwRzorJ-Ti2oDl_cbVD_xtnKW6uF8iyvsAKrdFGKS-Umcno3RMexdCclfO.webp?r=ef2",
          },
          {
            id:25,
            show_id: 1,
            gener_id:  5,
            name: "dobaara",
            rating: "4.9",
            img_url:
              "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTXhpR1i31XuBi9aFPQkefCotstk53mBdg1DVHSHNX1o3OVnG4cKnYsjZ09MBXjB8G6W3NZoU_DEl3r5NWXC5JKOs-i9vQwKl6E.webp?r=feb",
            about:
              "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
            maturityrating: "U/A13+",
            duration: "2h 17m",
            generes: ["Comedy", "adventure"],
            cast: "Garfield,ram charan",
            "This movie is": "adrneline rush",
            Director: "Garfield",
            Writer: "Harsh",
            inner_imgurl:
              "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABX5cQpQfgrAefY1u5jDXHJlgihj6izgo9pysg2cVFU5YybhjFVrpohKCrNdHhRZZSg4MnRux5dSGVtoQIUIAqckz4GePZhCQLaZdufCQw2s.webp?r=798",
            wrapper_imgurl:
              "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbr0p56epC9JdMEBHXuOe52q05bHW7Y96Stxw7rMzhtHm0vH9G80n2VpoSknwjm6HHcKv5uZ1NxZl2E39Lo8ARUOS_h4yF58yuX-.webp?r=2eb",
          },
          {
            id:26,
            show_id: 1,
            gener_id:  5,
            name: "School",
            rating: "4.9",
            img_url:
              "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeeiPf-mLSl5ytYOsDglFyh7oFdfcfANaCHq0jWtRu8d5aq14RY_P5dm-AZ24eNzWqs0TkVkwrnf-B3GVMaLTp936xFAKRVsrIvIbIvkYppbtnFNUve-5KqVX7FN7joTMLpv.jpg?r=606",
            about:
              "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
            maturityrating: "U/A13+",
            duration: "2h 17m",
            generes: ["Comedy", "adventure"],
            cast: "Garfield,ram charan",
            "This movie is": "adrneline rush",
            Director: "Garfield",
            Writer: "Harsh",
            inner_imgurl:
              "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZASI2xaSTg_3ffhAmWcUPRYJ2og-KDgh1PP8a8S-wfnqD_6nEtJ_8_ll71zE_XA-IIyNVvuhbtc9yg9Sv47bxeSCS4MG-qNaCmyTn3NgomI3Y8srVBkO12h68whFjxPbMlVvynFDMrF7Et17X7NRIDTuo9TnTlDK0VbT0ZvEkZM5p98gh-H.webp?r=340",
            wrapper_imgurl:
              "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABaP2LAVTE1OYV9za7bffNfLHZ9KQo4Ox_X9QOUCwUqtULHORsZcEz1RiKJTOTBRZsEAIyWHgBzO2DLDVgYID8lhrSPTmFAQOPrgg.webp?r=698",
          },
          {
            id:27,
            show_id: 1,
            gener_id:  5,
            name: "Curse",
            rating: "4.9",
            img_url:
              "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcL3wU3Ff8ZLDobTd5ZkeN6hzh-Dz6Op5hskok8CcXQfBRwi4tQlloaYM9ePUQWvH5-VlPD-cSkvVbrFzGwwe69gcUtIvB0Jz3dEN3n9I8fY07iP8ck7lnCc-7mmwji4V1Zi.jpg?r=f85",
            about:
              "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
            maturityrating: "U/A13+",
            duration: "2h 17m",
            generes: ["Comedy", "adventure"],
            cast: "Garfield,ram charan",
            "This movie is": "adrneline rush",
            Director: "Garfield",
            Writer: "Harsh",
            inner_imgurl:
              "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfrcuTBuqtCsxY4DCvKZ4N9V_T-Bx252JG7UbpvzoH0U51mQU70831GaLtPi19IhL4x6NaAhSik6T3WHrFZpsMCvf0_4AsOg7-lR9JLTVyL0qBb-ks8db_KvW5eLEzePIqVuhkeij6GNlat0YbKgxdOOloN372Lsl2_b7mZxf-hbS4aMptOu.webp?r=d52",
            wrapper_imgurl:
              "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSO4ZyFwipXCoDeZLrxafzRXfpGNlomzFCjaYuFDm6Wl-0g4Zom9zrN1uyOS40wmIn4PlO8gGfxE7nPiu5w0g9HYhIi5SxQFlfeD.webp?r=b55",
          },
          {
            id:28,
            show_id: 1,
            gener_id:  5,
            name: "Money hiest",
            rating: "4.9",
            img_url:
              "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWVH7VOsPUHNhhS2fpOR0Q9CT61JP4KK83LPof2Tkdq_NUBPDczqPDh75kws7IoqUzyWxuG9w7Mb-Z-HdqjkkHVvq7ncExexwnRP6R_GyxxXEPmH4lHn7U45_28a807lrR8-.jpg?r=a1a",
            about:
              "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
            maturityrating: "U/A13+",
            duration: "2h 17m",
            generes: ["Comedy", "adventure"],
            cast: "Garfield,ram charan",
            "This movie is": "adrneline rush",
            Director: "Garfield",
            Writer: "Harsh",
            inner_imgurl:
              "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABQwslcjXqMzUnrZkH24HLXBq0J_gOGR0hxStCT5Bj6F8G_Ya6s-LaFFyVaqPFhX8cSFXJZZ9QlpJVq0ri6geN8Pr9FSDT2z5UYXN1cUxYcjp73BMOENCeeNqauN9AVy_Ab7yZzsoRt0R6oNFVD0jCUfYflKnuzGLgAcinaRDP0nlunTSbp-k.webp?r=a1a",
            wrapper_imgurl:
              "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZRJUOijr5fgV2mO9k9GxiH1nWohiFJhkmordkUFEiNR7wFjrTuy0s8kL38fJNmsFquRDBH8E7W1g1yYP-OqGvy4FAGsHMvDUDp5.webp?r=b1f",
          },
          {
            id:29,
            show_id: 1,
            gener_id:  5,
            name: "The witcher",
            rating: "4.9",
            img_url:
              "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRFIQrMmKLwJ0p9SsYWxR5jyp2rgPAEZBEfXzriXhzgkaqGKzBgc5XpftEebOLwak9MfH4ca8vyDtIYdmuEb6vwlHtThvaRShzK85kNWvG93x7Z7cJnnWWRplDeoXp-qQVkr.jpg?r=297",
            about:
              "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
            maturityrating: "U/A13+",
            duration: "2h 17m",
            generes: ["Comedy", "adventure"],
            cast: "Garfield,ram charan",
            "This movie is": "adrneline rush",
            Director: "Garfield",
            Writer: "Harsh",
            inner_imgurl:
              "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfkDr8AX_779c2eY3IENktI1zMD3eG4flu8RycabMSY6dH2v_FFSzMcbng_mdEQQrd48L7QDvqBFDgtBWN9j6HW8tkkowmSeL93FKMRhKRy84kveWpM7DDnvlzYbU5gM6nkiepbQXxYJ8eRCc0miU4ew1DhVLwsWEqWoU1N1AZo_y_zVYPbg.webp?r=52a",
            wrapper_imgurl:
              "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABatLV7Da_o0-i87r-Vc0leWUacFXCJDGF5vOaHCEReeryPlhApqooOLW2utazr05ReXtbWelEzcXeQZxrg-XTfKk2j_RKADeRKws.webp?r=14f",
          },
          {
            id:30,
            show_id: 1,
            gener_id:  5,
            name: "Exception",
            rating: "4.9",
            img_url:
              "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdRkARQ9Tdqg_WEaCVUeS-qWOmIrVgrSBqNE8SYxd0MQBuxIFWjmSJsmIZj6PW3YbKmI59zMS-Nhn-EcaSKSPNKvFqmVKVqi6udXUIshQCY7aqfSKhy5ustro2ocKVeWEL_t.jpg?r=5cc",
            about:
              "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
            maturityrating: "U/A13+",
            duration: "2h 17m",
            generes: ["Comedy", "adventure"],
            cast: "Garfield,ram charan",
            "This movie is": "adrneline rush",
            Director: "Garfield",
            Writer: "Harsh",
            inner_imgurl:
              "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbtq5QEKSnzo2aelfZ4VO9qp07ylUlMjsyHc2AKsTi6JWGHQvouIAVxfjKxtp0UwVfW1eF9iXEDLurwxljfTZZHzwSdo3e08Eec-OUtxqFf5EPAJoR8dH4kI_6o_trzdLB8zv8c9NvtRS27hi_6flORCb2nPeRtIg_npFNtkyRDL_issTngY.webp?r=1bf",
            wrapper_imgurl:
              "https://occ-0-3213-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABR6wuxkdg2eSg4S68ExuortH_--0B_AZxBo8K_p9Sv-jEsFzjyDebrLQxCSgbiznQQZajlemmo2u1mH_L5peQImahetCaftBrwbf.webp?r=a32",
          }
         */
