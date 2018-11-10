package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.returnmodel.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Controller
public class ReaderController {

    @RequestMapping(value = "book/reader.do")
    public String reader() {
        return "reader";
    }

    @RequestMapping(value = "activity/popup.json", method = RequestMethod.GET)
    @ResponseBody
    public PopupActivityResult popup() {
        PopupActivityResult result = new PopupActivityResult();
        ActivityModel model = new ActivityModel();
        model.setId("");
        model.setImageUrl("");
        model.setTargetUrl("");
        model.setVip(false);
        result.setActivity(model);
        return result;
    }

    @RequestMapping(value = "book/info.json", method = RequestMethod.GET)
    @ResponseBody
    public BookInfoResult info(@RequestParam(value = "sourceUuid") String sourceUuid,
                               @RequestParam(value = "articleUuid") String articleUuid) {
        BookInfoResult result = new BookInfoResult();
        BookInfoModel model = new BookInfoModel();
        model.setAuthor("zl");
        model.setBeautyFlag(1);
        model.setBookStatus(1);
        model.setCategory("jxh");
        model.setClickCount("123万");
        result.setBook(model);
        result.setProgress("np_JSg5KM1Aiib68jMgK2N_xBCNcv37PicqPnvPRYx1r69VJQ");
        result.setForceAutoPurchase(0);
        return result;
    }

    @RequestMapping(value = "trade/pending.json", method = RequestMethod.GET)
    @ResponseBody
    public TradePendingResult pend() {
        TradePendingResult result = new TradePendingResult();
        result.setAutoPurchase(-1);
        result.setHongbao("0");
        result.setBalance("0");
        return result;
    }

    @RequestMapping(value = "book/content.json", method = RequestMethod.POST)
    @ResponseBody
    public BookContentResult content(@RequestParam(value = "sourceUuid") String sourceUuid,
                                     @RequestParam(value = "articleUuid") String articleUuid,
                                     @RequestParam(value = "forceFollow") int forceFollow,
                                     @RequestParam(value = "isContinue") int isContinue) {
        BookContentResult result = new BookContentResult();
        BookNavBarModel model = new BookNavBarModel();
        model.setNextChapter("np_ciduK8xIjSX8_W9wK24kzknYcqmqaXR5airORd5--_xVJQ");
        CurrentChapterBean bean = new CurrentChapterBean();
        model.setCurrentChapter(bean);
        bean.setArticleUuid("np_Iy9sfMQV2yGh_m8mK2MlmEnXf_z8Pyktay6eQY11rfxVJQ");
        bean.setGrade(1);
        bean.setLeaf(true);
        bean.setNeedPay(false);
        bean.setPaid(false);
        bean.setTitle("周瑜的小黄书");
        bean.setPrice(0);
        bean.setSourceUuid("np_Iy9sfMQV2yGh_m8mK2MlmEnXf_z8Pyktay6eQY11rfxVJQ");

        result.setBookNavBar(model);
        result.setContent(content());
//        result.setContent("PGRpdiBjbGFzcz0iZy1ib29rIj4gCiA8ZGl2IGNsYXNzPSJtLW1iIj4gCiAgPGRpdiBjbGFzcz0ibS1jb250ZW50Ij4gCiAgIDxoMT48c3Bhbj7nrKwwMDHnq6A8L3NwYW4+PC9oMT4gCiAgIDxwPuS9nOS4uuS4gOWQjeWmh+enkeeUt+WMu+eUn++8jOaIkeW5s+aXtuS8muaOpeW+heW9ouW9ouiJsuiJsueahOeXheS6uu+8jOS9huS4h+S4h+ayoeaDs+WIsO+8jOaIkeS8muWcqOaIkeeahOWmh+enkeiviuWupOmBh+WIsOaal+aBi+WkmuW5tOeahOWls+S6uuOAgjwvcD4gCiAgIDxwPumCo+Wkqe+8jOato+WAvOS4gOWcuueni+mbqOi/h+WQjuOAgjwvcD4gCiAgIDxwPuKAnOWPq+S4i+S4gOS9jeOAguKAneeci+WujOS6huS4pOS4queXheS6uuWQju+8jOaIkeWQqeWSkOaKpOWjq+mBk+OAgumaj+WNs+WOu+a0l+aJi+OAgjwvcD4gCiAgIDxwPui9rOi6q+eahOaXtuWAme+8jOeXheS6uuW3sue7j+WdkOWcqOS6huaIkeWKnuWFrOahjOeahOWvuemdouS6hu+8jOS9huaYr++8jOaIkeeahOi6q+S9k+WNtOWcqOaIkeeci+ingeWlueeahOmCo+S4gOWIu+WPmOaIkOS6huefs+WMlueahOeKtuaAgeOAgjwvcD4gCiAgIDxwPuKAnOi1teaipuiVvu+8n+KAnTwvcD4gCiAgIDxwPuKAnOWGr+eske+8geaAjuS5iOS8muaYr+S9oO+8n+KAneWlueS5n+iupOWHuuS6huaIkeOAgjwvcD4gCiAgIDxwPuWluee+juS4veiEuOS4iueahOaDiuiutuOAgeasouaEieeahOihqOaDhemhv+aXtueJteWKqOS6huaIkeeahOelnue7j++8jOaIkeW8gOWPo+mXrumBk++8jOKAnOi1teaipuiVvu+8n+aIkeS4jeaYr+WcqOWBmuaipuWQp++8n+KAnTwvcD4gCiAgIDxwPuKAnOWGr+eske+8jOS9oOaAjuS5iOS8muW9k+Wmh+S6p+enkeWMu+eUn++8n+KAneWlueWNtOWcqOmXruaIke+8jOiEuOS4iuW3sue7j+WHuueOsOS6huWwtOWwrOeahOihqOaDheOAgjwvcD4gCiAgIDxwPiDmiJHnn6XpgZPvvIzmiJHlj6/kuI3og73nu5noh6rlt7HnmoTlpbPlkIzlrabnnIvnl4XvvIzlhrXkuJTlpbnov5jmmK/miJHnmoTmoqbkuK3mg4XkurrjgILmiJHkuI3mg7PnoLTlnY/oh6rlt7Hlv4PkuK3nmoTpgqPku73nvo7lpb3jgILkuo7mmK/miJHmnJ3lpbnnrJHkuobnrJHvvJrigJzmiJHluKbkvaDljrvorqnpmpTlo4HnmoTljLvnlJ/mo4Dmn6XlkKfjgILlpbPljLvnlJ/jgILigJ08L3A+IAogICA8cD7lpbnpmo/ljbPnq5nkuobotbfmnaXvvIzigJzosKLosKLjgILigJ08L3A+IAogICA8cD7nnIvmnaXlpbnkuZ/kuI3mhL/mhI/orqnmiJHnu5nlpbnnnIvnl4XvvIzmr5Xnq5/miJHku6zmm77nu4/mmK/lkIzlrabvvIzlpKflrrblpKrnhp/kuobvvIzlpoLmnpzmiJHnu5nlpbnnnIvnl4XnmoTor53lj6rog73nu5nmiJHku6zlj4zmlrnluKbmnaXlsLTlsKzjgII8L3A+IAogICA8cD7miorlpbnkuqTnu5nkuobpl6jor4rkuIDkvY3lia/mlZnmjojlkI7miJHlm57liLDkuoboh6rlt7HnmoTor4rlrqTvvIzlv4Pph4znjJvnhLblnLDpmr7lj5fotbfmnaXigJTigJTlpbnnu5PlqZrkuobvvJ/kuI3nhLbnmoTor53mgI7kuYjkvJrliLDov5nph4zmnaXnnIvnl4XvvJ88L3A+IAogICA8cD7igJzmiJHor7fkvaDlkIPppa3lkKfjgILigJ3lpbnnnIvlrozkuobnl4XvvIzov4fmnaXpgoDor7fmiJHjgII8L3A+IAogICA8cD7igJzmiJHor7fkvaDlkKfjgILigJ3miJHmgKXlv5nor7TpgZPvvIzlv4Pph4zkuI3nlLHnmoTlho3mrKHmv4DliqjotbfmnaXjgII8L3A+IAogICA8cD7igJzkuZ/ooYzvvIzosIHorqnkvaDmmK/nlLfnmoTlkaLvvJ/igJ3lpbnnrJHpgZPjgII8L3A+IAogICA8cD7pgqPkuIDliLvvvIzmiJHlj5HnjrDlpbnkvp3nhLblpoLlkIzku6XliY3pgqPmoLfnmoTnvo7kuL3vvIzkuI3ov4flnKjlpbnnmoTohLjkuIrkuZ/nlZnkuIvkuobkupvorrjlsoHmnIjnmoTnl5Xov7njgII8L3A+IAogICA8cD7ljrvppa3lupfnmoTot6/kuIrvvIzotbXmoqbolb7pl67miJHvvJrigJzmiJHmjILlj7fnmoTml7blgJnmgI7kuYjmsqHmnInnnIvliLDkvaDnmoTlkI3lrZfvvJ/igJ08L3A+IAogICA8cD7miJHkuI3lpb3mhI/mgJ3lnLDlm57nrZTpgZPvvJrigJzlm6DkuLrmiJHlj6rmmK/kuIDlkI3mma7pgJrnmoTljLvnlJ/vvIzopoHlia/mlZnmjojku6XkuIrnmoTljLvnlJ/miY3kvJrlnKjmjILlj7flpITmnInlkI3lrZfjgILigJ08L3A+IAogICA8cD7igJzkvaDlt6XkvZzlh6DlubTkuobvvJ/igJ3lpbnpl67pgZPjgII8L3A+IAogICA8cD7igJzmiY3kuIrnj63vvIzku4rlubTliJrliJrnoZXlo6vmr5XkuJrjgILmiY3ljrvogIPkuobkuLvmsrvljLvluIjotYTmoLzvvIzkvLDorqHogYznp7DpqazkuIrlsLHopoHkuIvmnaXkuobjgILigJ3miJHlj5HnjrDoh6rlt7Hnq5/nhLbkuI3oh6rnpoHlnLDor7TlvpflpoLmraTor6bnu4bjgII8L3A+IAogICA8cD7lkIPppa3nmoTlnLDmlrnmmK/miJHkuLTml7bpgInnmoTvvIzlsLHlnKjmiJHku6zljLvpmaLkuI3ov5zlpITjgII8L3A+IAogICA8cD7kuIDkuKrpo47lp7/nu7DnuqbnmoTlpbPkurrvvIzlj6/og73mmK/ov5nph4znmoTogIHmnb/lqJjvvIzkurLoh6rnu5nmiJHku6zpgIHmnaXkuoboj5zosLHvvIzlvq7nrJHnnYDpl67miJHvvJrigJzkvaDku6zmg7PlkIPngrnku4DkuYjvvJ/igJ08L3A+IAogICA8cD7igJzmnaXlh6DmoLfkvaDku6zov5nph4znibnoibLnmoToj5zlkKfjgILigJ3miJHmg7Pkuobmg7PlkI7or7TpgZPjgII8L3A+IAogICA8cD7igJzlpb3jgILigJ3lpbnmioroj5zosLHmlLbkuoblm57ljrvvvIzigJzopoHngrnku4DkuYjphZLmsLTlkaLvvJ/igJ08L3A+IAogICA8cD7miJHljrvnnIvotbXmoqbolb7vvIzigJzkvaDor7TlkaLvvJ/igJ08L3A+IAogICA8cD7igJzogIHlkIzlrabop4HpnaLvvIzlvZPnhLbopoHllp3ngrnphZLllabjgILnmb3phZLlkKfvvIzkuI3opoHlpKrotLXjgILigJ3lpbnnrJHnnYDlr7nmiJHor7TjgII8L3A+IAogICA8cD7igJzlpb3lmJ7vvIHigJ3po47lp7/nu7DnuqbnmoTlpbPkurrlupTnrZTnnYDnprvlvIDkuobjgII8L3A+IAogICA8cD7otbXmoqbolb7nnIvkuobnnIvmiJHvvIznrJHnnYDpl67vvJrigJzkvaDniLHkurrmmK/lubLku4DkuYjnmoTvvJ/igJ08L3A+IAogICA8cD7miJHoi6bnrJHvvJrigJzlk6rmnInniLHkurrvvIzov57mgYvniLHpg73msqHosIjov4fkuIDmrKHjgILigJ08L3A+IAogICA8cD7miJHmhJ/op4nliLDoh6rlt7HnmoTohLjlnKjlj5Hng6vvvIzlm6DkuLrmiJHnmoTlv4Pph4zlnKjor7TvvJrmiJHnmoTlv4Pph4zkuIDnm7TlnKjmg7PkvaDlkaLjgII8L3A+IAogICA8cD7igJzkvaDkuIDnm7TljZXouqvvvJ/igJ3lpbnmg4rorrblnLDnnIvnnYDmiJHpl67pgZPjgII8L3A+IAogICA8cD7miJHmnJ3lpbnngrnlpLTvvIzpmo/ljbPpl67pgZPvvJrigJzkvaDlkaLvvJ/kvaDnmoTniLHkurrmmK/lgZrku4DkuYjnmoTvvJ/igJ08L3A+IAogICA8cD7omb3nhLbmiJHmmI7mmI7nn6XpgZPlpbnlh6DkuY7ogq/lrprnu5PlqZrkuobvvIzkvYbmiJHkvp3nhLbmnJ/nm7zlpbnog73mnInkuI7miJHkuIDmoLfnmoTlm57nrZTjgII8L3A+IAogICA8cD7nhLbogIzvvIznjrDlrp7pnZ7luLjmrovphbfvvIzlpbnlm57nrZTpgZPvvJrigJzku5blnKjkuIDkuKrkuK3lpK7kvIHkuJrplIDllK7lpITlt6XkvZzvvIzmnIDov5HmiY3osIPliLDmsZ/ljZfnnIHjgILmiYDku6XmiJHkuZ/ot5/nnYDov4fmnaXkuobjgILigJ08L3A+IAogICA8cD7miJHpob/ml7bpu6/nhLbjgII8L3A+IAogICA8cD7ov5nml7blgJnpgqPkvY3po47lp7/nu7DnuqbnmoTogIHmnb/lqJjov4fmnaXkuobvvIzlpbnmi7/mnaXkuobkuIDnk7bnmb3phZLjgII8L3A+IAogICA8cD7miJHnrJHnnYDmiZPlvIDpgqPnk7bphZLvvIznhLblkI7nu5nlpbnlgJLkuIrvvIzigJzmnaXvvIzmiJHmlazkvaDjgILkuLrkuobogIHlkIzlrabnm7jpgKLjgILigJ08L3A+IAogICA8cD7lpbnnq6/otbfmna/kuIDppa7ogIzlsL3jgII8L3A+IAogICA8cD7miJHmgJTkuobkuIDkuIvvvIzpmo/ljbPkuZ/llp3kuIvkuobjgII8L3A+IAogICA8cD7po47lp7/nu7DnuqbnmoTogIHmnb/lqJjlho3kuZ/msqHmnInmnaXvvIzmmK/lhbbku5bmnI3liqHlkZjmnaXkuIrnmoToj5zjgILoj5znmoTlkbPpgZPlvojkuI3plJnjgII8L3A+IAogICA8cD7lkIPnnYDllp3nnYDvvIzmiJHpl67lpbnvvJrigJzku4rlpKnmo4Dmn6XnmoTnu5PmnpzmgI7kuYjmoLfvvJ/kvaDlk6rph4zkuI3oiJLmnI3vvJ/igJ08L3A+IAogICA8cD7lpbnnnIvkuobmiJHkuIDnnLzvvIzmu6HohLjnmoTnvp7mhI/vvIzigJzov5nkuI3mmK/kvaDnmoTor4rmiYDlkKfvvJ/igJ08L3A+IAogICA8cD7igJzlkbXlkbXvvIHogYzkuJrkuaDmg6/jgILliKvku4vmhI/llYrjgILigJ3miJHkuZ/op4nlvpfoh6rlt7HnmoTor53popjlvojov4fliIbvvIzlvojml6DogYrjgII8L3A+IAogICA8cD7igJzmsqHkuovjgILigJ3lpbnljbTmnJ3miJHkuL7mna/vvIzigJzogIHlkIzlrabvvIzlj6/og73miJHku4rlkI7ov5jkvJrnu4/luLjmnaXmib7kvaDnmoTjgILigJ08L3A+IAogICA8cD7igJzmgI7kuYjvvJ/pl67popjlvojkuKXph43vvJ/igJ3miJHnq4vliLvlj4jlm57liLDkuoboh6rlt7HnmoTogYzkuJrnirbmgIHkuIrljrvkuobvvIznnJ/mmK/lsaHmlZnkuI3mlLnjgILpl67lh7rmnaXkuYvlkI7nq4vliLvmhJ/liLDlkI7mgpTjgII8L3A+IAogICA8cD7igJzllp3phZLjgILigJ3lpbnljbTlj4jmnJ3miJHkuL7mna/jgII8L3A+IAogICA8cD7ov5nmna/phZLllp3kuIvlkI7miJHmmpfmmpflnLDlj5HoqpPkuI3lho3pl67lpbnlhbPkuo7nl4Xmg4XmlrnpnaLnmoTpl67popjkuobjgII8L3A+IAogICA8cD7ov5jlpb3vvIzlpbnkuZ/kuI3lho3osIjlj4rliLDpgqPkuKrmlrnpnaLjgILmiJHku6zlkI7mnaXnmoTor53popjpg73mmK/ku6XliY3lrabmoKHnmoTotqPkuovvvIzov5jmnInnj63kuIrlpbPlkIzlrabnmoTkuIDkupvkuovmg4XjgILlhbbkuK3lvojlpJrpg73mmK/miJHkuI3nn6XpgZPnmoTjgII8L3A+IAogICA8cD7kuIDnk7bphZLlvojlv6vlsLHllp3lrozkuobvvIzlrozlhajmsqHmg7PliLDlpbnov5nkuYjog73llp3jgII8L3A+IAogICA8cD7igJzlho3mnaXkuIDnk7bvvJ/igJ3miJHpl67lpbnpgZPjgII8L3A+IAogICA8cD7lpbnmkYflpLTvvIzoiIzlpLTmnInkupvlpKfkuobvvIzigJzmiJHllp3lpJrkuobjgILigJ08L3A+IAogICA8cD7lhbblrp7miJHkuZ/lt67kuI3lpJrkuobvvIzmiJHpmo/ljbPngrnlpLTpgZPvvJrigJzlpb3lkKfvvIzkvaDlpJrlkIPngrnoj5zjgILigJ08L3A+IAogICA8cD4g6L+Z5pe25YCZ5oiR5omN5Y+R546w5aW555yf55qE5bey57uP5Zad5aSa5LqG77yM5Zug5Li65aW55omL5LiK55qE56235a2Q5Yeg5qyh5o6J5Zyo5LqG5qGM5LiK77yM5ou+56235a2Q55qE5pe25YCZ77yM5aW555qE6Lqr5a2Q5b6u5b6u5YmN5YC+77yM6aKG5Y+j5LiA5pmD6ICM6L+H55qE6Zuq55m95rex5rKf77yM6K6p5oiR5Yeg5LmO5oyq5LiN5byA55y8552b44CCPC9wPiAKICAgPHA+5oiR5Y6757uZ5aW55aS56I+c77yM5ZCM5pe25pyJ5LiA56eN5oOz6KaB5Y675ZaC5aW555qE5Yay5Yqo44CC5b2T54S277yM5oiR5LiN5pWi44CCPC9wPiAKICAgPHA+4oCc5LiN5ZCD5LqG44CC5oiR5ZCD5aW95LqG44CC4oCd5aW557uI5LqO5pS+5LiL5LqG56235a2Q54S25ZCO5a+55oiR6K+06YGT44CCPC9wPiAKICAgPHA+5LqO5piv5oiR5oCl5b+Z5Y675oub5ZG85pyN5Yqh5ZGY57uT6LSm44CCPC9wPiAKICAgPHA+4oCc5oiR57uT6LSm5LqG44CC4oCd5aW55Y205Zyo56yR552A5a+55oiR6K+06YGT44CCPC9wPiAKICAgPHA+5oiR6L+Z5omN5oOz6LW35aW55Zyo5oiR5Lus5ZCD6aWt55qE5Lit6YCU5Y676L+H5LiA6Laf5Y2r55Sf6Ze055qE5LqL5oOF77yM5Lyw6K6h5piv6YKj5pe25YCZ5Y6757uT55qE5biQ44CC4oCc5L2g5bmy5LuA5LmI77yf5LiN5piv6K+05aW95LqG5oiR6K+35a6i55qE5ZCX77yf4oCdPC9wPiAKICAgPHA+4oCc5oiR5Lus6LWw5ZCn44CC4oCd5aW56K+077yM6ZqP5Y2z5pGH5pGH5pmD5pmD5Zyw56uZ5LqG6LW35p2l44CC5oiR5b6I5oOz5Y675om25aW577yM5L2G5piv5LiN5pWi44CCPC9wPiAKICAgPHA+5Y+v5piv5aW55Y2055yL5LqG5oiR5LiA55y877yM4oCc5L2g5p2l5om25LiA5LiL5oiR44CC5oiR6LWw5LiN5Yqo5LqG44CC4oCdPC9wPiAKICAgPHA+5oiR54q56LGr5LqG5LiA556s77yM6ZqP5Y2z5Y675om25L2P5LqG5aW555qE6IOz6IaK44CC6L+Z5LiA5Yi777yM5oiR55qE5YaF5b+D54yb54S25Zyw6ZyH6aKk5LqG6LW35p2l77yM5Zug5Li65oiR5oSf6KeJ5Yiw5aW555qE6IOz6IaK5piv6YKj5LmI55qE5p+U6L2v77yBPC9wPiAKICAgPHA+4oCc5L2g5L2P5LuA5LmI5Zyw5pa577yf5oiR6YCB5L2g5Zue5Y675ZCn44CC4oCd5Yiw5LqG6ams6Lev6L655LiK55qE5pe25YCZ5oiR6Zeu5aW56YGT44CCPC9wPiAKICAgPHA+4oCc5LiN55So44CC4oCd5aW55pGH5aS06YGT44CCPC9wPiAKICAgPHA+4oCc6YKj5oiR57uZ5L2g5Y+r6L2m44CC4oCd5oiR6K+044CCPC9wPiAKICAgPHA+6K6p5oiR5rKh5pyJ5oOz5Yiw55qE5piv77yM5aW55Y205b+954S25Zyw55Sp5byA5LqG5oiR55qE5omL77yM6L2s6Lqr55yL552A5oiR6Zeu6YGT77ya4oCc5Yav56yR77yM6K+76auY5Lit55qE5pe25YCZ5L2g5piv5LiN5piv5b6I5Zac5qyi5oiR77yf4oCdPC9wPiAKICAgPHA+5oiR6aG/5pe25oCU5L2P5LqG77yM5b+D6YeM5oO25oO25Zyw55yL552A5aW55LiN55+l6YGT6K+l5aaC5L2V5Zue562U44CCPC9wPiAKICAgPHA+5aW55L6d54S25Zyo6K+077ya4oCc5L2g5Lul5YmN57uP5bi46Lef5Zyo5oiR5ZCO6Z2i77yM5oiR5piv55+l6YGT55qE44CC4oCdPC9wPiAKICAgPHA+6Jm954S25pe26ZqU5aSa5bm077yM5L2G6L+Z5Y+l6K+d6L+Y5piv6K6p5oiR6IS457qi5LqG44CCPC9wPiAKICAgPHA+5aW555yL552A5oiR77yM56yR5LqG77ya4oCc5Yav56yR77yM5oiR5b6X5Zue5a625LqG44CC5YaN6KeB44CC5a+55LqG77yM5oqK5L2g55qE5omL5py65Y+356CB57uZ5oiR5aW95ZCX77yf4oCdPC9wPiAKICAgPHA+4oCc5b2T54S25aW944CC4oCd5oiR6K+044CCPC9wPiAKICAgPHA+5aW556yR5LqG77yM5bCG5omL5py65pyd5oiR6YCS5LqG6L+H5p2l77yM4oCc5L2g5biu5oiR5a2Y5LiA5LiL44CC4oCdPC9wPiAKICAgPHA+5oiR5b2T54S25LiN5Lya5ouS57ud77yM5o6l6L+H5omL5py65a2Y5LiK5oiR55qE5Y+356CB77yM6K6p5oiR5b+D5peM5pGH5puz55qE5piv77yM5Zyo5oiR5a2Y5Y+356CB55qE6L+H56iL5Lit5aW555qE5aS056uf54S26Z2g5Zyo5LqG5oiR55qE6IKp6IaA5LiK77yBPC9wPiAKICAgPHA+6ICM6IO46YOo5Lmf6L276L276LS05Zyo5LqG5oiR55qE6IOz6IaK5LiK77yM6YKj5oSf6KeJ77yM5b6I5p+U6L2v4oCm4oCm5b6I5p+U6L2v4oCm4oCmPC9wPiAKICAgPHA+IOKAnOi/meS4i+WlveS6hu+8jOaIkeWPr+S7pemaj+aXtuaJvuS9oOS6huOAguKAneWlueS7juaIkeaJi+mHjOaOpei/h+aJi+acuu+8jOeskeedgOWvueaIkeivtOmBk++8jOmaj+WNs+WOu+WIsOmprOi3r+i+ueaLm+aJi+WPq+i9puOAguaIkeWPkeeOsOWlueeahOi6q+S9k+WcqOaRh+aZg++8jOaApeW/meWcsOacneWluei3keS6hui/h+WOu++8jOmaj+aJi+aJtuS9j+S6huWlueeahOi6q+S9k++8jOaJi+S4iuaYr+WlueaflOWrqeeahOWQjuiDjOiCjOiCpOOAguiZveeEtumalOedgOS4gOWxguiho+acje+8jOS9huaIkeaJi+S4iueahOaEn+inieWNtOS+neeEtuaYr+mCo+S5iOeahOa4heaZsOOAgjwvcD4gCiAgIDxwPuWHuuenn+i9pui9veedgOWluee7neWwmOiAjOWOu++8jOeVmeS4i+S6huWknOiJsuS4remCo+S4gOeJh+aWkeaWk+OAgjwvcD4gCiAgIDxwPuaIkeWPueaBr+S6huS4gOWjsOWQjuWtpOeLrOWcsOWbnuWIsOWvneWupO+8jOW/g+mHjOS4jeemgeaEn+WPueS4lumBk+eahOS4jeWFrO+8jOavleern+mCo+aYr+aIkeaal+aBi+WkmuW5tOeahOWls+S6uuWViu+8jOW/g+S4reS4jeemgeWrieWmkui1t+WlueeahOS4iOWkq+OAgjwvcD4gCiAgIDxwPuaVtOS4quaZmuS4iuaIkemDveacieS6m+mDgemXt++8jOWUr+acieWOu+WbnuW/huabvue7j+eahOS4gOW5leW5le+8jOiusOW/huS4reWluemCo+WmmeabvOeahOi6q+W9ouWHj+i9u+S6huaIkeiuuOWkmueahOeXm+iLpu+8jOW5tuiuqeaIkeaFouaFoui/m+WFpeWIsOedoeecoOS5i+S4reOAgjwvcD4gCiAgIDxwPiDnrKzkuozlpKnkuIrnj63nmoTml7blgJnmiJHljbTmhaLmhaLlnLDlubPpnZnkuobkuIvmnaXvvIzlm6DkuLrlpKrlv5nvvIzov5jlm6DkuLrmiJHlt7Lnu4/lrozlhajorqTlkb3kuobjgILmnInkuIDkuKrpgZPnkIbmiJHov5jmmK/mmI7nmb3nmoTvvJrkuI3lsZ7kuo7oh6rlt7HnmoTkuJzopb/lho3mgI7kuYjmuLTmsYLpg73mr6vml6DnlKjlpITjgILmmKjlpKnlpbnnu5nmiJHmv4DotbfnmoTpgqPkuIDniYfmtp/mvKrnu4jkuo7lvZLkuo7kuIDnp43lubPpnZnjgII8L3A+IAogICA8cD4g54S26ICM77yM5ZG96L+Q5Y205YGP5YGP5LiO5oiR5L2c5oCq44CC5LiL5Y2I55qE5pe25YCZ5oiR5Yia5Yia5pS25LqG5LiA5Liq5paw55eF5Lq65YWl6Zmi77yM5q2j5Zyo5YaZ5L2P6Zmi55eF5Y6G55qE5pe25YCZ77yM5b+954S25o6l5Yiw5LqG6LW15qKm6JW+55qE55S16K+d77ya4oCc5pma5LiK5oiR6K+35L2g5ZCD6aWt5ZCn44CC5L2g5LiA5a6a6KaB5p2l5ZOm44CC4oCdPC9wPiAKICAgPHA+5oiR5b+D6YeM5b+954S25pyJ5LqG5LiA56eN5YW05aWL77yM4oCc5LuA5LmI5Zyw5pa577yf4oCdPC9wPiAKICAgPHA+4oCc5oiR5a626YeM44CC4oCd5aW55Zue562U77yM4oCc5oiR5YGa5LqG5aW95Yeg5qC36I+c5ZGi77yM6K6p5L2g5bCd5bCd5oiR55qE5omL6Im644CC4oCdPC9wPiAKICAgPHA+4oCc5L2g6ICB5YWs5Zyo5a626YeM5ZCX77yf4oCd5oiR5LiN55Sx6Ieq5Li755qE6Zeu5LqG6L+Z5LmI5LiA5Y+l44CC6Zeu6L+H5LmL5ZCO5oiR5omN5piO55m977yM6Ieq5bex55qE5YaF5b+D5pyJ5Lqb55eb5oGo6YKj5Liq55S35Lq644CCPC9wPiAKICAgPHA+4oCc5Ye65beu5Y675LqG44CC4oCd5aW56K+077yM4oCc5L2g5LiA5a6a6KaB5p2l5ZWK44CC4oCdPC9wPiAKICAgPHA+5oiR6aG/5pe25pS+5LiL5b+D5p2l77yM4oCc5aW955qE77yM5L2g5ZGK6K+J5oiR5L2g5a6255qE5Zyw5Z2A5ZCn44CC4oCdPC9wPiAKICAgPHA+5oiR55qE5b+D6YeM5pyJ5Lqb6I6r5ZCN55qE6KCi6KCi5qyy5Yqo4oCm4oCmPC9wPiAKICAgPHA+5LiL54+t55qE5pe25YCZ56eR5a6k5LiA5L2N5Yy755Sf5p2l5om+5Yiw5LqG5oiR77yM5aW55piv5oiR55qE5biI5aeQ77yM5Zug5Li65aW55Lmf5piv5oiR5a+85biI55qE5a2m55Sf77yM5q+U5oiR6auY5LiA5bGK44CCPC9wPiAKICAgPHA+4oCc5bCP5biI5byf77yM5pma5LiK5biu5oiR5YC85LiA5LiL5aSc54+t44CC4oCd5aW556yR55yv55yv5Zyw5a+55oiR6K+044CCPC9wPiAKICAgPHA+4oCc6IuP5Y2O5biI5aeQ77yM5oiR5LuK5aSp5pma5LiK5pyJ5LqL5oOF77yM55yf55qE44CC4oCd5oiR5oCl5b+Z5Zyw6YGT44CCPC9wPiAKICAgPHA+4oCc6Zmk6Z2e5piv5L2g6LCI5oGL54ix77yM5LiN54S255qE6K+d5L2g5b+F6aG75biu5oiR5YC854+t44CC4oCd5aW55b6I6Zy46YGT5Zyw6K+044CCPC9wPiAKICAgPHA+4oCc5L2g5Y+I5pyJ5LuA5LmI5LqL5oOF77yf4oCd5oiR5b+D6YeM5pyJ5Lqb5LiN54i977yM5Zug5Li65aW56L+Z5bey57uP5piv56ys5LqM5qyh6K6p5oiR5bim54+t5LqG77yM6ICM5LiU5LiK5qyh5bim54+t5ZCO5bm25rKh5pyJ6L+Y5oiR5LyR5oGv5pe26Ze044CCPC9wPiAKICAgPHA+4oCc5oiR55S35pyL5Y+L5LuK5aSp5Zue5p2l44CC4oCd5aW55ruh6IS455qE5bm456aP44CC5oiR5Y205oqK5aW56IS45LiK55qE6YKj56eN56We5oCB55yL5oiQ5piv5LiA56eN4oCc5oCn56aP4oCdPC9wPiAKICAgPHA+IOKAnOaIkeecn+eahOacieS6i+aDheOAguWvueS4jei1t+WViu+8jOS9oOi/mOaYr+WPq+WFtuS7luS6uuabv+S9oOS7o+ePreWQp+OAguKAneaIkeS4jeaDs+mUmei/h+S7iuWkqeaZmuS4iuS4jui1teaipuiVvuWNleeLrOWcqOS4gOi1t+eahOacuuS8muOAguaIkeacieenjeacn+W+heWSjOWFtOWli++8jOWwseaYr+aDs+WSjOWlueWcqOS4gOi1t++8jOWboOS4uuS4reWtpuaXtuWvueWlueeahOmCo+enjeaal+aBi+aDheaEn+W3sue7j+a3seWFpeWIsOS6huaIkeeahOmqqOmrk+mHjOmdouOAgjwvcD4gCiAgIDxwPuiLj+WNjueci+edgOaIke+8jOiEuOS4iuS8vOeskemdnueske+8jOKAnOecn+eahOaBi+eIseS6hu+8n+KAnTwvcD4gCiAgIDxwPuaIkeeCueS6hueCueWktO+8gTwvcD4gCiAgIDxwPuWlueiEuOS4iumhv+aXtumcsuWHuuaDiuWWnOeahOelnumHh++8jOKAnOecn+eahO+8n+WlueW5suS7gOS5iOeahO+8n+KAnTwvcD4gCiAgIDxwPuKAnOafpeaIt+WPo+WViu+8n+KAneaIkeW/veeEtuacieS6m+W/g+iZmuOAgjwvcD4gCiAgIDxwPuiLj+WNjuWkp+eske+8jOKAnOW+l++8jOaIkeS4jem6u+eDpuS9oOS6huOAguS4jei/h++8jOWIsOaXtuWAmeS9oOimgeW4puWlueadpeingeaIkeWTpuOAguKAnTwvcD4gCiAgIDxwPuaIkemhv+aXtuinieW+l+iHquW3seeahOiEuOS4iuWPkeeDq+W+l+WOieWus++8jOW/g+mHjOacieedgOS4gOenjea3sea3seeahOaEp+eWmuOAgjwvcD4gCiAgIDxwPuWlueS+neeEtuWcsOeci+edgOaIkeeske+8jOKAnOWTn++8geWus+e+nuWVpu+8n+KAnTwvcD4gCiAgIDxwPuaIkeermei1t+adpeiEseaOieeZveWkp+iho+eEtuWQjuacneeXheaIv+Wklumdoui1sOWOu+OAgui6q+WQjuaYr+WlueeIveacl+eahOeskeWjsOOAgjwvcD4gCiAgIDxwPuWIsOS6huWklumdou+8jOaIkeaLv+WHuuaJi+acuuaJk+e7mei1teaipuiVvuOAgjwvcD4gCiAgIDxkaXYgaWQ9ImJvb2stYm90dG9tIj4gCiAgIDwvZGl2PiAKICA8L2Rpdj4gCiA8L2Rpdj4gIAo8L2Rpdj4=");
        return result;
    }

    private String content() {
        String content = "周瑜的小黄书周瑜的小黄书周瑜的小黄书周瑜的小黄书周瑜的小黄书周瑜的小黄书周瑜的小黄书";
        content = Base64.getEncoder().encodeToString(content.getBytes(Charset.defaultCharset()));

        return content;
    }

    @RequestMapping(value = "ad/get", method = RequestMethod.GET)
    @ResponseBody
    public BaseResult getAd(@RequestParam(value = "boxIds")List<Integer> boxIds) {
        BaseResult result = new BaseResult();
        return result;
    }

    @RequestMapping(value = "book/promotion.json",method = RequestMethod.GET)
    @ResponseBody
    public BookPromotionResult promotion(){
        BookPromotionResult result=new BookPromotionResult();
        List<LinkListModel> linkList =new ArrayList<>();
        LinkListModel model=new LinkListModel();
        model.setAdditional("[{\"wordDesc\":\"女上司如狼似虎！在办公室一遍又一遍的折腾我\",\"source\":\"ts_0ca428e48cae4d02877ba5d2703ab5a7_4\"},{\"wordDesc\":\"租了个女友回家过年，竟发生了不可控的事情\",\"source\":\"bd_8b220ff6972e4102ba69a0f15a527b8c_4\"},{\"wordDesc\":\"我把你当情人，你却把我当提款机…\",\"source\":\"bd_45c9c2f311f34cd08e7ad72cb31dc25f_4\"},{\"wordDesc\":\"想要夫妻关系好，动作最重要\",\"source\":\"bd_4c23e2a64b8141adbdf4ad88b182fbbf_4\"}]");
        model.setBannerName("男频官场7.26");
        model.setId("5005");
        linkList.add(model);
        result.setLinkList(linkList);
        return result;
    }


}
