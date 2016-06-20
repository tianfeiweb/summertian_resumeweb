var bio = {
            "name":"田菲",
            "job":"前端工程师",
            "tel":"18616260115",
            "email":"summer_tian@hotmail.com",
          };
          var experience = {
            "schools":[
            {
                    "title":"数字社会学理学硕士学位，金史密斯学院，伦敦大学",
                    "course":"主要学习的课程:数字社会学研究方法、数据分析和数据可视化、社交媒体分析",
                    "content":"学习了数字社会学研究的基础方法，对大数据和社交网络分析、开放数据（open data）有一定的研究。同时又学习了前端，python和数据库的基础知识，进行对研究社会学项目内容的数据抓取，数据分析和数据可视化。",
                    "date":"2014-09-30",

            },{
                    "title":"硕士预科，东方与非洲研究学院，伦敦大学",
                    "course":"主要学习的课程：国际商务学和媒体、社会学研究",
                    "content":"学习了商业计划书的撰写和用SWOT分析法分析案例；通过社会学研究的基础方法，对之后社会学的深入学习打下了基础。提高了学术英语写作能力。",
                    "date":"2012-9-30",
            },{
                    "title":"通信工程工科学士学位, 黑龙江大学",
                    "course":"主要学习的课程: C语言、模电、数电、通信原理、信号与系统、 单片机等等",
                    "content":"学习了软件基础（数据结构、操作系统、数据库、软件工程），具有初级的编程思想，做实验时实践动手能力强。",
                    "date":"2008-09-01",
            }]
          };

           
var HTMLworkTitle = '<h2>%data%</h2>';
var HTMLworkDescription = '<p>%data%</p>';
var HTMLworkDates = '<span class="cd-date">%data%</span>';
var HTMLskill = '<li>%data%</li>';
var HTMLCourse="<span>%data%<span>";

$(".card ul").append("<li><strong>"+bio.name+"</strong></li>");
$(".card ul").append("<li>"+bio.job+"</li>");
$(".card ul").append("<li>"+"Tel:"+bio.tel+"</li>");
$(".card ul").append("<li>"+"E-mail:"+bio.email+"</li>");


for(i in experience.schools){

    var formattedTitle=HTMLworkTitle.replace('%data%',experience.schools[i].title);
    var formattedCourse = HTMLCourse.replace("%data%",experience.schools[i].course);
    var formattedDescription = HTMLworkDescription.replace("%data%",experience.schools[i].content);
    var formattedDates=HTMLworkDates.replace('%data%',experience.schools[i].date);
   
      $('.cd-timeline-content').each(function(j){
            if(i==j){
                $(this).append(formattedTitle);
                $(this).append(formattedCourse);
                $(this).append(formattedDescription);
                $(this).append(formattedDates);
            }

      }); 
};
    