$(document).ready(function(){WEAccordionCoreJs.Initialize()});$(document).bind("OEReload",function(n){for(ElemID in OEConfWEAccordion)ElemID==n.ID&&WEAccordionCoreJs.IniAccordion(ElemID)});var WEAccordionCoreJs={Initialize:function(){for(ElemID in OEConfWEAccordion)WEAccordionCoreJs.IniAccordion(ElemID)},IniAccordion:function(n){var t=$("#"+n),i=t.children(".OESZ_DivContent"),r=OEConfWEAccordion[n],u=r.EasingJs,f;u=="none"&&(u="customslide");t.bind("OEResizeEnd",function(){$(this).find(".OESZ_WEAccordionContent").css("height",WEAccordionCoreJs.CalcContentHeight($(this)))});t.bind("OECssUpdate",function(){$(this).find(".OESZ_WEAccordionContent").css("height",WEAccordionCoreJs.CalcContentHeight($(this)))});i.bind("accordioncreate",function(){$(this).children(".OESZ_WEAccordionContent:first").css("display","block");$(this).children(".OESZ_WEAccordionContent").css("height",WEAccordionCoreJs.CalcContentHeight(t));var n=$(this).find(".ui-state-active");n.addClass("OESZ_WEAccordionHeaderActive");n.find(".OESZ_WEAccordionHeaderLeft").addClass("OESZ_WEAccordionHeaderLeftActive");n.find(".OESZ_WEAccordionHeaderContent").addClass("OESZ_WEAccordionHeaderContentActive");n.find(".OESZ_WEAccordionHeaderRight").addClass("OESZ_WEAccordionHeaderRightActive")});f=parseInt(r.OpenGroupIndex);f<0&&(f=!1);i.accordion({header:".OESZ_WEAccordionHeader",active:0,animated:u});i.bind("accordionchange",function(){t.trigger("OECssUpdate")});i.bind("accordionchangestart",function(i,u){u.newContent.css("height",WEAccordionCoreJs.CalcContentHeight(t));WEInfoPage.RenderMode=="Editor"&&WEEdToVB.SetElementData(n,u.newHeader.attr("id"));var o=u.oldHeader.find(".OESZ_WEAccordionIcon img"),s=u.newHeader.find(".OESZ_WEAccordionIcon img"),f=WEAccordionCoreJs.GetGroupConf(r,u.oldHeader.attr("id")),e=WEAccordionCoreJs.GetGroupConf(r,u.newHeader.attr("id"));f!=null&&o.attr("src",OE.Common.Link.getPath(f.IconOff));e!=null&&s.attr("src",OE.Common.Link.getPath(e.IconOn))});t.find(" .OESZ_WEAccordionHeader").bind("click",function(){return t.find(".OESZ_WEAccordionHeaderActive").removeClass("OESZ_WEAccordionHeaderActive"),t.find(".OESZ_WEAccordionHeaderLeftActive").removeClass("OESZ_WEAccordionHeaderLeftActive"),t.find(".OESZ_WEAccordionHeaderContentActive").removeClass("OESZ_WEAccordionHeaderContentActive"),t.find(".OESZ_WEAccordionHeaderRightActive").removeClass("OESZ_WEAccordionHeaderRightActive"),$(this).addClass("OESZ_WEAccordionHeaderActive"),$(this).find(".OESZ_WEAccordionHeaderLeft").addClass("OESZ_WEAccordionHeaderLeftActive"),$(this).find(".OESZ_WEAccordionHeaderRight").addClass("OESZ_WEAccordionHeaderRightActive"),$(this).find(".OESZ_WEAccordionHeaderContent").addClass("OESZ_WEAccordionHeaderContentActive"),!1})},CalcContentHeight:function(n){var t=n.innerHeight(),r=n.children(".OESZ_DivContent").children(".OESZ_WEAccordionHeader"),i=n.children(".OESZ_DivContent").children(".OESZ_WEAccordionContent:first");return r.each(function(){t-=$(this).outerHeight(!0)}),t-=i.outerHeight(!0)-i.height(),t-=parseInt(n.css("padding-top"))+parseInt(n.css("padding-bottom"))},GetGroupConf:function(n,t){for(i in n.AccordionGroups){var i=n.AccordionGroups[i];if(i.ID==t)return i}return null}}