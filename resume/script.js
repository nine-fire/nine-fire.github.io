window.onload = function () {
    var data = {
        name: '肖玮',
        gender: '男',
        birthday: new Date('1998-1-19'),
        address: '武汉',
        school: '',
        phoneNumber: '132 3563 3935',
        email: 'xw.i@foxmail.com',
        nativePlace: '湖北省宜昌市', // 籍贯
        objective: 'Java 工程师、计算机相关研发', // 求职意向
        skillProficiency: [ // 技能熟练度
            { name: 'Java', proficiency: 0.8 },
            { name: 'JavaScript', proficiency: 0.7 },
            { name: 'Spring', proficiency: 0.8 },
            { name: 'Python', proficiency: 0.4 },
            { name: 'MySQL', proficiency: 0.7 },
            { name: 'Android', proficiency: 0.6 },
            { name: 'Oracle', proficiency: 0.6 },
            { name: 'C/C++', proficiency: 0.3 }
        ],
        skills: [ // 个人技能
            '熟悉常用的数据结构、算法及设计模式，拥有扎实的计算机基础',
            '熟练使用 Java 常用开源框架 Spring、项目管理构建工具 Maven、版本控制工具 Git',
            '熟悉 Linux 基本操作、有 Linux 环境下开发和部署经验，了解 Shell 脚本',
            '熟悉使用 jQuery、Ajax、Bootstrap 等前端技术，了解 Vue、React 等 MVVM 前端框架',
            '了解 Spring Boot、Hadoop、Spark、负载均衡等热门技术'
        ],
        introduction: [ // 个人简介
            '擅于自学，课余时自学了 Web 前端、Photoshop、After Effects、Premiere 等多门课程',
            '踏实可靠，不丢三落四，大学四年从未遗失过钥匙或卡片等',
            '认真负责，他人交予的任务，总是按时、按量地完成',
            '精益求精，代码上追求清晰结构和优雅风格，UI 设计上不允许存在 1 个像素的偏差',
            '待人和睦，大学期间从未与任何人发生争执或口角，受老师和同学爱戴',
            '拥抱新颖，对新技术、新话题，新事物有好奇心，乐于探索新大陆'
        ],
    };

    var computed = {
        age: function () {
            return Math.floor((new Date() - data.birthday) / (1000 * 60 * 60 * 24 * 365));
        }
    };

    var vm = new Vue({
        el: '#content-view',
        data: data,
        computed: computed
    });

    (function () {
        for (var i = 0; i < 3; i++) {
            console.log(i + '  祝大佬您身体健康，万事如意，求给个机会。');
        }
        console.log('\n这是我的微信二维码 https://i.loli.net/2020/03/24/ebuYWVNh8S46sc2.jpg');
    })();
};
