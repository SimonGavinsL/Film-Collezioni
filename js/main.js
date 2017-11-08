$.ajax(
    {
        url:'https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api',
        data:{
            locationId:'292'
        },
        type:'get',
        dataType:'json',
        async:true,
        success:function(data){
            console.log("SUCCESS: mTime");
            //document.getElementById("mtime").innerHTML=data.date;
            document.open();
            document.write("<head><title>Video Collezioni</title></head><body>")
            document.write("<link rel=\"stylesheet\" href=\"css/bootstrap.min.css\">");

            document.write("<div class=\"container\">");






            document.write("<nav aria-label=\"breadcrumb\" role=\"navigation\">\n" +
                "  <ol class=\"breadcrumb\">\n" +
                "    <li class=\"breadcrumb-item\"><a href=\"#\">mTime</a></li>\n" +
                "    <li class=\"breadcrumb-item active\" aria-current=\"page\"><a href=\"#\">Douban</a></li>\n" +
                "    <li class=\"breadcrumb-item active\" aria-current=\"page\"><a href=\"#\">Omdb</a></li>\n" +
                "    <li class=\"breadcrumb-item active\" aria-current=\"page\"><a href=\"#\">Ignyte</a></li>\n" +
                "  </ol>\n" +
                "</nav>");

            // for (i in data.movies) {
            //     document.write("<ul class=\"list-group\">");
            //     document.write("<li class=\"list-group-item\">"+data.movies[i].titleEn+"</li>");
            //     document.write("<li class=\"list-group-item\">Director: "+data.movies[i].directorName+"</li>");
            //     document.write("<li class=\"list-group-item\">Type: "+data.movies[i].type+"</li>");
            //     document.write("<li class=\"list-group-item\">Actors: "+data.movies[i].actorName1+" / "+data.movies[i].actorName2+"</li>");
            //     document.write("</ul>");
            // }


            document.write("<div class=\"alert alert-info\" role=\"alert\">\n" +
                "  Here are the recent films in theatres! Check it out!\n" +
                "</div>");


            document.write("<div id=\"accordion\" role=\"tablist\">");
            for (i in data.movies) {
                document.write("<div class=\"card\">\n" +
                    "            <div class=\"card-header\" role=\"tab\" id=\"heading"+i+"\">\n" +
                    "                <h5 class=\"mb-0\">\n" +
                    "                    <a data-toggle=\"collapse\" href=\"#collapse"+i+"\" aria-expanded=\"true\" aria-controls=\"collapse"+i+"\">\n" +
                                            data.movies[i].titleEn +" " +data.movies[i].titleCn +
                    "                    </a>\n" +
                    "                </h5>\n" +
                    "            </div>\n" +
                    "\n" +
                    "            <div id=\"collapse"+i+"\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"heading"+i+"\" data-parent=\"#accordion\">\n" +
                    "\n" +
                    "                <ul class=\"list-group\">\n" +
                    "                    <li class=\"list-group-item\">Director: "+data.movies[i].directorName+"</li>\n" +
                    "                    <li class=\"list-group-item\">Type:" +data.movies[i].type+"</li>\n" +
                    "                    <li class=\"list-group-item\">Actors:" +data.movies[i].actorName1+" / "+data.movies[i].actorName2+"</li>\n" +
                    "                </ul>\n" +
                    "\n" +
                    "            </div>\n" +
                    "        </div>");
            }
            document.write("</div>");







            document.write("</div></body>");
            document.close();
        },
        error:function(data){
            console.log("ERROR: mTime");
        }
    }
);

$.ajax(
    {
        url:'https://api.douban.com/v2/movie/in_theaters',
        data:{
            apikey: '0b2bdeda43b5688921839c8ecb20399b',
            city: '上海',
            start: '0',
            count: '100'
        },
        type:'get',
        dataType:'json',
        async:true,
        success:function(data){
            console.log("SUCCESS: Douban");
            //document.getElementById("douban").innerHTML=data.total;
        },
        error:function(data){
            console.log("ERROR: Douban");
        }
    }
);

$.ajax(
    {
        url:'http://www.omdbapi.com',
        data:{
            t: '',
            y: '2017'
        },
        type:'get',
        dataType:'json',
        async:true,
        success:function(data){
            console.log("SUCCESS: Omdb");
        },
        error:function(data){
            console.log("ERROR: Omdb");
        }
    }
);

$.ajax(
    {
        url:'https://ignytesoftware/webservices/commercial/WhatsShowingWebservice1.0/MovieInformationService.svc',
        data:{
            singleWsdl: ''
        },
        type:'get',
        dataType:'xml',
        async:true,
        success:function(data){
            console.log("SUCCESS: Ignyte");
        },
        error:function(data){
            console.log("ERROR: Ignyte");
        }
    }
);