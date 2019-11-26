$(function() {
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
});
