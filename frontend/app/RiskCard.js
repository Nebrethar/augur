
//window.onload =
export default function RiskCard () {


document.getElementById("ciiBtn").addEventListener("click", function(){
    document.getElementById("overcii").style.display = "block"
    document.getElementById("overcii").class = "row"
    document.getElementById("ciiBtn").style.visibility = "hidden";
        var request = new XMLHttpRequest();
        function loader() {
            const basestr = document.getElementById("base").innerHTML;
            const augURL = 'https://github.com/' + basestr;
            console.log('https://bestpractices.coreinfrastructure.org/projects.json?pq=' + augURL)
            request.open('GET', 'https://bestpractices.coreinfrastructure.org/projects.json?pq=' + augURL, true);
            request.onload = function () {
                var data = JSON.parse(this.response)[0];
                if (data != undefined) {
                    //console.log('CII NAME: ' + data.name);
                    //console.log(data);
                    var badgeURL = 'https://bestpractices.coreinfrastructure.org/projects/' + data.id + '/badge';
                    //console.log(badgeURL);
                    document.getElementById("CIIbadge").src = badgeURL;
                    if (data.badge_percentage_0 < 100) {
                        document.getElementById("CII").innerHTML = data.name + ' is currently not passing CII Best Practices.';
                    }
                    else if (data.badge_percentage_1 < 100) {
                        document.getElementById("CII").innerHTML = data.name + ' is currently passing CII Best Practices.';
                    }
                    else if (data.badge_percentage_2 < 100) {
                        document.getElementById("CII").innerHTML = data.name + ' is currently passing CII Best Practices. This project has a siver status.';
                    }
                    else if (data.badge_percentage_2 == 100) {
                        document.getElementById("CII").innerHTML = data.name + ' is currently passing CII Best Practices. <br>' + data.name + ' maintains a gold status.';
                    }
                } else {
                    document.getElementById("CII").innerHTML = 'No best practice data for this repository.';
                }
            };
    }
    loader();
    request.send();
});
}