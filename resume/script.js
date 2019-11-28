$(function() {
    // 年龄
    let birthdayStr = $('#age').attr('data-birthday');
    let age = getAge(birthdayStr);
    $('#age').text(age + ' 岁');

    // 技能熟练度
    $('#skill-proficiency td').each(function(i) {
        let skillProficiency = $(this).attr('data-skill-proficiency');
        let line = $('<span class="proficiency-line-span"></span>');
        line.css('width', skillProficiency * 100 + 'px');
        let td = $('<td></td>');
        td.html(line);
        $(this).after(td);
    });

    // 个人简介添加项目编号
    let introItem = $('.introduction>p');
    introItem.each(function(i) {
        let str = $(this).text();
        str = i + 1 + '、' + str;
        $(this).text(str);
    });

    // 根据出生日期算出年龄
    function getAge(strBirthday) {
        var returnAge;
        var strBirthdayArr = strBirthday.split("-");
        var birthYear = strBirthdayArr[0];
        var birthMonth = strBirthdayArr[1];
        var birthDay = strBirthdayArr[2];

        d = new Date();
        var nowYear = d.getFullYear();
        var nowMonth = d.getMonth() + 1;
        var nowDay = d.getDate();

        if (nowYear == birthYear) {
            returnAge = 0; //同年 则为0岁
        } else {
            var ageDiff = nowYear - birthYear; //年之差
            if (ageDiff > 0) {
                if (nowMonth == birthMonth) {
                    var dayDiff = nowDay - birthDay; //日之差
                    if (dayDiff < 0) {
                        returnAge = ageDiff - 1;
                    } else {
                        returnAge = ageDiff;
                    }
                } else {
                    var monthDiff = nowMonth - birthMonth; //月之差
                    if (monthDiff < 0) {
                        returnAge = ageDiff - 1;
                    } else {
                        returnAge = ageDiff;
                    }
                }
            } else {
                returnAge = -1; //返回-1 表示出生日期输入错误 晚于今天
            }
        }

        return returnAge; //返回周岁年龄

    }
});
