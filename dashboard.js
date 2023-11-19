var games = document.getElementById('games');

var applications = [
    {
        Name : "GamingJS Shop",
        Icon : 'images/jsshop.bmp',
        Description : 'Get more softwares from gamingjs shop!',
        AppURL : 'shop.html'
    },
    {
        Name : "Settings",
        Icon : 'images/jssettings.bmp',
        Description : 'GamingJS Settings.',
        AppURL : 'settings.html'
    }
];

var packs = JSON.parse(localStorage.getItem("apps"));

if (packs !== null) 
{
    for (const [akey, app] of Object.entries(packs)) {
        applications.push({Name : app.displayname, Description : app.description, Icon : 'images/jsshop.bmp', AppURL : 'shop.html'})
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
        window.location.href = appmanfiest.AppURL;
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
