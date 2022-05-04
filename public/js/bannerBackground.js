function background(){
    
    if (typeof window !== "undefined") {
        var sPath = window.location.pathname;
        var sPage = sPath.substring(sPath.lastIndexOf('/') + 1); 
        var page = document.getElementById('banner');
        var subtitle = document.getElementById('subtitle');
        var title = document.getElementById('title');
        var start = document.getElementById('start');

        if(sPage==="nosotros"){
            page.style.backgroundImage = 'url(https://www.xmple.com/wallpaper/linear-green-blue-gradient-1920x1080-c2-6495ed-3cb371-a-45-f-14.svg)';

        }

        if(sPage===""){
            page.style.background = '#b1dfbf';

        } 

        if(sPage!==""){
            subtitle.style.display='none'; 
            title.style.border='none';
            title.style.paddingRight='0';
            start.style.display='none';
        }
        else{
            subtitle.style.display='inline-block'; 
            title.style.display='inline-block';
            title.style.paddingRight='1rem';
            start.style.display='block';
        }
    }
};


function namePage (){
    if (typeof window !== "undefined") {
        var namePage="";
        var sPath = window.location.pathname;
        var sPage = sPath.substring(sPath.lastIndexOf('/') + 1); 
        if(sPage===""){
            namePage="CDMS";
        }
        if(sPage==="nosotros"){
            namePage="Nosotros";
        }
        if(sPage==="acceso_wifi"){
            namePage="Acceso a Wifi";
        }
    }
    return namePage;
};

export {namePage,background};
