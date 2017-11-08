function documentWrite(data) {
    document.open();


    document.writeln("<head>");
    document.writeln("<title>Video Collezioni</title>");
    document.writeln("<meta charset=\"UTF-8\" name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">");
    document.writeln("<link rel=\"stylesheet\" href=\"css/bootstrap.min.css\">");
    document.writeln("</head>");


    document.writeln("<body><div class=\"container\">");

    document.writeln("<nav aria-label=\"breadcrumb\" role=\"navigation\"><ol class=\"breadcrumb\">");
    document.writeln("<li class=\"breadcrumb-item\"><a href=\"#\">mTime</a></li>");
    document.writeln("<li class=\"breadcrumb-item\"><a href=\"#\">Douban</a></li>");
    document.writeln("<li class=\"breadcrumb-item\"><a href=\"#\">Omdb</a></li>");
    document.writeln("<li class=\"breadcrumb-item\"><a href=\"#\">Ignyte</a></li>");
    document.writeln("</ol></nav>");

    document.writeln("<div class=\"alert alert-info\" role=\"alert\">");
    document.write("Here are the recent films in cinemas! Check it out!");
    document.writeln("</div>");

    document.writeln("<div id=\"accordion\" role=\"tablist\">");
    for (i in data.movies) {
        document.writeln("<div class=\"card\">");
        document.writeln("<div class=\"card-header\" role=\"tab\" id=\"heading"+(i+1).toString()+"\"><h5 class=\"mb-0\"><a data-toggle=\"collapse\" href=\"#collapse"+(i+1).toString()+"\" aria-expanded=\"true\" aria-controls=\"collapse"+(i+1).toString()+"\">");
        document.write(data.movies[i].titleEn + " " + data.movies[i].titleCn);
        document.writeln("</a></h5></div>");

        document.writeln("<div id=\"collapse"+(i+1).toString()+"\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"heading"+(i+1).toString()+"\" data-parent=\"#accordion\"><ul class=\"list-group\">");
        document.writeln("<li class=\"list-group-item\">Director: "+ data.movies[i].directorName + "</li>");
        document.writeln("<li class=\"list-group-item\">Type: " + data.movies[i].type + "</li>");
        document.writeln("<li class=\"list-group-item\">Actors: " + data.movies[i].actorName1 + " / " + data.movies[i].actorName2 + "</li>");
        document.writeln("</ul></div></div>");
    }

    document.writeln("</div></div>");

    document.writeln("<script src=\"js/jquery-3.2.1.min.js\"></script>");
    document.writeln("<script src=\"js/bootstrap.min.js\"></script>");

    document.writeln("</body>");


    document.close();
}

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
            documentWrite(data);
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