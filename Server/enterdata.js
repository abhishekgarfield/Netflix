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
    const response =await  movies.insertMany([
        
      
    ]);
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

/*
      {
        id:14,
        show_id: 2,
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
        show_id: 2,
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
        show_id: 2,
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
        show_id: 2,
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
        show_id: 2,
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
        show_id: 2,
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
        show_id: 2,
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
