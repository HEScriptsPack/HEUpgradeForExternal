// ==UserScript==
// @name         HEUpgrade (Ext. HDD)
// @namespace    https://logfro.de/
// @version      1.0
// @description  This Script auto upgrades all Ext HD
// @author       Original from Omega, Edited by Logfro
// @match        https://*.hackerexperience.com/hardware*
// ==/UserScript==

const account = 'ENTERACCNUMBERHERE';

function upgradeXHD(){
var servers = $(".widget-content.padding > ul > a");
    var nextIndex = -1;
    var serverLink = "";

    //Find CPU link
    servers.each(function(index) {
        cpuUnit = $(this).find(".list-user > small").eq(0).text();
        if(cpuUnit != "1 GB")
        {
            nextIndex = index;
            serverLink = "https://legacy.hackerexperience.com/hardware?opt=xhd&id=" + $(this).attr('href').replace("?opt=xhd&id=","").replace("hardware","");
            return false;
        }
    });

    if(nextIndex == -1)
    {
        return false;
    }
    else if($('div.span8 > div:nth-child(1) > div.widget-content.nopadding > table > tbody > tr').length > 1)
    {
        //Buy the External
        var dataObject = {};
        dataObject.acc = account;
        dataObject.act = 'xhd';
        dataObject['part-id'] = '3';
        dataObject.price = '500';
        $.ajax({
            type: 'POST',
            data: dataObject
        });
    }
    window.location = serverLink;
}

$(document).ready(function() {
    upgradeXHD();
});
