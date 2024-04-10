var games = document.getElementById('games');

var applications = [
    {
        Name : "GamingJS Shop",
        Icon : 'images/jsshop.bmp',
        Description : 'Get more softwares from gamingjs shop!',
        AppURL : 'shop.html',
        ShowInAppRunner : true,
    },
    {
        Name : "Settings",
        Icon : 'images/jssettings.bmp',
        Description : 'GamingJS Settings.',
        AppURL : 'settings.html',
        ShowInAppRunner : true,
    }
];

var packs = JSON.parse(localStorage.getItem("apps"));

if (packs !== null) 
{
    for (const [akey, app] of Object.entries(packs)) {
        var ShowInAppRunner = true;
        if (app.showinrunner === false) {
            ShowInAppRunner = false;
        }
        applications.push({Name : app.displayname, Description : app.description, Icon : 'images/jsshop.bmp', AppURL : app.appurl, ShowInAppRunner : ShowInAppRunner})
    }
}

function addApp(appmanfiest)
{
    var cont = document.createElement('div');
    var appgrid = document.createElement('div');
    var aicon = document.createElement('img');
    var aname = document.createElement('h2');
    var adescription = document.createElement('p');

    cont.className = 'appcontainer';
    aicon.className = 'appicon';
    appgrid.className = 'appgrid';
    adescription.style.marginLeft = '10px';

    aicon.src = appmanfiest.Icon;
    aname.innerText = appmanfiest.Name;
    adescription.innerText = appmanfiest.Description;

    cont.style.width = '100px';

    appgrid.appendChild(aicon);
    appgrid.appendChild(aname);
    cont.appendChild(appgrid);

    cont.addEventListener("click", function() {
        if (appmanfiest.ShowInAppRunner) {
            window.location.href = `https://adev531.github.io/GamingJS/run.html?url=${appmanfiest.AppUrl}`;
        }
        else {
            window.location.href = appmanfiest.AppUrl;
        }
    });

    cont.addEventListener("mouseenter", function() {
        cont.style.width = '300px';
    });

    cont.addEventListener("mouseleave", function() {
        cont.style.width = '100px';
    });


    games.appendChild(cont);
}

applications.forEach((value) => {
    addApp(value);
});
