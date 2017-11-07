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

            for (i in data.movies) {
                document.write("<ul class=\"list-group\">");
                document.write("<li class=\"list-group-item\">"+data.movies[i].titleEn+"</li>");
                document.write("<li class=\"list-group-item\">Director: "+data.movies[i].directorName+"</li>");
                document.write("<li class=\"list-group-item\">Type: "+data.movies[i].type+"</li>");
                document.write("<li class=\"list-group-item\">Actors: "+data.movies[i].actorName1+" / "+data.movies[i].actorName2+"</li>");
                document.write("</ul>");
            }








            document.write("</div>");
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