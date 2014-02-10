# 南京邮电大学补考查询


基于[staticfile](http://staticfile.org)开源的代码修改而成。

当前数据为2013-2014学年第一学期。

数据源来自教务处网站，用Office将教务处的Excel表格转成CSV文件，用`csv2json.rb`这个Ruby脚本将其转换成JSON数据。

前端采用AngularJS，一次将JSON全部读取，然后根据搜搜索框的学号查询实时展现数据。

一个小小的问题是没写API服务器，ajax请求的bukao2013.json文件包含全部数据，有1.9MB。。。载入时间会略长。不过做成这种全静态的站点也有好处，找个静态主机随便一扔就行了。




文件结构

    ├── CNAME        
    ├── README.md
    ├── about.html    
    ├── favicon.ico
    ├── index.html     
    └── static
        ├── app.css
        ├── app.js     
        ├── bukao2013.csv
        ├── bukao2013.json
        └── csv2json.rb